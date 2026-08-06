import { AuthRepository } from "../repositories/auth.repository";
import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken } from "../utils/token";

const authRepository = new AuthRepository();

export class AuthService {
  // ===========================
  // Register User
  // ===========================
  async register(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string;
  }) {
    // Check existing user
    const existingUser = await authRepository.findUserByEmail(data.email);

    if (existingUser) {
      throw new Error("Email already exists");
    }

    // Get Default School
    const school = await authRepository.getFirstSchool();

    if (!school) {
      throw new Error(
        "No School Found. Please create a school first."
      );
    }

    // Hash Password
    const hashedPassword = await hashPassword(data.password);

    // Create User
    const user = await authRepository.createUser({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      role: "SCHOOL_ADMIN",

      school: {
        connect: {
          id: school.id,
        },
      },
    });

    // Generate Token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      token,
      user,
    };
  }

  // ===========================
  // Login User
  // ===========================
  async login(data: {
    email: string;
    password: string;
  }) {
    // Find User
    const user = await authRepository.findUserByEmail(data.email);

    if (!user) {
      throw new Error("Invalid Email or Password");
    }

    // Compare Password
    const isPasswordValid = await comparePassword(
      data.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid Email or Password");
    }

    // Generate JWT
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      token,
      user,
    };
  }
}
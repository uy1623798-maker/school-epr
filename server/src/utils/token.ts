import jwt, { type SignOptions } from "jsonwebtoken";

export interface JwtPayload {
  id: string;
  email: string;
  role: string;
}

export const generateToken = (payload: JwtPayload): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not configured.");
  }

  const expiresIn = (
    process.env.JWT_EXPIRES_IN ?? "7d"
  ) as SignOptions["expiresIn"];

  return jwt.sign(payload, secret, {
    expiresIn,
  });
};

export const verifyToken = (token: string): JwtPayload => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not configured.");
  }

  return jwt.verify(token, secret) as JwtPayload;
};
"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-110 brightness-[0.35]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-slate-950/90" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Blue Glow */}
      <div className="absolute -left-32 top-24 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[130px]" />

      {/* Purple Glow */}
      <div className="absolute -right-32 bottom-10 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[130px]" />
    </>
  );
}
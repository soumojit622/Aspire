"use client";

export default function BackgroundSpots() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Large gradient spots */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-indigo-900/10 rounded-full filter blur-[120px] opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full filter blur-[100px] opacity-40"></div>
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-blue-900/10 rounded-full filter blur-[80px] opacity-30"></div>

      {/* Small spots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-indigo-500/5"
          style={{
            width: `${Math.random() * 300 + 50}px`,
            height: `${Math.random() * 300 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: `blur(${Math.random() * 50 + 20}px)`,
            opacity: Math.random() * 0.2 + 0.1,
          }}
        ></div>
      ))}

      {/* Animated spots */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i + 100}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.05) 50%, rgba(99, 102, 241, 0) 100%)`,
            filter: `blur(${Math.random() * 30 + 10}px)`,
            opacity: Math.random() * 0.3 + 0.1,
            animation: `pulse ${Math.random() * 20 + 10}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2) rotate(10deg);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}

import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            background: `radial-gradient(circle, ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'}, transparent)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        ></div>
      ))}
      
      {/* Main loader container */}
      <div className="relative w-40 h-40 mb-8 z-10">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow [border-image:linear-gradient(to_right,var(--tw-gradient-stops))_1] [border-image-slice:1] gradient-cyan-purple"></div>
        
        {/* Middle ring */}
        <div className="absolute inset-4 border-4 border-transparent rounded-full animate-spin-slow [border-image:linear-gradient(to_right,var(--tw-gradient-stops))_1] [border-image-slice:1] gradient-cyan-purple animate-reverse" style={{animationDirection: 'reverse'}}></div>
        
        {/* Orbiting particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-orbital"
            style={{
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
        
        {/* Central pulsating orb */}
        <div className="absolute inset-0 m-auto w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-orb-pulse shadow-2xl shadow-cyan-300/50"></div>
      </div>

      {/* Animated text */}
      <div className="text-center z-10">
        <div className="typewriter-container">
          <h3 className="text-2xl font-bold gradient-text mb-2 animate-typewriter">
            Loading Top Courses
          </h3>
        </div>
        <p className="text-slate-300 text-lg mt-4 animate-fade-in" style={{animationDelay: '1.5s'}}>
          Preparing the best learning experience for you...
        </p>
      </div>
    </div>
  );
};

export default Spinner;
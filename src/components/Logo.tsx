import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = "h-16", showText = true, light = true }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <img
        src="/src/assets/images/herrera_logo_1784316944515.jpg"
        alt="Herrera Car Detailing"
        className="h-full w-auto object-contain max-h-full"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}



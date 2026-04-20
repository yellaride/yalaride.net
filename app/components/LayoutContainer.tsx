import React from "react";

interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
  isHero?: boolean;
}

export default function LayoutContainer({ 
  children, 
  className = "", 
  isHero = false 
}: LayoutContainerProps) {
  return (
    <div className={`mx-auto ${isHero ? "max-w-[1440px]" : "max-w-7xl"} px-8 md:px-12 ${className}`}>
      {children}
    </div>
  );
}

import React from 'react';

const Badge: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <span
      className={`h-12 w-12 bg-accent rounded-full inline-flex items-center text-white text-2xl justify-center font-semibold ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;

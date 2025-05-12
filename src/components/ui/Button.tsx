import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  primary?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  primary = false,
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95";
  
  const primaryClasses = "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg hover:shadow-orange-300/30 focus:ring-orange-500";
  
  const secondaryClasses = "bg-white text-orange-500 border border-orange-200 shadow-sm hover:border-orange-300 focus:ring-orange-300";
  
  const disabledClasses = "opacity-50 cursor-not-allowed hover:scale-100 active:scale-100";
  
  const widthClasses = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${primary ? primaryClasses : secondaryClasses}
        ${disabled ? disabledClasses : ''}
        ${widthClasses}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
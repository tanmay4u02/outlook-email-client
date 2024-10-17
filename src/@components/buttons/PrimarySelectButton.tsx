import React from 'react';

const PrimarySelectButton: React.FC<{
  text: string;
  onClick: () => void;
  selected?: boolean;
  className?: string;
}> = ({ text, onClick, selected, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 text-sm rounded-full bg-accent text-white ${selected && 'bg-selected-button !text-primary-text'} ms-4 hover:scale-105 transform transition duration-100 ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimarySelectButton;

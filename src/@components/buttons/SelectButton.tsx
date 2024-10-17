import React from 'react';

const SelectButton: React.FC<{
  text: string;
  onClick: () => void;
  selected?: boolean;
  className?: string;
}> = ({ text, onClick, selected, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 font-medium text-lg rounded-full border-2 border-transparent ${selected && 'bg-selected-button !border-border'} ms-4 hover:bg-selected-button ${className}`}
    >
      {text}
    </button>
  );
};

export default SelectButton;

import React from 'react';

const SelectButton: React.FC<{
  text: string;
  onClick: () => void;
  selected?: boolean;
}> = ({ text, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 border-border font-medium text-lg rounded-full ${selected && 'bg-selected-button border-2'} ms-4 hover:bg-selected-button`}
    >
      {text}
    </button>
  );
};

export default SelectButton;

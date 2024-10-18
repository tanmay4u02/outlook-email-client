import Badge from '@components/layout/Badge';
import React from 'react';

const SelectButton: React.FC<{
  text: string;
  onClick: () => void;
  selected?: boolean;
  className?: string;
  badgeValue?: number;
}> = ({ text, onClick, selected, className, badgeValue }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 font-medium text-lg relative rounded-full border-2 border-transparent ${selected && 'bg-selected-button !border-border'} ms-4 hover:bg-selected-button ${className}`}
    >
      {text}
      {Boolean(badgeValue) && (
        <Badge className="absolute h-5 w-5 -top-1 -right-1 text-[0.66rem] font-light bg-opacity-80">{badgeValue}</Badge>
      )}
    </button>
  );
};

export default SelectButton;

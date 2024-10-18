import React from 'react';

const PageInputBox: React.FC<{
  pageNo: number;
  totalPages: React.MutableRefObject<number>;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}> = ({ pageNo, totalPages, setPageNo, className }) => {
  return (
    <div className={`absolute bottom-0 bg-[#f4f5f9] text-center pt-4 ${className}`}>
      <button
        className="h-10 w-10 text-center border-2 border-border me-1 bg-selected-button text-lg font-semibold disabled:cursor-not-allowed disabled:font-light disabled:bg-transparent hover:bg-gray-300"
        onClick={() => setPageNo(pageNo - 1)}
        disabled={pageNo === 1}
      >
        {'<'}
      </button>
      <input
        className="bg-white h-10 w-16 text-center border-2 border-border font-semibold"
        value={`${pageNo} / ${totalPages.current}`}
        disabled
      />
      <button
        className="h-10 w-10 text-center border-2 border-border ms-1 bg-selected-button text-lg font-semibold disabled:cursor-not-allowed disabled:font-light disabled:bg-transparent hover:bg-gray-300"
        onClick={() => setPageNo(pageNo + 1)}
        disabled={pageNo === totalPages.current}
      >
        {'>'}
      </button>
    </div>
  );
};

export default PageInputBox;

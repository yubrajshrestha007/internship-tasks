// AddBookButton.tsx
import React from "react";

interface AddBookButtonProps {
  onClick: () => void;
}

const AddBookButton: React.FC<AddBookButtonProps> = ({ onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Add New Book
      </button>
    </div>
  );
};

export default AddBookButton;

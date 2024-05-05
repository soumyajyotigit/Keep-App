import React from "react";
import { MdColorLens, MdDelete } from "react-icons/md";

function Notes({ id, title, content, deleteItem }) {
  const deleteNote = () => {
    deleteItem(id);
  };

  return (
    <div className="border border-gray-400 w-auto rounded-md min-h-[6rem] max-h-fit p-2 hover:shadow-lg hover:shadow-gray-900 mb-3 break-inside-avoid">
      <div className="w-full font-medium text-lg dark:text-gray-300 bg-transparent">
        {title}
      </div>
      <div className="w-full h-15 resize-x-none bg-transparent text-base font-medium dark:text-gray-400">
        {content}
      </div>

      <div className="w-full  flex justify-end items-center">
        <div className="flex dark:text-gray-400 gap-1">
          <MdColorLens className="hover:bg-gray-500 hover:bg-opacity-40 w-6 h-6 rounded-full p-1" />
          <MdDelete
            onClick={deleteNote}
            className="hover:bg-gray-500 hover:bg-opacity-40 w-6 h-6 rounded-full p-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Notes;
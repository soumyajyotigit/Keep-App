import React from "react";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { MdColorLens, MdDelete, MdPictureInPicture } from "react-icons/md";

function CreateNote(props) {
  const [currentData, setCurrentData] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  const handleInputs = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setCurrentData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (currentData.title || currentData.content) {
      props.passNote(currentData);
    }
    setCurrentData({
      title: "",
      content: "",
    });

    setExpand(false);
  };

  return (
    <div className="border border-gray-500 shadow-md shadow-gray-900 w-[28rem] min-h-36 rounded-md mx-auto my-6">
      <form className="w-full h-full p-2.5">
        {expand ? (
          <input
            type="text"
            value={currentData.title}
            name="title"
            onChange={handleInputs}
            placeholder="Title"
            className="w-full font-medium text-lg dark:text-gray-300 bg-transparent outline-none"
            autoComplete="false"
          />
        ) : null}

        <textarea
          name="content"
          value={currentData.content}
          onChange={handleInputs}
          onClick={() => {
            setExpand(true);
          }}
          cols="auto"
          rows="auto"
          className="w-full resize-x-none bg-transparent text-base font-medium dark:text-gray-300 border-none outline-none transition"
          style={
            expand
              ? { height: "3rem", marginTop: "0.75rem" }
              : { height: "1.5rem", marginTop: 0 }
          }
          placeholder="Take a note..."
        ></textarea>

        {expand ? (
          <div className="w-full  flex justify-between items-center">
            <div className="flex dark:text-gray-400 gap-5">
              <FaBell className="hover:bg-gray-500 hover:bg-opacity-40 w-6 h-6 rounded-full p-1" />
              <MdColorLens className="hover:bg-gray-500 hover:bg-opacity-40 w-6 h-6 rounded-full p-1" />
              <MdPictureInPicture className="hover:bg-gray-500 hover:bg-opacity-40 w-6 h-6 rounded-full p-1" />
              <MdDelete className="hover:bg-gray-500 hover:bg-opacity-40 w-6 h-6 rounded-full p-1" />
            </div>

            <button
              onClick={addEvent}
              className=" px-8 dark:text-gray-300 font-medium"
            >
              Close
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default CreateNote;

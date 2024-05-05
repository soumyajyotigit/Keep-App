import React from "react";
import Header from "./Layout/Header";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import { useState } from "react";
// import { FaAddressCard } from 'react-icons/fa'

function MyKeep() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (Note) => {
    setAddItem((prev) => {
      return [...prev, Note];
    });
    console.log(addItem);
  };
  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currentData, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
    {/* <Header></Header> */}
      <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-800 font-sans relative">
      <Header></Header>

        <CreateNote passNote={addNote}></CreateNote>
        <div className="columns-3xs gap-3 w-full min-h-full  box-border mx-auto p-4">
         
          {addItem.map((val, index) => {
            return (
              <Notes
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
              ></Notes>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyKeep;
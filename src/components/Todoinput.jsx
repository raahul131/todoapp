import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

const Todoinput = (props) => {
  const [inputText, setInputText] = useState("");

  const enterKeyHandler = (e) => {
    if (e.keyCode == 13) {
      props.addList(inputText);
      setInputText("");
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Add Your Task"
          value={inputText}
          className="h-auto lg:w-96 w-auto rounded-xl p-2 text-black border-black border-2"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={enterKeyHandler}
        />

        <div
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
        >
          <IoMdAddCircle className="text-4xl text-black cursor-pointer bg-white rounded-lg hover:text-green-600 hover:scale-110 transition-all duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Todoinput;

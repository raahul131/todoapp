import { ImCross } from "react-icons/im";

const Todolist = (props) => {
  return (
    <>
      <div className="flex justify-between items-center w-auto p-3 mt-6 border-2 mx-14 lg:mx-48 rounded-xl text-white font-medium tracking-wider">
        {props.item}
        <ImCross
          className="text-white text-2xl hover:text-red-700 transition-all hover:scale-110 duration-200"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        />
      </div>
    </>
  );
};

export default Todolist;

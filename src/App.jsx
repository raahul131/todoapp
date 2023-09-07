import { useState } from "react";
import Header from "./components/Header";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
import Footer from "./components/Footer";

const App = () => {
  const [todolist, setTodolist] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") {
      setTodolist([...todolist, inputText]);
    }
  };

  const deleteListItem = (key) => {
    let newTodoList = [...todolist];
    newTodoList.splice(key, 1);

    setTodolist([...newTodoList]);
  };

  return (
    <>
      <Header />
      <Todoinput addList={addList} />
      {todolist.map((listItem, i) => {
        return (
          <Todolist
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
          />
        );
      })}
      {/* <Footer /> */}
    </>
  );
};

export default App;

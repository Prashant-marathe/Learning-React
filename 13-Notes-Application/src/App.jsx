import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [task, setTask] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, description });
    setTask(copyTask);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="h-auto flex flex-wrap justify-between bg-black  text-white">
      <form
        onSubmit={(e) => {
          handleForm(e);
        }}
        className="flex sm:w-full md:w-full lg:w-1/2 flex-col gap-4 p-10 "
      >
        <h1 className="text-2xl font-bold">Add Notes: </h1>

        <input
          type="text"
          className="px-5 outline-none py-2 border-2 rounded"
          placeholder="Enter Task Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          className="px-5 outline-none h-20 py-2 border-2 rounded"
          placeholder="Enter Task Details"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <button className="bg-blue-600 active:scale-95 active:bg-blue-700 text-white font-bold py-3 border-none rounded">
          Add Task
        </button>
      </form>

      <div className=" lg:border-l-2 lg:w-1/2 p-10">
        <h1 className="text-2xl py-2 font-bold">Your Notes: </h1>
        <div className="flex flex-wrap flex-row gap-5 h-full overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="h-52 w-50 rounded-2xl p-4 bg-[url('https://imgs.search.brave.com/pCoCe5YPIJki9c8Eu94uAF4g55o-BawHsAQTImhJCok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3MS9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')] bg-cover text-black"
              >
                <h3 className="font-bold my-2 text-xl">{elem.title}</h3>
                <hr className="w-full my-2 text-gray-600" />
                <p className="text-sm">{elem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

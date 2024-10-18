import { ChangeEvent, FC, useState } from "react";
import { ITask } from "./interfaces";
import Task from "./components/Task";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number | null>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const todoListCopy = todoList.slice();
    const newTask = { taskName: task, deadline: deadline };
    todoListCopy.push(newTask);
    setTodoList(todoListCopy);
    setTask("");
    setDeadline(null);
  };

  const deleteTask = (taskName: string): void => {
    const todoListCopy = todoList.filter((todo) => {
      return todo.taskName !== taskName;
    });
    setTodoList(todoListCopy);
  };
  return (
    <div className="flex flex-col h-screen w-screen bg-emerald-300 text-center">
      <h1 className="text-2xl font-bold p-5">TODO List</h1>
      {/* Input Form */}
      <div className="flex flex-row justify-center">
        <div className="flex flex-col">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Enter task"
            className="p-3 border-2 border-r-0 border-emerald-400 rounded-md rounded-r-none rounded-b-none outline-none"
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            value={deadline || ""}
            min={0}
            placeholder="Enter deadline"
            className="p-3 border-2 border-r-0 border-emerald-400 rounded-md border-t-0 rounded-r-none rounded-t-none outline-none"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-emerald-800 text-white px-3 rounded-r-md"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      {/* Main Content (TODOs) */}
      <main className="container flex flex-col gap-4 w-5/6 md:w-3/4 lg:w-1/2 mx-auto mt-10 py-6 px-3">
        {todoList.map((todo, key: number) => (
          <Task
            task={todo}
            key={key}
            onClick={() => deleteTask(todo.taskName)}
          />
        ))}
      </main>
    </div>
  );
};

export default App;

import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  onClick: (taskName: string) => void;
}

function Task({ task, onClick }: Props) {
  return (
    <div className="flex w-full">
      <div className="flex w-9/12">
        <div className="text-green-800 w-8/12 p-3 bg-green-100 border-2 border-emerald-600">
          {task.taskName}
        </div>
        <div className="text-green-800 w-4/12 p-3 bg-green-100 border-2 border-emerald-600 border-r-0 border-l-0">
          {task.deadline}
        </div>
      </div>
      <button
        onClick={() => onClick(task.taskName)}
        className="bg-red-600 text-white w-3/12 p-3"
      >
        X
      </button>
    </div>
  );
}

export default Task;

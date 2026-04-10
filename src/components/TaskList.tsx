import TaskItem from "./TaskItem";

type Task = {
    id: number;
    title: string;
    completed: boolean;
    created_at?: string;
};

type TaskListProps = {
    tasks: Task[];
    completeTask: (id: number) => Promise<boolean>;
    deleteTask: (id: number) => Promise<boolean>;
};

export default function TaskList({ tasks, completeTask, deleteTask }: TaskListProps) {
    if (tasks.length === 0) {
        return <p>No tasks yet.</p>;
    }

    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} completeTask={completeTask} deleteTask={deleteTask} />
            ))}
        </div>
    );
}
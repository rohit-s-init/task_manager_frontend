
type TaskItemProps = {
    task: {
        id: number;
        title: string;
        completed: boolean;
        created_at?: string;
    };
    completeTask: (id: number) => Promise<boolean>;
    deleteTask: (id: number) => Promise<boolean>;
};


export default function TaskItem({ task, completeTask, deleteTask }: TaskItemProps) {


    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            border: "1px solid #ccc",
            marginBottom: "8px",
            borderRadius: "6px"
        }}>
            <span style={{
                textDecoration: task.completed ? "line-through" : "none"
            }}>
                {task.title}
            </span>

            <span style={{ cursor: "pointer" }} onClick={() => { completeTask(task.id) }}>
                {task.completed ? "✅" : "❌"}
            </span>
            <span style={{ cursor: "pointer" }} onClick={() => { deleteTask(task.id) }}>
                {"D"}
            </span>
        </div>
    );
}
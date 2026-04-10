
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

            <div style={{display: "flex"}}>
                <span style={{ cursor: "pointer" }} onClick={() => { completeTask(task.id) }}>
                    {task.completed ? "✅" : "❌"}
                </span>
                <span style={{ cursor: "pointer" }} onClick={() => { deleteTask(task.id) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                </span>
            </div>

        </div>
    );
}
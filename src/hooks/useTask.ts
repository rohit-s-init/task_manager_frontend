import { useEffect, useState } from "react";
import { completeTask, deleteTasks, createTasks, getTasks } from "../services/taskapi";

type Task = {
    id: number;
    title: string;
    completed: boolean;
    created_at?: string;
};


interface LoadResponse {
    success: boolean,
    message: string,
    data: Task[]
}

interface CompleteResponse {
    success: boolean,
    message: string
}

interface DeleteResponse {
    success: boolean,
    message: string
}

interface CreateResponse {
    success: boolean,
    message: string,
    data: Task
}

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchTasks() {
        setLoading(true);
        try {
            setError(null);

            const response = await getTasks();
            const res: LoadResponse = await response.json();

            if (!res.success) {
                setError(res.message);
                setLoading(false);
                return false;
            }
            else {
                setTasks(res.data);
                setLoading(false);
                return true;
            }



        } catch (err: any) {
            setError("Something went wrong");
            setLoading(false);
            return false;
        }
    };

    async function completeTasks(id: number) {
        setLoading(true);
        try {
            const response = await completeTask(id);
            const resp: CompleteResponse = await response.json();
            if (!resp.success) {
                setError(resp.message);
                setLoading(false);
                return false;
            }
            else {
                setTasks((prev) => {
                    let neu = prev.map(task => {
                        if (task.id == id) {
                            return { ...task, completed: true }
                        }
                        else {
                            return task;
                        }

                    })
                    return neu;
                })
                setLoading(false);
                return true;;
            }
        } catch (error) {
            console.log(error);
            setError("some internal error" + JSON.stringify(error));
            setLoading(false);
            return false;
        }
    }

    async function deleteTask(id: number) {
        setLoading(true);
        try {
            const response = await deleteTasks(id);
            const resp: DeleteResponse = await response.json();
            if (!resp.success) {
                setError(resp.message);
                setLoading(false);
                return false;
            }
            else {
                setTasks((prev) => {
                    let neu: any[] = [];
                    prev.forEach(task => {
                        if (task.id != id) {
                            neu.push(task);
                        }
                    })
                    return neu;
                })
                setLoading(false);
                return true;
            }

        } catch (error) {
            setLoading(false);
            return false;
        }
    }

    async function createTask(title: string) {
        setLoading(true);
        try {
            const response = await createTasks(title);
            const resp: CreateResponse = await response.json();

            if (!resp.success) {
                setError(resp.message);
                setLoading(false);
                return false;
            }
            else {
                setTasks((prev) => {
                    return [resp.data, ...prev]
                });
                setLoading(false);
                return true;
            }

        } catch (error) {
            console.log(error);
            setError("unexpected error occured : ");
            setLoading(false);
            return false;
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    function clearError() {
        setError(null);
    }

    return {
        tasks,
        loading,
        error,
        refetch: fetchTasks,
        completeTasks,
        deleteTask,
        clearError,
        createTask
    };
}
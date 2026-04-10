const BASE_URL = import.meta.env.VITE_API_URL;

export function getTasks() {
    return fetch(BASE_URL + "/tasks");
}

export function completeTask(id: number) {
    return fetch(`${BASE_URL}/tasks/${id}`, {
        method: "PATCH"
    })
}
export function deleteTasks(id: number) {
    return fetch(`${BASE_URL}/tasks/${id}`, {
        method: "DELETE"
    })
}
export function createTasks(title: string) {
    return fetch(`${BASE_URL}/tasks/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title
        })
    })
}
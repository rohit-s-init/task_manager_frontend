import { useState } from "react";

type Props = {
    onAdd: (title: string) => Promise<boolean> | void;
};

export default function TaskForm({ onAdd }: Props) {
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // if (!title.trim()) return;

        try {
            setLoading(true);

            const success = await onAdd(title.trim());

            if (success !== false) {
                setTitle(""); // clear input
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-5 max-w-lg m-auto">
            <form
                onSubmit={handleSubmit}
                className="flex gap-2 mb-4 "
            >
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? "Adding..." : "Add"}
                </button>
            </form>
        </div>
    );
}
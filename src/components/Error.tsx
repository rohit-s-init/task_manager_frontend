type Props = {
    message: string | null;
    onClose: () => void;
};

export default function Error({ message, onClose }: Props) {
    if (!message) return <></>
    return (
        <div className="fixed top-5 right-5 z-50">
            <div className="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[250px]">

                {/* Icon */}
                <span className="text-xl">⚠️</span>

                {/* Message */}
                <p className="flex-1 text-sm">{message}</p>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="text-white font-bold hover:opacity-70"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
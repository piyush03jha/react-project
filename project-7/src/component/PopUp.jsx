import { ImCross } from "react-icons/im";

const PopUp = ({ type, onClose, onConfirm }) => {
  const isDelete = type === "delete";

  return (
    // Full-screen overlay
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="relative">
        <div className="w-[500px] bg-gray-800 text-white flex flex-col justify-around items-center h-[300px] rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-2">
            {isDelete ? "Delete" : "Edit"}
          </h1>

          <p className="mb-4">
            {isDelete
              ? "Are you really sure you want to delete this?"
              : "Are you really sure you want to edit this?"}
          </p>

          <div>
            <button
              className="bg-red-500 px-4 py-2 rounded"
              onClick={onConfirm}
            >
              Yes
            </button>
            <button
              className="bg-green-500 px-4 py-2 rounded ml-3"
              onClick={onClose}
            >
              No
            </button>
          </div>
        </div>

        {/* Cross button */}
        <button
          className="absolute -top-3 -right-3 bg-white rounded-full p-2 text-red-500 shadow"
          onClick={onClose}
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default PopUp;

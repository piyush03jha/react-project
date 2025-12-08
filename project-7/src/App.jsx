import { useState } from 'react';
import './App.css';
import PopUp from './component/PopUp';

function App() {
  const [activeComponent, setActiveComponent] = useState("");

  const handleOpenDelete = () => setActiveComponent("delete");
  const handleOpenEdit = () => setActiveComponent("edit");
  const handleClose = () => setActiveComponent("");

  const handleConfirm = () => {
    if (activeComponent === "delete") {
      console.log("Deleted item ✅");
    } else if (activeComponent === "edit") {
      console.log("Edit confirmed ✏️");
    }
    handleClose();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Buttons only when popup is NOT open */}
      {!activeComponent && (
        <div className="flex gap-6">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleOpenDelete}
          >
            Delete
          </button>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleOpenEdit}
          >
            Edit
          </button>
        </div>
      )}

      {/* Popup only when activeComponent has value */}
      {activeComponent && (
        <PopUp
          type={activeComponent}
          onClose={handleClose}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

export default App;

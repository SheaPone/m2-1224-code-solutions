import './App.css';
import { useState } from 'react';
import { Modal } from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(): void {
    setIsOpen(true);
  }
  function handleClose(): void {
    setIsOpen(false);
  }

  function handleDelete() {
    alert('It has been deleted');
    setIsOpen(false);
  }
  return (
    <>
      <button onClick={handleClick}>Delete Me</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <p>Are you sure you want to delete?</p>
        <button onClick={handleClose} className="cancel">
          Cancel
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </Modal>
    </>
  );
}

export default App;

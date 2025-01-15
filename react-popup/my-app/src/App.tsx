import './App.css';
import { Popup, menuItems } from './Popup';
import { useState, useRef } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLElement | null>(null);
  function openPopup(): void {
    setIsOpen(true);
  }
  function closePopup(): void {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openPopup}>Pop up!</button>
      <p>Here is the paragraph above popup</p>
      <Popup
        isOpen={isOpen}
        positionTo={buttonRef.current}
        onClose={closePopup}>
        <div
          className="menu-wrapper"
          style={{
            position: 'absolute',
            top: '50%',
            left: '44%',
            zIndex: 1000,
            backgroundColor: 'white',
          }}>
          <ul className="border-2 border-black">
            {menuItems.map((menu) => (
              <li key={menu.name} className="list-none">
                {menu.name}
              </li>
            ))}
          </ul>
        </div>
      </Popup>
      <p>Here is the paragraph below the popup</p>
    </>
  );
}

export default App;

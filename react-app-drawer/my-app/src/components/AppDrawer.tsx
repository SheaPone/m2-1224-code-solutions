import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { Menu, MenuItem } from './Menu';

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex w-full">
      <div className={`bg-white-900 text-white ${isOpen ? 'w-22' : 'w-20'}`}>
        <div className="p-4 text-black">
          <FiAlignJustify size={24} onClick={toggle} />
        </div>
        <Menu menuItems={menuItems} isOpen={isOpen} />
      </div>
      <div className={`flex-grow ${isOpen ? 'ml-64' : 'ml-16'}`}>
        <Outlet />
      </div>
    </div>
  );
}

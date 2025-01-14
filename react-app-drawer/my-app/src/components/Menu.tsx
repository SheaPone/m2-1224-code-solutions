import { NavLink } from 'react-router-dom';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type MenuProps = {
  menuItems: MenuItem[];
  isOpen: boolean;
};

export function Menu({ menuItems, isOpen }: MenuProps) {
  return (
    <ul className="mt-4">
      {isOpen && <h2 className="ml-5 text-black text-lg">Hylian Shopping</h2>}
      {menuItems.map((menu) => (
        <li key={menu.name} className="flex items-center py-2 px-4">
          <NavLink
            to={menu.path}
            className={() =>
              `flex items-center text-black hover:bg-slate-300 p-2 rounded`
            }>
            <img src={menu.iconUrl} className="w-6 h-6" />
            {isOpen && <div className="ml-3 pr-10">{menu.name}</div>}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

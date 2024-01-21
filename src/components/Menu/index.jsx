import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.css'
import Lang from "../Lang"

const isActive = ({ isActive }) => `flex-1 whitespace-nowrap grid place-content-center border-r-2 border-b-2 border-blue-600 text-xl hover:h-[80px] hover:rounded-b-3xl font-medium text-center w-2/5 bg-blue-700 ${isActive ? "text-sky-200 hover:text-sky-300" : "text-sky-50 hover:text-sky-100"}`;

export const Menu = () => {
  const pageTitle = Lang("page-title");
  const lng = localStorage.getItem("lng") || "en";
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen(!open);
  }

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  const options = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
  ]

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    localStorage.setItem("lng", event.target.value);
    window.location.reload(true);
  }

  const listItems = options.map((option) =>
    <li key={option.value} className={`border-x-2 h-16 border-blue-600 border-b-2 hover:text-sky-700 ${(option.value === lng) ? "bg-blue-500 hover:bg-blue-300" : "bg-blue-400 hover:bg-blue-200"}`}><button onClick={handleSelectChange} value={option.value} className="w-full h-full menu-button">{option.label}</button></li>
  );

  return (
    <nav className="w-screen navbar opacity-80 fixed">
      <div className="-mb-px flex h-full">
        <NavLink className={isActive} to="/home">
          {Lang("home")}
        </NavLink>
        <NavLink className={isActive} to="/projects">
          {Lang("projects")}
        </NavLink>
        <div className="w-1/5 text-center text-sky-50 hover:text-sky-100 border-b-2 border-blue-600 bg-blue-700">
          <button className="w-full h-full buttonDropdown text-xl" onClick={handleOpenChange}>{Lang("language")}</button>
          {
            open ?
              (<ul className="menu w-1/5 mt-[2px]">
                {listItems}
              </ul>)
              : null
          }
        </div>
      </div>
    </nav>
  )
}
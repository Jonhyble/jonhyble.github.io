import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.css'
import Lang from "../Lang"

const isActive = ({ isActive }) => `flex-1 whitespace-nowrap border-r-2 px-1 py-4 text-xl font-medium text-center w-1/3 container-nav ${isActive ? "active" : "text-white unactive"}`;

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
    <li key={option.value} className={`menu-item border-x-2 border-b-2 ${(option.value === lng) ? "lng-selected" : "option-no-selected"}`}><button onClick={handleSelectChange} value={option.value} className="w-full h-full menu-button">{option.label}</button></li>
  );

  return (
    <nav className="w-screen navbar">
      <div className="border-b-2 border-gray-200 -mb-px flex h-full">
        <NavLink className={isActive} to="/home">
          {Lang("home")}
        </NavLink>
        <NavLink className={isActive} to="/projects">
          {Lang("projects")}
        </NavLink>
        <div className="w-1/3 text-center py-auto container-nav">
          <button className="w-full h-full buttonDropdown text-xl" onClick={handleOpenChange}>{Lang("language")}</button>
          {
            open ?
              (<ul className="menu w-1/3 h-fit mt-[2px]">
                {listItems}
              </ul>)
              : null
          }
        </div>
      </div>
    </nav>
  )
}
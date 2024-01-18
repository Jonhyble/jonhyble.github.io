import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import './index.css'
import Lang from "../Lang"

const isActive = ({ isActive }) => `flex-1 whitespace-nowrap border-r-2 px-1 py-4 text-xl font-medium text-center w-1/3 container-nav ${isActive ? "active" : "text-white unactive"}`;

export const Menu = () => {
  const pageTitle = Lang("page-title");
  const lng = localStorage.getItem("lng") || "en";

  useEffect(() => {
      document.title = pageTitle;
  }, []);

  const options = [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Español' },
  ]

  const handleSelectChange = (event) => {
      localStorage.setItem("lng", event.target.value);
      window.location.reload(true);
  }

  const listItems = options.map((option) =>
    <option key={option.value} value={option.value} className={`text-xl ${(option.value === lng) ? "lng-selected" : "option-no-selected"}`}>{option.label}</option>
  );

  return (
      <nav className="w-screen h-fit">
          <div className="border-b border-gray-200 -mb-px flex">
              <NavLink className={isActive} to="/home">
                  {Lang("home")}
              </NavLink>
              <NavLink className={isActive} to="/projects">
                  {Lang("projects")}
              </NavLink>
              <div className="w-1/3 grid place-items-center container-nav">
                <select id="lngSelect" className="w-full h-full text-center bg-transparent font-medium text-xl" defaultValue={localStorage.getItem("lng") || "en"} onChange={handleSelectChange}>
                  {listItems}
                </select>
              </div>
          </div>
      </nav>
  )
}
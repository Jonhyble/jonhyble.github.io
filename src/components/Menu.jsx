import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../constants";
import { useState } from "react";

const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

export const Menu = () => {
    const { i18n, t } = useTranslation();

    const onChangeLang = (event) =>{
        i18n.changeLanguage(event.target.value);
    }

    return (
        <nav>
            <div>
                <NavLink className={isActive} to="/">
                    {t("home")}
                </NavLink>
                <NavLink className={isActive} to="/projects">
                    {t("projects")}
                </NavLink>
            </div>

            <select defaultValue={i18n.language} onChange={onChangeLang}>
                {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                    {label}
                </option>
                ))}
            </select>
        </nav>
    )
}
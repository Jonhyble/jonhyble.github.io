import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

export const Menu = () => {
    const { i18n, t } = useTranslation();
    const lng = i18n.language;

    return (
        <nav>
            <div>
                <NavLink className={isActive} to={`/${lng}/`}>
                    {t("home")}
                </NavLink>
                <NavLink className={isActive} to={`/${lng}/projects`}>
                    {t("projects")}
                </NavLink>
            </div>
        </nav>
    )
}
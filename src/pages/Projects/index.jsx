import { useTranslation } from "react-i18next";
import React, { useEffect } from 'react'

export const Projects = () => {
    const { i18n, t } = useTranslation();
    const lng = localStorage.getItem("lng") || i18n.language;
    const pageTitle = t("page-title");

    useEffect(() => {
        i18n.changeLanguage(lng);
    }, []);

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    return (
        <main>
            <h1>{t("projects")}</h1>
        </main>
    )
}
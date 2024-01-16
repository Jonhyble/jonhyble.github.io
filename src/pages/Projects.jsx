import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react'

export const Projects = () => {
    const { i18n, t } = useTranslation();
    const { lng } = useParams();
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
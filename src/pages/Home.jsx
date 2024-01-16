import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react'

export const Home = () => {
    const { i18n, t } = useTranslation();
    const { lng } = useParams();
    const name = "Jonathan Joshua Romo Valadez";
    const pageTitle = t("page-title");

    useEffect(() => {
        i18n.changeLanguage(lng);
    }, []);

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    return (
        <main>
            <h1 className="">{t("title")}</h1>
            <p className="text-3xl font-bold underline">{t("label")}</p>
            <p>{t("user", { name: name })}</p>
        </main>
    )
}
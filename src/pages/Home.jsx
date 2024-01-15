import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react'

export const Home = () => {
    const { i18n, t } = useTranslation();
    const { lng } = useParams();
    const name = "Jonathan Joshua Romo Valadez";

    useEffect(() => {
        i18n.changeLanguage(lng);
    }, []);


    return (
        <main>
            <h1>{t("title")}</h1>
            <p>{t("label")}</p>
            <p>{t("user", { name: name })}</p>
        </main>
    )
}
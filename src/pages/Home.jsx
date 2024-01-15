import { useTranslation } from "react-i18next";
import React, { useState } from 'react'

export const Home = () => {
    const { t } = useTranslation();
    const [name, setName] = useState("Jonathan Joshua Romo Valadez");

    return (
        <main>
            <h1>{t("title")}</h1>
            <p>{t("label")}</p>
            <p>{t("user", { name: name })}</p>
        </main>
    )
}
import { useTranslation } from "react-i18next";

export const Projects = () => {
    const { t } = useTranslation();

    return (
        <main>
            <h1>{t("projects")}</h1>
        </main>
    )
}
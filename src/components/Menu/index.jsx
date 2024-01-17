import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Select from 'react-select'
import React, { useState, useEffect } from 'react'
import chroma from 'chroma-js';
import './index.css'

const isActive = ({ isActive }) => `flex-1 whitespace-nowrap border-r-2 px-1 py-4 text-xl font-medium text-center w-1/3 ${isActive ? "active" : "text-white"}`;

export const Menu = () => {
    const { i18n, t } = useTranslation();
    const lng = localStorage.getItem("lng") || i18n.language;
    const options = [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
    ]
    const [item, setItem] = useState(options.find(item => item.value === lng));

    useEffect(() => {
        setItem(options.find(item => item.value === lng))
    }, [lng]);

    const handleSelectChange = (event) => {
        i18n.changeLanguage(event.value);
        localStorage.setItem("lng", event.value);
    }

    const dot = (color = 'transparent') => ({
        alignItems: 'center',
        display: 'flex',
      
        ':before': {
          backgroundColor: color,
          borderRadius: 10,
          content: '" "',
          display: 'block',
          marginRight: 8,
          height: 10,
          width: 10,
        },
    });

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          const color = chroma("#fff");
          return {
            ...styles,
            backgroundColor: isDisabled
              ? undefined
              : isSelected
              ? "#fff"
              : isFocused
              ? color.alpha(0.1).css()
              : undefined,
            color: isDisabled
              ? '#ccc'
              : isSelected
              ? chroma.contrast(color, 'white') > 2
                ? 'white'
                : 'black'
              : "#fff",
            cursor: isDisabled ? 'not-allowed' : 'default',
      
            ':active': {
              ...styles[':active'],
              backgroundColor: !isDisabled
                ? isSelected
                  ? "#fff"
                  : color.alpha(0.3).css()
                : undefined,
            },
          };
        },
        input: (styles) => ({ ...styles, ...dot() }),
        placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
        singleValue: (styles, { data }) => ({ ...styles, ...dot("#fff") }),
      };

    return (
        <nav className="w-screen h-fit">
            <div className="border-b border-gray-200 -mb-px flex space-x-8 px-4">
                <NavLink className={isActive} to="/home">
                    {t("home")}
                </NavLink>
                <NavLink className={isActive} to="/projects">
                    {t("projects")}
                </NavLink>
                <div className="w-1/3 grid place-items-center">
                    <Select options={options} className="w-fit text-center" value={item} onChange={handleSelectChange} styles={colourStyles} />
                </div>
            </div>
        </nav>
    )
}
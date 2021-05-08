import React, {useEffect, useState} from "react";
import Prism from "prismjs";
import style from './Code.module.sass'
import "prismjs/themes/prism-tomorrow.css";
import { FiClipboard } from 'react-icons/fi'

const Code = ({ children, language }) => {


    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const copyCode = () => {
        navigator.clipboard.writeText(children)
        alert('copied!')
    }

    return (
        <div className={style.code}>
            <button onClick={copyCode}  type="button" style={{
                position: "absolute",
                padding: 9,
                right: 6,
                top: 6,
                cursor: 'pointer',
                background: 'transparent',
                border: '1px solid #fff',
                outline: 'none'}}>
                <FiClipboard height={24} width={24} color="white"/>
            </button>
          <pre style={{background: 'var(--dark-color)'}}>
                <code className={`language-${language}`}>{children}</code>
          </pre>
        </div>
    )
}

export default Code
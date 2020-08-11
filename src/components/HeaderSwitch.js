import React from 'react';
import parse from 'html-react-parser';

import UploadForm from './UploadForm';

import Brand from '../assets/new-animeshon-logo-white.png';

import './Header.scss';
import Switch from './Switch';

const Header = ({
    handleSubmit,
    valueHeaderError,
    valueHeaderSuccess,
    strings,
    lang,
}) => (
        <header className="header">
            <img className="brand" src={Brand} alt="Animeshon Logo" />
            <div className="subscription-box">
                <h1 className={lang === 'ja' ? 'italic' : ''}>
                    {strings.headerTitle}
                </h1>
                <h2>{strings.headerUnderline}</h2>
                <UploadForm handleSubmit={handleSubmit} />
                {valueHeaderError === '' ? null : (
                    <p className="error">{parse(valueHeaderError)}</p>
                )}
                {valueHeaderSuccess === '' ? null : (
                    <p className="success">{parse(valueHeaderSuccess)}</p>
                )}
                <p>{strings.headerFormDisclaimer}</p>
            </div>
        </header>
    );

export default Header;

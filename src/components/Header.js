import React from 'react';
import parse from 'html-react-parser';

import Switch from './Switch';

import Brand from '../assets/new-animeshon-logo-white.png';

import './HeaderSwitch.scss';

const Header = ({
    handleSubmit,
}) => (
        <header className="header">
            <img className="brand" src={Brand} alt="Animeshon Logo" />
            <div className="subscription-box">
                <Switch handleSubmit={handleSubmit} />
            </div>
        </header>
    );

export default Header;

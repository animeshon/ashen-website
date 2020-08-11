import React, { StrictMode } from 'react';

import { navigate } from '@reach/router';
import queryString from 'query-string';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { stringsLang } from '../resources/translations';

import '../styles/reset.scss';

export default class Upload extends React.Component {
    state = {
        lang: 'en',
    };

    componentDidMount() {
        const presetLang = queryString.parse(window.location.search).hl
        const isoLang = navigator.language;
        const machine = navigator.platform;
        const lang = presetLang ? (presetLang.startsWith('ja') ? 'ja' : 'en') : (navigator.language.startsWith('ja') ? 'ja' : 'en');

        this.setState(
            {
                isoLang,
                lang,
                machine,
                dataLang: stringsLang(lang),
            },
            () => {
                navigate(`?hl=${lang === 'en' ? 'en-US' : 'ja-JP'}`);
            }
        );
    }

    changeLanguage = e => {
        const lang = e.target.dataset.lang;

        this.setState(
            {
                lang,
                dataLang: stringsLang(lang),
            },
            () => {
                navigate(`?hl=${lang === 'en' ? 'en-US' : 'ja-JP'}`);
            }
        );
    };

    render() {
        const {
            dataLang,
            lang,
        } = this.state;

        if (dataLang !== undefined) {
            return (
                <StrictMode>
                    <div className="lang-selector">
                        <span // eslint-disable-line
                            data-lang="en"
                            onClick={e => this.changeLanguage(e)}
                            className={`flags uk${
                                lang.includes('en') ? ' selected' : ''
                                }`}
                        />
                        <span // eslint-disable-line
                            data-lang="ja"
                            onClick={e => this.changeLanguage(e)}
                            className={`flags jp${
                                lang.includes('ja') ? ' selected' : ''
                                }`}
                        />
                    </div>
                    <Header
                        handleSubmit={this.handleSubmit}
                    />
                    <Footer />
                </StrictMode>
            );
        } else {
            return 'Loading';
        }
    }
}
import React, { StrictMode } from 'react';

import { navigate } from '@reach/router';
import queryString from 'query-string';

import HeaderSwitch from '../components/HeaderSwitch';
import Footer from '../components/Footer';

import { stringsLang } from '../resources/translations';

import '../styles/reset.scss';

export default class ResultView extends React.Component {
    state = {
        lang: 'en',
    };

    componentDidMount() {
        const presetLang = queryString.parse(window.location.search).hl

        this.setState(
            {
                lang: presetLang,
                // dataLang: stringsLang(presetLang),
                dataLang: stringsLang('en'),
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
                    {/* <div className="lang-selector">
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
                    </div> */}
                    <HeaderSwitch />
                    <Footer />
                </StrictMode>
            );
        } else {
            return 'Loading';
        }
    }
}
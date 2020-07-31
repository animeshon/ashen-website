import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { navigate } from '@reach/router';
import queryString from 'query-string';

import { validate, checkValidity } from './resources/validation';

import Header from './components/Header';
import AshenFeature01L from './components/Slide01L';
import AshenFeature02R from './components/Slide02R';
import AshenFeature03L from './components/Slide03L';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import { stringsLang } from './resources/translations';

import './styles/reset.scss';

class App extends React.Component {
    state = {
        valueHeader: '',
        valueTrial: '',
        valueHeaderError: '',
        valueTrialError: '',
        valueHeaderSuccess: '',
        valueTrialSuccess: '',
        accordionSelection: 0,
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

    handleTypeEmail = e => {
        this.setState({
            valueHeaderError: '',
            valueTrialError: '',
            [e.target.title]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        e.persist();
        
        // TODO: Handle file upload and AJAX response.
    };

    accordionOnClick = e => {
        const tabs = document.querySelectorAll('.question .contents');
        this.setState(
            {
                accordionSelection: parseInt(e.target.dataset.collapsed, 10),
            },
            () => {
                const { accordionSelection } = this.state;
                tabs.forEach(tab => {
                    const selected = parseInt(
                        tab.getAttribute('data-collapsed'),
                        10
                    );
                    if (selected === accordionSelection) {
                        tab.classList.toggle('active');
                    } else {
                        tab.classList.remove('active');
                    }
                });
            }
        );
    };

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
            valueHeader,
            valueTrial,
            accordionSelection,
            valueHeaderError,
            valueTrialError,
            valueHeaderSuccess,
            valueTrialSuccess,
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
                        lang={lang}
                        strings={dataLang.header || {}}
                        valueHeader={valueHeader}
                        valueHeaderError={valueHeaderError}
                        valueHeaderSuccess={valueHeaderSuccess}
                        typeFunction={this.handleTypeEmail}
                        handleSubmit={this.handleSubmit}
                    />
                    <AshenFeature01L
                        lang={lang}
                        strings={dataLang.feature_00 || {}}
                    />
                    <AshenFeature02R
                        lang={lang}
                        strings={dataLang.feature_01 || {}}
                    />
                    <AshenFeature03L
                        lang={lang}
                        strings={dataLang.feature_02 || {}}
                    />
                    <FAQ
                        lang={lang}
                        strings={dataLang.faq || {}}
                        accordionSelection={accordionSelection}
                        accordionOnClick={this.accordionOnClick}
                    />
                    <Footer />
                </StrictMode>
            );
        } else {
            return 'Loading';
        }
    }
}

render(<App />, document.getElementById('root'));

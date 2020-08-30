import React, { StrictMode } from 'react';

import { navigate } from '@reach/router';
import queryString from 'query-string';

import Header from '../components/Header';
import AshenFeature01L from '../components/Slide01L';
import AshenFeature02R from '../components/Slide02R';
import AshenFeature03L from '../components/Slide03L';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

import { stringsLang } from '../resources/translations';

import '../styles/reset.scss';

export default class Home extends React.Component {
    state = {
        valueHeader: '',
        valueTrial: '',
        valueHeaderError: '',
        valueTrialError: '',
        valueHeaderSuccess: '',
        valueTrialSuccess: '',
        accordionSelection: 0,
        lang: 'en',
        isLoading: false,
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
                // dataLang: stringsLang(lang),
                dataLang: stringsLang('en'),
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
        this.setState({ isLoading: true });

        fetch("https://source.animeapis.com/v1beta2/search/image", {
            method: 'POST',
            body: e.target.files[0]
        })
            .then(response => response.json())
            .then(
                (resp) => {
                    console.log(resp);

                    const anidb = resp.results[0].crossreferences["anidb.net"];
                    const thetvdb = resp.results[0].crossreferences["thetvdb.com"];
                    const distance = resp.results[0].distance;
                    const responseTime = (parseFloat(resp.results[0].queryTimeMs) / 1000).toFixed(2);

                    var confidence = "UNKNOWN";
                    if (parseFloat(distance) < 8) {
                        confidence = "HIGH";
                    } else if (parseFloat(distance) < 15) {
                        confidence = "MEDIUM";
                    } else if (parseFloat(distance) < 20) {
                        confidence = "LOW";
                    } else {
                        confidence = "MISMATCH";
                    }

                    const hl = queryString.parse(window.location.search).hl;
                    const location = `/results?anidb_id=${anidb.animeId}&thetvdb_id=${thetvdb.animeId}&confidence=${confidence}&t=${responseTime}&hl=${hl}`;

                    this.props.history.push(location);
                },
                (error) => {
                    console.log(error);
                }
            )
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
            accordionSelection,
            valueHeaderError,
            valueHeaderSuccess,
            dataLang,
            lang,
            isLoading,
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
                    <Header
                        lang={lang}
                        strings={dataLang.header || {}}
                        valueHeaderError={valueHeaderError}
                        valueHeaderSuccess={valueHeaderSuccess}
                        handleSubmit={this.handleSubmit}
                        isLoading={isLoading}
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
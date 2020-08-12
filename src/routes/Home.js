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
        this.setState({ isLoading: true });

        const data = new FormData()
        data.append('image', e.target.files[0])

        fetch("https://source.animeapis.com/v1/search", {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(
                (result) => {
                    // TODO: This part shouldn't be required after fixing the backend.
                    const resp = JSON.parse(result);
                    const xref = JSON.parse(resp.response.docs[0].xref);

                    const hl = queryString.parse(window.location.search).hl;
                    const location = `/results?anidb_id=${xref.AniDBAnimeID}&thetvdb_id=${xref.TvDBSeriesID}&hl=${hl}`;

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
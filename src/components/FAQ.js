import React from 'react';

import './FAQ.scss';

const FAQ = ({ accordionOnClick, strings, lang }) => (
    <div className="manga-feature faq-feature">
        <h2 className={lang === 'ja' ? 'italic' : ''}>{strings.headline}</h2>
        <div className="accordion">
            <div
                className="question"
                data-collapsed={1}
                onClick={e => accordionOnClick(e)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
                <p data-collapsed={1}>{strings.questionOne}</p>
                <div data-collapsed={1} className="contents">
                    <p dangerouslySetInnerHTML={{__html: strings.responseOne}}></p>
                </div>
            </div>
            <div
                className="question"
                data-collapsed={2}
                onClick={e => accordionOnClick(e)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
                <p data-collapsed={2}>{strings.questionTwo}</p>
                <div data-collapsed={2} className="contents">
                    <p dangerouslySetInnerHTML={{__html: strings.responseTwo}}></p>
                </div>
            </div>
            <div
                className="question"
                data-collapsed={3}
                onClick={e => accordionOnClick(e)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
                <p data-collapsed={3}>{strings.questionThree}</p>
                <div data-collapsed={3} className="contents">
                    <p dangerouslySetInnerHTML={{__html: strings.responseThree}}></p>
                </div>
            </div>
        </div>
    </div>
);

export default FAQ;
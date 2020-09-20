import React from 'react';
import queryString from 'query-string';

import './Switch.scss';

import AnidbImage from '../assets/anidb.png';
import TvdbImage from '../assets/tvdb.png';

const Switch = () => {
    const confidence = queryString.parse(window.location.search).confidence;
    const responseTime = queryString.parse(window.location.search).t;

    return (
        <div
            id="mc-signup"
            className={'from-header'}
        >
            <div className={"choose-text"}>
                <h1>SOURCE PLATFORM?</h1>
            </div>
            <div className={"confidence"}><p>Confidence: <span className={`confidence-${confidence}`}>{confidence}</span> | Query time: {`${responseTime}ms`}</p></div>
            <div className={"wrap"}>
                {queryString.parse(window.location.search).anidb_id ?
                    <a className={"tile"} href={`https://anidb.net/a${queryString.parse(window.location.search).anidb_id}`} target="_blank">
                        <div className={"text"}>
                            <h1 className={"text-title"}>ANIDB</h1>
                        </div>
                        <img src={AnidbImage} />
                    </a> : ''}

                <a className={"tile animeshon"} href={`https://docs.animeshon.com/docs/ecosystem/roadmap`} target="_blank">
                    <div className={"text"}>
                        <h1 className={"text-title"}>ANIMESHON</h1>
                    </div>
                    <div className={"comingsoon-wrapper"}>
                        <p id="comingsoon">COMING SOON</p>
                    </div>
                </a>

                {queryString.parse(window.location.search).thetvdb_id ?
                    <a className={"tile"} href={`https://www.thetvdb.com/?id=${queryString.parse(window.location.search).thetvdb_id}&tab=series`} target="_blank">
                        <div className={"text"}>
                            <h1 className={"text-title"}>THETVDB</h1>
                        </div>
                        <img src={TvdbImage} />
                    </a> : ''}
            </div>
        </div>
    );
};

export default Switch;

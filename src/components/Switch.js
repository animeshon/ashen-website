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
            <div class="choose-text">
                <h1>WHICH ANIME SOURCE?</h1>
            </div>
            <div class="confidence"><p>Confidence: <span className={`confidence-${confidence}`}>{confidence}</span> | Query time: { `${responseTime}s` }</p></div>
            <div class="wrap">
                <a class="tile" href={`https://anidb.net/a${queryString.parse(window.location.search).anidb_id}`} target="_blank">
                    <div class="text">
                        <h1 class="text-title">ANIDB</h1>
                    </div>
                    <img src={AnidbImage} />
                </a>


                <div class="tile animeshon">
                    <div class="text">
                        <h1 class="text-title">ANIMESHON</h1>
                    </div>
                    <div class="comingsoon-wrapper">
                        <p id="comingsoon">COMING SOON</p>
                    </div>
                </div>

                <a class="tile" href={`https://www.thetvdb.com/?id=${queryString.parse(window.location.search).thetvdb_id}&tab=series`} target="_blank">
                    <div class="text">
                        <h1 class="text-title">THETVDB</h1>
                    </div>
                    <img src={TvdbImage} />
                </a>
            </div>
        </div>
    );
};

export default Switch;

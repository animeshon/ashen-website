import React from 'react';

import './Switch.scss';

import AnidbImage from '../assets/anidb.png';
import TvdbImage from '../assets/tvdb.png';

const Switch = () => {
    return (
        <div
            id="mc-signup"
            className={'from-header'}
        >
            <div class="choose-text">
                <h1>WHICH ANIME SOURCE?</h1>
            </div>
            <div class="wrap">
                <div class="tile">
                    <div class="text">
                        <h1 class="text-title">ANIDB</h1>
                    </div>
                    <img src={AnidbImage} />
                </div>


                <div class="tile animeshon">
                    <div class="text">
                        <h1 class="text-title">ANIMESHON</h1>
                    </div>
                    <div class="comingsoon-wrapper">
                        <p id="comingsoon">COMING SOON</p>
                    </div>
                </div>

                <a class="tile" href="https://thetvdb.com" target="_blank">
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

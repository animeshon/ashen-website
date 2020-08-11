import React from 'react';

import './Switch.scss';

const Switch = ({
    handleSubmit,
}) => {
    return (
        <div
            id="mc-signup"
            className={'from-header'}
        >
            <form
                onSubmit={e => handleSubmit(e)}
            >
                <div class="search-wrapper">
                    <div class="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Switch;

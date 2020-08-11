import React from 'react';

import './UploadForm.scss';

const UploadForm = ({
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
                <div id="mc-signup-scroll">
                    <div className="mc-field-group">
                        <input aria-label="file" type="file" id="upload" />
                        <label for="upload">Search Image</label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UploadForm;

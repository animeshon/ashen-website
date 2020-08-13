import React from 'react';

import './UploadForm.scss';

const UploadForm = ({
    handleSubmit,
    isLoading,
}) => {
    return (
        <div
            id="mc-signup"
            className={'from-header'}
        >
            <form
                onSubmit={e => handleSubmit(e)}
            >
                <div className={"search-wrapper"}>
                    {isLoading ? <div className={"lds-ripple"}>
                        <div></div>
                        <div></div>
                    </div> : ''}
                </div>
                <div id="mc-signup-scroll">
                    <div className={"mc-field-group"}>
                        <input aria-label="file" type="file" id="upload" accept=".png,.jpg,.jpeg" onChange={handleSubmit} disabled={isLoading}/>
                        <label htmlFor={"upload"}>Search Image</label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UploadForm;

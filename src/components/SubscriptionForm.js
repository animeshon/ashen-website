import React from 'react';

import './SubscriptionForm.scss';

const SubscriptionForm = ({
    source,
    value,
    typeFunction,
    handleSubmit,
    labels,
    error,
}) => {
    return (
        <div
            id="mc-signup"
            className={
                source === 'header' ? 'from-header' : 'from-subscription-box'
            }
        >
            <form
                onSubmit={e => handleSubmit(e)}
                id={source === 'header' ? 'valueHeader' : 'valueTrial'}
            >
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

export default SubscriptionForm;

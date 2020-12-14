import React from 'react';
import archivedata from '../../connect/getdata';

const Archive = () => {
    if(!archivedata.done)
        return (
            <div className="big-loading">
                <img src="/images/loading_black.svg" className="big-loading" />
            </div>
        );
    
    return (
        <p>Data</p>
    );
};

export default Archive;
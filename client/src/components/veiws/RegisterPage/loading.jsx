import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const loading = () => {
    const now = 60;
    return <ProgressBar now={now} label={`${now}%`} />;
}

export default loading;

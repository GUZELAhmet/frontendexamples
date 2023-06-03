import React from 'react';
import './dijital-saat-uygulamasi2.scss';
import moment from 'moment';

const DijitalSaatUygulamasi2 = (props) => {
    const timeStr = moment().format("HH:mm");
    const dateStr = moment().format("LL");
    const dayStr = moment().format("dddd");
    const hour = moment().hour();

    let message = '';

    if (hour >= 6 && hour < 11) {
        message = "MORNING"
    } else if (hour >= 11 && hour < 14) {
        message = "NOON"
    } else if (hour >= 14 && hour < 17) {
        message = "AFTERNOON"
    } else if (hour >= 17 && hour < 22) {
        message = "EVENING"
    } else {
        message = "NIGHT"
    };

    const saatStili = {
        color: props.textColor,
        backgroundColor: props.bgColor,
    };

    return (
        <div style={saatStili} className='dijital-saat-uygulamasi2'>
            <div className='time'>{timeStr}</div>
            <div>
                <div className='date'>{dateStr}</div>
                <div className='day'>{dayStr} {message}</div>
            </div>
        </div>
    );
};

export default DijitalSaatUygulamasi2;
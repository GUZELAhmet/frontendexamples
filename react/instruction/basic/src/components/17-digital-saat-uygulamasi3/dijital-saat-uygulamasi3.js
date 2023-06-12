import React, { useEffect, useState } from 'react';
import './dijital-saat-uygulamasi3.scss';
import moment from 'moment';

const DijitalSaatUygulamasi3 = (props) => {
    const [dateTime, setDateTime] = useState(moment());

    //const timeStr = dateTime.format("HH:mm");
    const dateStr = dateTime.format("LL");
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("HH");
    const minute = dateTime.format("mm");
    const second = dateTime.format("ss");
    //console.log(hour, minute, second);

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

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(moment());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div style={saatStili} className='dijital-saat-uygulamasi3'>
            <div className='time'>
                {hour}
                <span style={{ opacity: second % 2 === 0 ? 1 : 0 }}>:</span>
                {minute}
            </div>
            <div>
            <div className='date'>{dateStr}</div>
                <div className='day'>{dayStr} {message}</div>
            </div>
        </div>
    );
};

export default DijitalSaatUygulamasi3;
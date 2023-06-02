import React from 'react';
import './dijital-saat-uygulamasi1.scss';
import moment from 'moment';

const DijitalSaatUygulamasi1 = () => {
    const dateTime=moment();
    const timeStr=dateTime.format("HH:mm");
    const dateStr=dateTime.format("LL");
    const dayStr=moment().format("dddd")
    const hour=moment().hour();
    
    return (
        <div className='dijital-saat-uygulamasi1'>
            <div className='time'>{timeStr}</div>
            <div>
                <div className='date'>{dateStr}</div>
                <div className='day'>{dayStr} AFTERNOON</div>
            </div>
        </div>
    )
}
export default DijitalSaatUygulamasi1
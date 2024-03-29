import React from 'react';
import s from '../Dialogs.module.css';



const Message = (props) => {
    return (
        <div>
            <div className={s.dialog + ' ' + s.sms}>{props.message}</div>
        </div>
       
    )
}



export default Message;
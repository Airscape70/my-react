import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators';


const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessage'} type={'text'} cols={50} rows={10} placeholder={'Введите сообщение...'} component={Textarea} validate={[required, maxLengthCreator(20)]} />
            <div><button>Отправить</button></div>
        </form>
    )
}

const MessageReduxForm = reduxForm({ form: 'message' })(MessageForm)

const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);
    let messagesElements = props.messagesPage.messagesData.map(m => <Message message={m.message} />);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <hr className={s.lineVert}></hr>
            <div className={s.messages}>
                {messagesElements}
                <MessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>


    )
}

export default Dialogs;
import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DiaologItems/DialogsItem";
import Messages from "./Messages/Messages";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogsItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Messages message={m.message} /> );
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={'Введите сообщение'}> </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
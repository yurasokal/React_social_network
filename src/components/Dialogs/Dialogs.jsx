import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/Number' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Olga Geirangerfjord'},
        {id: 2, name: 'Nazar Trolltunga'},
        {id: 3, name: 'Sergiy Kjerag'},
        {id: 4, name: 'Yuriy Preikestolen'},
        {id: 5, name: 'Roman Trollstigen'},
        {id: 6, name: 'Ihor Lofoten'}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your learning, buddy ?'},
        {id: 3, message: 'Not bat ! It\'s really interesting !'},
        {id: 4, message: 'Yo, dude !'},
        {id: 5, message: 'Yo, yo, yo!'},
        {id: 6, message: 'Yo'}
    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id} />*/}
                {/*<DialogItem name={dialogs[1].name} id={dialogs[1].id} />*/}
                {/*<DialogItem name={dialogs[2].name} id={dialogs[2].id}/>*/}
                {/*<DialogItem name={dialogs[3].name} id={dialogs[3].id}/>*/}
                {/*<DialogItem name={dialogs[4].name} id={dialogs[4].id}/>*/}
                {/*<DialogItem name={dialogs[5].name} id={dialogs[5].id}/>*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Message message={messages[0].message}/>*/}
                {/*<Message message={messages[1].message}/>*/}
                {/*<Message message={messages[2].message}/>*/}
                {/*<Message message={messages[3].message}/>*/}
                {/*<Message message={messages[4].message}/>*/}
                {/*<Message message={messages[5].message}/>*/}
            </div>
        </div>
    )
}

export default Dialogs;
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

    let dialogsData = [
    {id: 1, name: 'Olga Geirangerfjord'},
    {id: 2, name: 'Nazar Trolltunga'},
    {id: 3, name: 'Sergiy Kjerag'},
    {id: 4, name: 'Yuriy Preikestolen'},
    {id: 5, name: 'Roman Trollstigen'},
    {id: 6, name: 'Ihor Lofoten'}
]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your learning, buddy ?'},
        {id: 3, message: 'Not bat ! It\'s really interesting !'},
        {id: 4, message: 'Yo, dude !'},
        {id: 5, message: 'Yo, yo, yo!'},
        {id: 6, message: 'Yo'}
    ]


return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
        </div>
        <div className={s.messages}>
            <Message message={messagesData[0].message}/>
            <Message message={messagesData[1].message}/>
            <Message message={messagesData[2].message}/>
            <Message message={messagesData[3].message}/>
            <Message message={messagesData[4].message}/>
            <Message message={messagesData[5].message}/>
        </div>
    </div>
)
}

export default Dialogs;
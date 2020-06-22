import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogsOPA/1'>Geirangerfjord</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Number2'>Trolltunga</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Number3'>Kjerag</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Number4'>Preikestolen</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Number5'>Trollstigen</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Number6'>Lofoten</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi !</div>
                <div className={s.message}>How is your learning, buddy ?</div>
                <div className={s.message}>Not bat ! It's really interesting !</div>
            </div>
        </div>
    )
}

export default Dialogs;
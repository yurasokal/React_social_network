import React from 'react';
import s from './Trolltunga.module.css';
import {NavLink} from "react-router-dom";


const Trolltunga = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/Number1'>Nazar Geirangerfjord</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Number2'>Olga Trolltunga</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Number3'>Sergiy Kjerag</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Number4'>Yuriy Preikestolen</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Number5'>Roman Trollstigen</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Number6'>Ihor Lofoten</NavLink>
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

export default Trolltunga;
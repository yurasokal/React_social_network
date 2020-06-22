import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Geirangerfjord
                </div>
                <div className={s.dialog}>
                    Trolltunga
                </div>
                <div className={s.dialog}>
                    Kjerag
                </div>
                <div className={s.dialog}>
                    Preikestolen
                </div>
                <div className={s.dialog}>
                    Trollstigen
                </div>
                <div className={s.dialog}>
                    Lofoten
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
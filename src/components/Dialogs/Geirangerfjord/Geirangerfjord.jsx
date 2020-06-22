import React from 'react';
import s from './Geirangerfjord.module.css';
import {NavLink} from "react-router-dom";


const Geirangerfjord = (props) => {
    return (
        <div className={s.}>
            <div className={s.}>
                <div className={s.messages}>
                    <div className={s.message}>Hi !</div>
                    <div className={s.message}>How is your learning, buddy ?</div>
                    <div className={s.message}>Not bat ! It's really interesting !</div>
                </div>
            </div>
        </div>
    )
}

export default Geirangerfjord;
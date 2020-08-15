import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 0} }>
    <img src={preloader}/>
    </div>
}

export default Preloader;
import React from 'react';
import Backdrop from './Backdrop/Backdrop';
import classes from './Modal.module.css';

const modal = (props) => {
    let show = props.gameOver() || props.solved ? true : false;

    const attachedClasses = [ classes.Message ];
    if (!show) {
        attachedClasses.push(classes.Hide);
    }

    return (
        <div>
            <Backdrop show={show} />
            <div className={attachedClasses.join(' ')} >
                {props.gameOver()?<p>GAME OVER</p>:null}
                {props.solved?<p>YOU WIN!</p>:null}
            </div>
        </div>
    );
};

export default modal;
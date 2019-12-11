import React from 'react';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';
import six from '../images/six.png';
import seven from '../images/seven.png';
import eight from '../images/eight.png';
import nine from '../images/nine.png';
import ten from '../images/ten.png';
import eleven from '../images/eleven.png';
import twelve from '../images/twelve.png';
import classes from './Hangman.module.css';

const hangman = (props) => {
    // const picture = new Array(props.lives).map(
    //     (_,i) => ( <span>{i}</span> )
    // );

    // const picture = [ ...Array(props.lives) ].map(
    //     (_,i) => ( <span key={i}>{++i}</span> )
    // );

    let hangmanImage = null;

    switch (props.lives)
    {
        case 11:
            hangmanImage=one;
            break;
        case 10:
            hangmanImage=two;
            break;
        case 9:
            hangmanImage=three;
            break;
        case 8:
            hangmanImage=four;
            break;
        case 7:
            hangmanImage=five;
            break;
        case 6:
            hangmanImage=six;
            break;
        case 5:
            hangmanImage = seven;
            break;
        case 4:
            hangmanImage = eight;
            break;
        case 3:
            hangmanImage = nine;
            break;
        case 2:
            hangmanImage = ten;
            break;
        case 1:
            hangmanImage = eleven;
            break;
        case 0:
            hangmanImage = twelve;
            break;  
        default:
            hangmanImage = null;
    }

    const attachedClasses = [classes.Hangman];
    if (props.lives===12)
    {
        attachedClasses.push(classes.Hide);
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <img src={hangmanImage} alt="" />
        </div>
    );
}

export default hangman;
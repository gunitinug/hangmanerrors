import React, {useState, useEffect} from 'react';
import classes from './AvailableLetter.module.css';
import Ax from '../../hoc/Ax';

const AvailableLetter = (props) => {
    // const [show,setShow]=useState(true);
    // const [clicked, setClicked]=useState(false);
    // const [outcome,setOutcome]=useState(false);
    const [clicked,setClicked]=useState(false);

    // if (show)
    // {
    //     setClicked(true);
    // }

    // const play = (alphabet) => {
    //     const solution = props.solution.split('');
    //     if (solution.indexOf(alphabet)<0)
    //     {
    //         return false;
    //     }
    //     else
    //     {
    //         return true;
    //     }
    // }

    const setStuff = () => {
        // setShow(true);
        setClicked(false);
        props.setSolved();
    };
    useEffect( setStuff,[clicked] );

    // useEffect( ()=>setShow(true),[show] );
    // useEffect( ()=>props.setSolved(),[show] );

    if (clicked)         // STRANGELY THIS PART WORKS!!!
    {
        if (props.play())
        {
            props.correct();
            // alert('correct');
        }
        else
        {
            props.incorrect();
            // alert('wrong');
        }
    }

    const attachedClasses = [classes.AvailableLetter];
    const disableLetter = () => {
        attachedClasses.push(classes.Disabled);
        setClicked(true);
    };

    // const letter = <span onClick={disableLetter} className={attachedClasses.join(' ')} >{props.alphabet}</span>;

    let letter=null;
    if (!clicked)
    {
        letter = <span onClick={disableLetter} className={attachedClasses.join(' ')} >{props.alphabet}</span>;
    }
    else if(clicked)    // CODE NEVER GETS HERE!!!!!!!!!!!!!!
    {
        letter = <span className={attachedClasses.join(' ')} >{props.alphabet}</span>;
    }

    return (
        <Ax>
            {letter}
        </Ax>
    );
}

export default AvailableLetter;
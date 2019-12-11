import React from 'react';
import classes from './Score.module.css';

// const solution = 'samsung electronics and semi-conductor'.split('');
// const matched = ['s','e','a','r'];
// matched.push(' ');
// matched.push('-');

// const unmatched = solution.filter(
// 	(item,index) => (!matched.includes(item))
// );

// const output = solution.map(
// 	(item,index) => (unmatched.includes(item) ? '_' : item)
// )

// alert(output.join(''));

const score = (props) => {
    const solution = [...props.solution];
    const matched = [...props.matched];
    // non-alphabetic letters
    matched.push(' ');
    matched.push('-');

    const unmatched = solution.filter(
        (item, index) => (!matched.includes(item))
    );

    const output = solution.map(
        (item, index) => (unmatched.includes(item) ? '_' : item)
    )

    return (
        <div className={[classes.Score,classes.Letters].join(' ')}>
            <p>{output.join('\xa0\xa0\xa0')}</p>
        </div>
    )
}

export default score;
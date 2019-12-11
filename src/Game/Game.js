import React, {Component} from 'react';
import Hangman from '../Hangman/Hangman';
import Letters from '../Letters/Letters';
import Score from '../Modal/Score/Score';
import Modal from '../Modal/Modal';
import classes from './Game.module.css';

class Game extends Component
{
    state = {
        lives: 12,
        solution: 'my name is logan',
        correctUsedLetters: [],
        availableLetters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        usedLetters: [],
        solved: false
    };

    setSolvedHandler = () => {
        const solution = this.state.solution.replace(/\s/g, '').replace(/-/g, '').split('');
        const compare = [ ...this.state.correctUsedLetters].sort();
        const unique = solution.filter(
            (elem,index,self) => (index===self.indexOf(elem))
        ).sort();

        const solved = JSON.stringify(unique) === JSON.stringify(compare);
    
        this.setState({
            solved: solved
        });
        
        // JSON.stringify(unique) === JSON.stringify(compare)
    };

    gameOverHandler = () => this.state.lives<1;

    guessedCorrectHandler = (letter) => {
        const index = this.state.availableLetters.indexOf(letter);
        let newAvailableLetters = [...this.state.availableLetters];
        newAvailableLetters.splice(index,1);

        let newCorrectUsedLetters = [...this.state.correctUsedLetters];
        newCorrectUsedLetters.push(letter);

        this.setState({
            availableLetters: newAvailableLetters,
            correctUsedLetters: newCorrectUsedLetters
        })
    };

    guessedIncorrectHandler = (letter) => {
        const index = this.state.availableLetters.indexOf(letter);
        let newAvailableLetters = [...this.state.availableLetters];
        newAvailableLetters.splice(index,1);

        let newUsedLetters = [...this.state.usedLetters];
        newUsedLetters.push(letter);

        const oldValueLives = this.state.lives;
        const newValueLives = oldValueLives - 1;

        // console.log('[newValueLives] ',newValueLives); return true;

        this.setState({
            usedLetters: newUsedLetters,
            availableLetters: newAvailableLetters,
            lives: newValueLives < 0 ? 0 : newValueLives
        });
    };

    render ()
    {
        return (
            <div className={classes.Game}>
                <h1>Hangman</h1>

                {/* <p>hangman, game, available letters, used letters, modal</p>
                <p>Available letters: {this.state.availableLetters.join(', ')}</p>
                <p>Correct letters: {this.state.correctUsedLetters}</p>
                <p>Incorrect letters: {this.state.usedLetters   }</p>
                <p>Lives: {this.state.lives}</p> */}    

                <Score solution={this.state.solution} matched={this.state.correctUsedLetters} />
                <br></br><br></br><br></br>
                <div className={classes.LettersAndHangman}>
                    <Hangman lives={this.state.lives} />
                    <Letters setSolved={this.setSolvedHandler} solution={this.state.solution} correct={this.guessedCorrectHandler} incorrect={this.guessedIncorrectHandler} 
                    feed={this.state.availableLetters}
                    />
                </div>
                <Modal solved={this.state.solved} gameOver={this.gameOverHandler} />
            </div>
        );
    }
}

export default Game;
/* eslint-disable no-undef */

import React, { Component } from 'react';
import apple1 from "./images/apple100.png";
import apple2 from "./images/apple120.png";
import apple3 from "./images/apple140.png";
import apple4 from "./images/apple160.png";

let gameStat;

class Sorting extends Component {
	static defaultProps = {
		maxWrong: 6,
		images: [apple1,apple2,apple3,apple4]
	};

    constructor(props) {
        super(props);
        this.state = {
            mistake: 0
        };

        window.addEventListener('keydown', this.keyPress);
    }

	handleGuess(value) {
		const letter = value;
		this.setState(st => ({
			guessed: st.guessed.add(letter),
			mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
		}));
	}

	generateButtons() {
		return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
			<button
				key={letter}
				value={letter}
				onClick={(e) => this.handleGuess(e.target.value)}
				disabled={this.state.guessed.has(letter)}
			>
				{letter}
			</button>
		));
	}

    render() {
        const gameOver = this.state.mistake >= this.props.maxWrong;
        const altText = `${this.state.mistake}/${this.props.maxWrong} wrong guesses`;

        gameStat = this.generateButtons;

        return (
            <div className='Sorting'>
                <nav className='navbar navbar-expand-lg'>
                    <a className='navbar-brand text-light' href='/'>
						The Sorting Game
				    </a>
                    <span className='d-xl-none d-lg-none text-primary'>
                        Guessed wrong: {this.state.mistake}
                    </span>

                    <button
						className='navbar-toggler sr-only'
						type='button'
						data-toggle='collapse'
						data-target='#navbarText'
						aria-controls='navbarText'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarText'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item '></li>
							<li className='nav-item'></li>
							<li className='nav-item'></li>
						</ul>
						<span className='navbar-text text-primary'>Guessed wrong: {this.state.mistake}</span>
					</div>
                </nav>
                <p className='text-center'>
					<img src={this.props.images[this.state.mistake]} alt={altText} />
				</p>
				<p className='text-center text-light'>Guess the Programming Language ?</p>

				<p className='text-center text-warning mt-4'>{gameStat}</p>

				<div>
					<p className='text-center'>
						<button className='Sorting-reset' onClick={this.resetButton}>
							Reset
						</button>
					</p>
				</div>
            </div>
        )
    }
}

export default Sorting;

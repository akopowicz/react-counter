import React, { Component } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Clock from './Clock';

import Step from './Step'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 5
        }
    }

    changeValue = (action) => {
        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += this.state.stepValue;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue
            });
        });
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return({
                showClock: !prevState.showClock
            });
        })
    }

    changeStep = (stepsCount) => {
        this.setState({
            stepValue: parseInt(stepsCount)
        })
    }

    render() {

        let clockElement = '';

        if (this.state.showClock) {
            clockElement = <Clock toggleClockMethod={this.toggleClock} />
        } else {
            clockElement = <span className='show-clock' onClick={this.toggleClock}>show clock</span>
        }

        return(
            <div className='counter'>
                Counter:
                <Display displayValue={this.state.counterValue}/>
                <ButtonsPanel buttonMethod={this.changeValue} addNumber={this.state.stepValue}/>
                <Step stepMethod={this.changeStep} stepValue={this.state.stepValue}/>
                {clockElement}
            </div>
        )
    }
}

export default Counter
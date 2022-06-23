import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Section, Header, Body } from "./Sorting.styled";
import ArrayBar from './ArrayBar'
import { BubbleSort, SelectionSort} from "./SortingAlgorithm";
import SelectBox from "./SelectBox";


const theme = {
    color: { 
        black: '#3c3c3c',
        red: '#f85c5d',
        purple: '#c36ae7',
        green:'#74ad5e',
        white: '#f8feff',
        yellow: '#ffe94a',
        sky: '#61c2f1',
        grass: '#94d36a',
        skin: '#fbcfb1',
        blush: '#fd9f9b',
    },

    param:{
       speed : 50,
       numBar : 50 
    }
}
class Sorting extends Component{

    state = {
        array: [],
        steps: [],
        colorKeys: [],
        colorSteps: [],
        timeouts: [],
        currentStep: 0,
        count: 24,
        delay: 30,
        algorithms: [BubbleSort, SelectionSort],
        working: false,
        algIndex: 0
    }

	componentDidMount() {
		this.generateElements();
	}

    clearStep = (callback) => {
        this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
        let colorKeys = new Array(this.state.count).fill(0);

        this.setState({
            colorKeys: colorKeys,
            timeouts: [],
            currentStep: 0,
            working: false,
        }, callback)
    }

	handleStart = () => {
        if(this.state.working === false){
            this.SortArray(() => this.sorting()); 
        }
	};

    sorting = () => {
        let i=0;
        let timeouts = [];

        while(i<this.state.steps.length){   
            let timeout = setTimeout(() => {
                let currentStep = this.state.currentStep;
                let working = (currentStep < this.state.steps.length-1)? true : false;

                this.setState({
                    array: this.state.steps[currentStep],
                    colorKeys: this.state.colorSteps[currentStep],
                    currentStep: currentStep+1,
                    working: working
                }) 
            }, i*this.state.delay);
            timeouts.push(timeout);
            i++;
        }

        this.setState({timeouts: timeouts});
    }
    


	generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

    generateElements = () => {
        this.clearStep(() => {
            let count = this.state.count;
            let arr = [];
    
            for (let i = 0; i < count; i++) {
                arr.push(this.generateRandomNumber(50, 400));
            }
    
            this.setState(
                {
                    array: arr,
                    steps: [arr]
                },
            );
        });
    };

    SetAlgIndex = (Index) => {
        this.setState({algIndex: Index});
    }

    SortArray = (callback) => {
        this.clearStep(() => {
            let array = this.state.array.slice();
            let colorKeys = this.state.colorKeys.slice();
            let steps = [];
            let colorSteps = [];

            //BubbleSort(array, colorKeys , steps, colorSteps);
            //SelectionSort(array, colorKeys , steps, colorSteps);
            this.state.algorithms[this.state.algIndex](array, colorKeys , steps, colorSteps);

            this.setState({
                steps: steps,
                colorSteps: colorSteps    
            }, callback)
        })
    }

    HandleSpeedSlider = (e) => {
        let value = e.target.value;
        let delay = 200/value - 20;
        theme.param.speed = (value-1)*25;
        this.clearStep(() => {
            this.setState({
                delay: delay
            })
        })
    }

    HandleNumBarSlider = (e) => {
        let value = e.target.value;
        let count = value*8;
        theme.param.numBar = (value-1)*25;
        this.setState({
            count : count
        }, () => this.generateElements())
    }

    Printout = () => {
        for(let i=0; i<100; i++){
            this.generateElements();
            let array = this.state.array.slice();
            let arraySort = this.state.array.sort((a,b) => (a-b));

            let colorKeys = this.state.colorKeys.slice();
            let steps = [array];
            let colorSteps = [colorKeys];

            SelectionSort(array, colorKeys , steps, colorSteps);
            
            for(let i=0; i<array.length; i++){
                if(array[i] !== arraySort[i])
                    console.log(false);
                    break
            }
            console.log(true);
        }
    }

    render() {
        const Bars = this.state.array.map((item, index) => {
            return(
            <ArrayBar key={index} index={index} length={item} colorKey={this.state.colorKeys[index]}></ArrayBar>
            );
        });
        return(
            <ThemeProvider theme={theme}>
                <Body>
                    <Header className='functionBar'>
                        <div className="title">
                        <h1>sorting algorithms visualizer</h1>
                        </div>
                        <div className="butBar">
                            <div className="left">
                                <div className="sliderContainer">
                                    <label>Speed</label>
                                    <input type="range" className="speed" max='5' min='1' defaultValue="3" step='1' onChange={this.HandleSpeedSlider}/>
                                    <div className="valueTag">
                                        <span>Slow</span>
                                        <span>Fast</span>
                                    </div>
                                </div>

                                <div className="sliderContainer">
                                    <label>Num of bar</label>
                                    <input type="range" className="numBar" max='5' min='1' defaultValue="3" step='1' onChange={this.HandleNumBarSlider}/>
                                    <div className="valueTag">
                                        <span>Few</span>
                                        <span>Many</span>
                                    </div>
                                </div>
                            </div>
                            <div className="middle"><SelectBox Index={this.state.algIndex} setIndex={this.SetAlgIndex}/></div>
                            <div className="right">
                                <button className="reset" onClick={this.generateElements}>Reset</button>
                                <button className="sort" onClick={this.handleStart}>Sort</button>
                            </div>      
                        </div>
                    </Header>
                    <Section>
                        {Bars}
                    </Section>
                </Body>
            </ThemeProvider>
        )
    }
}

export default Sorting;


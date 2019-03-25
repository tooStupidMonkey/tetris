import React from 'react'
import _ from 'lodash'
import styles from '../assets/scss/style.scss'

const Block = ({index, active, number, figure, incative}) => (
<div 
    className={
        `block ${figure ? 'figure-block' : ''} 
        block-${index} 
        ${active ? 'filled' : '' }
        ${incative ? 'inactive' : ''}
        `
    }>{number}</div>
    )
const Line = ({index, line}) =><div className={`line line-${index}`}>{line}</div>
const _fieldWidth = 11;
const _fieldHeight = 21;
const _incatives = [0,10,20,30,40,50,60,70,80,90,210, 310, 410, 510, 610, 710,810,910, 110, 200];
const _bottomInactive = [ 201,202,203,204,205,206,207,208,209,2010];
const _allowedFigures = [
    [
        [4,5,6],
        [5,15, 25]
    ],
    [
        [14,15, 16, 25],
        [5, 14,15, 16],
        [5, 25,15, 16],
        [5,15,25,14]
    ],
    [
        [4,5,6,14, 16,25, 24, 26, 15]
    ]
];

class Index extends React.Component {

state = {
            activeFigureIndex: 0,
            bottomStructure: [],
            active: [4,5,6,14, 16,25, 24, 26, 15],
            currentFigure: 0
        }
    

    componentDidMount() {
       // setInterval(this._moveLeft, 1000)
    }


    _moveLeft = () => {
        const {active, incatives} = this.state
        const newActive = active.map((item)=>item - 1)  
        if (_.intersection(newActive, incatives).length > 0) {
            return false;
        }
        this.setState({active: newActive})
    }


    _moveDown = () => {
        const {active, bottomStructure} = this.state
        const newActive = active.map((item)=>item + 10)    
        if (_.intersection(newActive, _bottomInactive).length > 0) {
            bottomStructure.push(active)
            return false;
        }
        this.setState({active: newActive})
    }

    _moveRight = () => {
        const {active} = this.state
        const newActive = active.map((item)=>item + 1)    
        if (_.intersection(newActive, _incatives).length > 0) {
            return false;
        }
        this.setState({active: newActive})
    }

    _rotateFigure = ()=> {
        const {currentFigure, activeFigureIndex} = this.state
        const maxIndex = _allowedFigures[currentFigure].length - 1
        const newIndex = activeFigureIndex + 1 <= maxIndex ? activeFigureIndex + 1 : 0
        this.setState({activeFigureIndex: newIndex})
    }

    _changeFigure = ()=>{
        const {allowedFigures} = this.state
        this.setState({currentFigure: Math.floor(Math.random() * allowedFigures.length), activeFigureIndex: 0})
    }

    render() {
        const { 
            currentFigure,
            activeFigureIndex,
            bottomStructure,
        } = this.state
        let field = []
        for (let i = 0; i < _fieldHeight; i++) {
            let line = []
            for(let j = 0; j < _fieldWidth; j++) {
                const number = Number(String(i) + j);
                const incative = _incatives.includes(number)
                line.push(<Block 
                    key={j} 
                    incative={incative}
                    index={j} 
                    figure={_allowedFigures[currentFigure][activeFigureIndex].includes(number)} 
                    active={_allowedFigures[currentFigure][activeFigureIndex].includes(number) || _.flatten(bottomStructure).includes(number)} 
                    number={number} ></Block>)
            }
            field.push(<Line key={i} line={line} index={i}></Line>)
        }
        
        return (
            <div>
                <div>
                    <button onClick={(e)=>this._moveDown()}>Down</button>
                    <button onClick={(e)=>this._moveLeft()}>Left</button>
                    <button onClick={(e)=>this._moveRight()}>Right</button>
                    <button onClick={(e)=>this._rotateFigure()}>Rotate</button>
                    <button onClick={(e)=>this._changeFigure()}>Change</button>
                </div>
                <div className={'field'}>
                    {field}
                </div>
            </div>
        );
    }
}
  
export default Index;

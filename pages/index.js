import React from 'react'
import _ from 'lodash'
import styles from '../assets/scss/style.scss'

const _fieldWidth = 11;
const _fieldHeight = 21;
const _incatives = [
    0, 10, 20, 30, 40,
    50, 60, 70, 80, 90,
    100, 110, 120, 130,
    140, 150, 160, 170,
    180, 190, 200, 210,
    310, 410, 510, 610,
    710, 810, 910, 110, 200,
    1010, 1110, 1210, 1310, 1410,
    1510, 1610,1710, 1810, 1910, 2010

];
const _incativeBottom = [200,201,202,203,204,205,206,207,208,209,2010];

const _allowedFigures =  [
    [
        [4, 5, 6],
        [5, 15, 25]
    ],
    [
        [14, 15, 16, 25],
        [5, 14, 15, 16],
        [5, 25, 15, 16],
        [5, 15, 25, 14]
    ],
    [
        [4, 5, 6, 14, 16, 25, 24, 26, 15]
    ]
]
const Block = ({ index, active, incative }) => (
    <div
        className={
            `block 
            block-${index} 
            ${active ? 'filled' : ''}
            ${incative ? 'inactive' : ''}
        `
        }></div>
)

const Line = ({ index, line }) => <div className={`line line-${index}`}>{line}</div>

const _removeFirstAndlastElement = (array) => {
    array.shift()
    array.pop()
    return array
}
class Index extends React.Component {

    state = {
        activeFigureIndex: 0,
        canPlay: true,
        score: 0,
        bottomStructure: [],
        active: [4, 5, 6],
        autoMove:null,
        currentFigure: 0,
        filledLineMarker: [],
        allowedFigures : []
    }

    componentDidMount() {
        let filledLineMarker = []
        for (let i = 0; i < _fieldHeight; i++) {
            let line = new Array()
            for (let j = 0; j < _fieldWidth; j++) {
                line.push(Number(String(i) + j))
            }
            filledLineMarker.push(_removeFirstAndlastElement(line))
        }
        this.setState({ filledLineMarker })
        this._initGame()
    }

    _initGame = () => {
        this._changeFigure()
        this.setState({ autoMove: setInterval(() => this._moveDown(), 1000) })
        
    }

    _destractGame = () => {
        const { autoMove } = this.state
        clearInterval(autoMove)
    }

    componentDidUpdate(props, state) {
        //this._checkLine()
    }

    _moveLeft = () => {
        const { allowedFigures,  activeFigureIndex} = this.state
        let newAllowedFigures = [ ...allowedFigures ]
        newAllowedFigures = newAllowedFigures.map((item)=> item.map((figure) => figure - 1))
        if (_.intersection(newAllowedFigures[activeFigureIndex], _incatives).length > 0) {
            return false;
        }
        this.setState({ allowedFigures: newAllowedFigures, active: newAllowedFigures[activeFigureIndex]})
    }

    _moveRight = () => {
        const { activeFigureIndex, allowedFigures } = this.state
        let newAllowedFigures = allowedFigures
        newAllowedFigures = newAllowedFigures.map((item)=> item.map((figure) => figure + 1))
        if (_.intersection(newAllowedFigures[activeFigureIndex], _incatives).length > 0) {
            return false;
        }
        this.setState({ allowedFigures: newAllowedFigures, active: newAllowedFigures[activeFigureIndex] })
    }

    _moveDown = () => {
        const { activeFigureIndex, allowedFigures, bottomStructure} = this.state
        let newAllowedFigures = [...allowedFigures]
        newAllowedFigures = newAllowedFigures.map((item) => item.map((figure) => figure + 10))
        if (_.intersection( newAllowedFigures[activeFigureIndex], _incativeBottom).length > 0
            || _.intersection(newAllowedFigures[activeFigureIndex], bottomStructure).length > 0) {
            let newBottomStructure = [...bottomStructure]
            newBottomStructure.push(newAllowedFigures[activeFigureIndex].map((figure) => figure - 10))
            this.setState({ bottomStructure: _.uniq(newBottomStructure.flat()) })
            this._checkLine()
            this._changeFigure()
            this._checkProgress()
            return false;
        }
        this.setState({
            allowedFigures: newAllowedFigures,
            active: newAllowedFigures[activeFigureIndex]
        })
    }

    _rotateFigure = () => {
        const { activeFigureIndex, allowedFigures } = this.state
        const maxIndex = allowedFigures.length - 1
        const newIndex = activeFigureIndex + 1 <= maxIndex ? activeFigureIndex + 1 : 0
        this.setState({ activeFigureIndex: newIndex, active:  allowedFigures[newIndex]})
    }

    _changeFigure = () => {
        const currentFigure = Math.floor(Math.random() * _allowedFigures.length)
        let newAllowedFigures = _allowedFigures[currentFigure]
        this.setState({
            activeFigureIndex: 0,
            allowedFigures: newAllowedFigures,
            active: newAllowedFigures[0]
        })
    }

    _checkLine = () => {
        const { filledLineMarker, bottomStructure, score } = this.state
        if (!bottomStructure.length)
            return false;

        let newBottomStructure = [...bottomStructure]
        let lineCounter = 0;
        let lineForMoveDown = [];
        filledLineMarker.map((item) => {
            if (item.every((elem) => newBottomStructure.includes(elem))) {
                ++lineCounter;
                lineForMoveDown.push(Math.min.apply(null, item))
                let newBottomStructureFiltered = [...newBottomStructure.filter((el) => !item.includes(el))]
                this.setState({ bottomStructure: newBottomStructureFiltered })      
            }
        })
        if (lineCounter) {
            let lineForCheck = 0;
            let startForDown = Math.min.apply(null, lineForMoveDown)
            filledLineMarker.map((item, k) => {
                if (item.includes(startForDown)) {
                    lineForCheck = k
                }
            })
            let moveLinesDown = [...bottomStructure];
            let markerLine = filledLineMarker[lineForCheck]
            moveLinesDown = moveLinesDown.map((block) => {
                if (block > Math.min.apply(null, markerLine)) {
                    block + (lineCounter * 10)
                }
            })
            this.setState({ bottomStructure: moveLinesDown })    
        }
    }

    _checkProgress = () => {
        const { filledLineMarker, bottomStructure } = this.state
        const firstLine = filledLineMarker[0]
        if (_.intersection(bottomStructure, firstLine).length) {
            this.setState({ canPlay: false })
            this._destractGame()
            alert('GAME over bro')
        }
    }

    render() {
        const {
            bottomStructure,
            active,
            canPlay,
            score
        } = this.state
        let field = []
        for (let i = 0; i < _fieldHeight; i++) {
            let line = []
            for (let j = 0; j < _fieldWidth; j++) {
                const number = Number(String(i) + j);
                const incative = _incatives.includes(number) || _incativeBottom.includes(number)
                line.push(<Block
                    key={j}
                    incative={incative}
                    index={j}
                    active={active.includes(number) || bottomStructure.includes(number)}
                    number={number} ></Block>)
            }
            field.push(<Line key={i} line={line} index={i}></Line>)
        }

        return (
            <div>
                <div>
                    <button onClick={(e) => this._moveDown()}>Down</button>
                    <button onClick={(e) => this._moveLeft()}>Left</button>
                    <button onClick={(e) => this._moveRight()}>Right</button>
                    <button onClick={(e) => this._rotateFigure()}>Rotate</button>
                    <button onClick={(e) => this._changeFigure()}>Change</button>
                    <button onClick={(e) => this._checkLine()}>Check</button>
                    <button onClick={(e) => this._checkProgress()}>Check progress</button>
                </div>
                <div>Score: {score}</div> 
                <div className={styles.field}>
                    {field}
                </div>
            </div>
        );
    }
}

export default Index;

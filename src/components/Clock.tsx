import * as React from 'react'
import './Clock.css'

interface ClockProps {
    displayNumber: string;
}

class Clock extends React.Component<ClockProps, any> {

    static defaultProps: Partial<ClockProps> = {
        displayNumber: '666666'
    }

    static renderChar(toRender: string, color: string = 'red'): JSX.Element {
        const mapping = {
            '0': [[1, 1], [1, 1], [1, 1], [0, 0], [1, 1], [1, 1], [1, 1]],
            '1': [[0, 0], [0, 1], [0, 1], [0, 0], [0, 1], [0, 1], [0, 0]],
            '2': [[1, 1], [0, 1], [0, 1], [1, 1], [1, 0], [1, 0], [1, 1]],
            '3': [[1, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [1, 1]],
            '4': [[0, 0], [1, 1], [1, 1], [1, 1], [0, 1], [0, 1], [0, 0]],
            '5': [[1, 1], [1, 0], [1, 0], [1, 1], [0, 1], [0, 1], [1, 1]],
            '6': [[1, 1], [1, 0], [1, 0], [1, 1], [1, 1], [1, 1], [1, 1]],
            '7': [[1, 1], [0, 1], [0, 1], [0, 0], [0, 1], [0, 1], [0, 0]],
            '8': [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]],
            '9': [[1, 1], [1, 1], [1, 1], [1, 1], [0, 1], [0, 1], [1, 1]],
        }
        if (!mapping[toRender]) {
            throw new Error('Symbol not available')
        }
        return (
            <div className={'clockDigit ' + color}>
                <div className="row row-1">
                    <div className={'horizontal left ' + (mapping[toRender][0][0] ? 'active ' : '')}/>
                    <div className={'horizontal right ' + (mapping[toRender][0][1] ? 'active' : '')}/>
                </div>
                <div className="row row-2">
                    <div className={'vertical left ' + (mapping[toRender][1][0] ? 'active' : '')}/>
                    <div className={'vertical right ' + (mapping[toRender][1][1] ? 'active' : '')}/>
                </div>
                <div className="row row-3">
                    <div className={'vertical left ' + (mapping[toRender][2][0] ? 'active' : '')}/>
                    <div className={'vertical right ' + (mapping[toRender][2][1] ? 'active' : '')}/>
                </div>
                <div className="row row-4">
                    <div className={'horizontal left ' + (mapping[toRender][3][0] ? 'active' : '')}/>
                    <div className={'horizontal right ' + (mapping[toRender][3][1] ? 'active' : '')}/>
                </div>
                <div className="row row-5">
                    <div className={'vertical left ' + (mapping[toRender][4][0] ? 'active' : '')}/>
                    <div className={'vertical right ' + (mapping[toRender][4][1] ? 'active' : '')}/>
                </div>
                <div className="row row-6">
                    <div className={'vertical left ' + (mapping[toRender][5][0] ? 'active' : '')}/>
                    <div className={'vertical right ' + (mapping[toRender][5][1] ? 'active' : '')}/>
                </div>
                <div className="row row-7">
                    <div className={'horizontal left ' + (mapping[toRender][6][0] ? 'active' : '')}/>
                    <div className={'horizontal right ' + (mapping[toRender][6][1] ? 'active' : '')}/>
                </div>
            </div>
        )
    }

    constructor(props: ClockProps) {
        super(props)
        this.state = {displayNumber: this.props.displayNumber}
    }

    getColor(value: number): string {
        if (value > 6) {
            return 'red'
        }

        if (value > 3) {
            return 'yellow'
        }

        return 'green'
    }

    renderSeconds(): JSX.Element {
        return (
            <div className="seconds">
                {Clock.renderChar(
                    this.props.displayNumber[4],
                    this.getColor(parseInt(this.props.displayNumber[4], 10)))}
                {Clock.renderChar(
                    this.props.displayNumber[5],
                    this.getColor(parseInt(this.props.displayNumber[5], 10)))}
            </div>
        )
    }

    renderMinutes(): JSX.Element {
        return (
            <div className="minutes">
                {Clock.renderChar(
                    this.props.displayNumber[2],
                    this.getColor(parseInt(this.props.displayNumber[2], 10)))}
                {Clock.renderChar(
                    this.props.displayNumber[3],
                    this.getColor(parseInt(this.props.displayNumber[3], 10)))}
            </div>
        )
    }

    renderHours(): JSX.Element {
        return (
            <div className="minutes">
                {Clock.renderChar(
                    this.props.displayNumber[0],
                    this.getColor(parseInt(this.props.displayNumber[0], 10)))}
                {Clock.renderChar(
                    this.props.displayNumber[1],
                    this.getColor(parseInt(this.props.displayNumber[1], 10)))}
            </div>
        )
    }

    render() {
        return (
            <div className="clockContainer">
                {this.renderHours()}
                <div className="sep"/>
                {this.renderMinutes()}
                <div className="sep"/>
                {this.renderSeconds()}
            </div>
        )
    }
}

export default Clock

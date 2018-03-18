import * as React from 'react'
import './App.css'
import Clock from './components/Clock'
import Timer = NodeJS.Timer
import MapGenerator from './components/MapGenerator'

// const logo = require('./logo.svg')

class App extends React.Component<any, any> {
    interval: Timer
    refreshRate: number

    constructor(props: any) {
        super(props);
        this.state = {displayNumber: '014589'}
        this.tick = this.tick.bind(this)
        this.refreshRate = 250
    }

    tick(): void {
        const now = new Date()
        const seconds = now.getSeconds()
        const minutes = now.getMinutes()
        const hours = now.getHours()
        let display: string = (hours.toString().length > 1) ? hours.toString() : '0' + hours.toString()
        display += (minutes.toString().length > 1) ? minutes.toString() : '0' + minutes.toString()
        display += (seconds.toString().length > 1) ? seconds.toString() : '0' + seconds.toString()
        this.setState({displayNumber: display})
    }

    componentDidMount(): void {
        this.interval = setInterval(this.tick, this.refreshRate)
    }

    componentWillUnmount(): void {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">React Clock</h1>
                </header>
                <Clock displayNumber={this.state.displayNumber}/>
                <MapGenerator/>
            </div>
        )
    }
}

export default App

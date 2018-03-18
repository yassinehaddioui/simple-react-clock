import * as React from 'react'
import './App.css'
import Clock from './components/Clock'
import MapGenerator from './components/MapGenerator'
// import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'
import CssBaseline from 'material-ui/CssBaseline'
import Timer = NodeJS.Timer

// const logo = require('./logo.svg')
interface AppProps {
}

interface AppState {
    displayNumber: string,
    showGenerator: boolean
}

class App extends React.Component<AppProps, AppState> {
    interval: Timer
    refreshRate: number

    constructor(props: AppProps) {
        super(props)
        this.state = {displayNumber: '014589', showGenerator: false}
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
                <CssBaseline/>
                <header className="App-header">
                    <h1 className="App-title">React Clock</h1>
                </header>
                <div style={{'marginBottom': '15px'}}>
                    <Clock displayNumber={this.state.displayNumber}/>
                </div>
                <Button
                    color="primary"
                    variant="raised"
                    onClick={() => {
                        this.setState({showGenerator: !this.state.showGenerator})
                    }}
                >
                    Generator
                </Button>
                {this.state.showGenerator && <div style={{padding : '15px'}}><MapGenerator/></div>}
            </div>
        )
    }
}

export default App

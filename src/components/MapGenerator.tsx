import * as React from 'react'
import './Clock.css'

interface MapGeneratorProps {
}

interface MapGeneratorState {
    mapping: Array<Array<number>>,
    charColor: string
}

class MapGenerator extends React.Component<MapGeneratorProps, MapGeneratorState> {

    constructor(props: MapGeneratorProps) {
        super(props)
        this.state = {mapping: [[1, 1], [1, 1], [1, 1], [0, 0], [1, 1], [1, 1], [1, 1]], charColor: 'green'}
    }

    changeMapping(x: number, y: number) {
        this.state.mapping[x][y] = this.state.mapping[x][y] ? 0 : 1
    }

    render() {
        return (
            <div className="map-generator">
                <blockquote>
                    {JSON.stringify(this.state.mapping)}
                </blockquote>
                <div className="clockContainer">
                    <div className={'clockDigit ' + this.state.charColor}>
                        {
                            this.state.mapping.map((primaryItem, primaryIndex) => (
                                    <div key={primaryIndex} className="row">
                                        {primaryItem.map((item, index) => (
                                            <div
                                                className={((primaryIndex === 0
                                                    || primaryIndex === 3 || primaryIndex === 6) ?
                                                    'horizontal ' : 'vertical ')
                                                + ((index === 0) ? 'left ' : 'right ')
                                                + (this.state.mapping[primaryIndex][index] ? 'active ' : '')}
                                                onClick={() => {
                                                    this.changeMapping(primaryIndex, index)
                                                }}
                                            />
                                        ))}
                                    </div>
                                )
                            )}
                    </div>
                </div>

            </div>
        )
    }
}

export default MapGenerator

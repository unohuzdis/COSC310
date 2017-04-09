import React from 'react';
import {BarChart} from 'react-d3-basic'
import d3 from 'd3';
import moment from 'moment';
import Paper from 'material-ui';
import '../Styles/responsive.css'

import {
    tsvParse
} from 'd3-dsv';

const pikachu = {
    hp: 35,
    atk: 55,
    def: 40,
    spatk: 50,
    spdef: 50,
    spd:90
}


export default class Chart extends React.Component {

    constructor(props) {
        super(props);

    }
    calculateStat(base, iv) {
        return base + iv + 5
    }

    render() {
        let letterData =
            `letter	frequency
            HP	${(this.calculateStat(pikachu.hp, this.props.stats.hp) + 50 + 5)} 
            ATK	${(this.calculateStat(pikachu.atk, this.props.stats.atk))}
            DEF	${(this.calculateStat(pikachu.def, this.props.stats.def))}
            SPATK	${(this.calculateStat(pikachu.spatk, this.props.stats.spatk))}
            SPDEF	${(this.calculateStat(pikachu.spdef, this.props.stats.spdef))}
            SPD	${(this.calculateStat(pikachu.atk, this.props.stats.spd ))}`;
        let generalChartData = tsvParse(letterData);
        let width = 500,
            height = 350,
            title = 'Bar Chart',
            chartSeries = [
                {
                    field: 'frequency',
                    name: 'Stats'
                }
            ],
            x = function (d) {
                return d.letter;
            },
            xScale = "ordinal",
            xLabel = 'Stat',
            yLabel = 'Value',
            yTicks = [20, ''],
            margins = {bottom: 20};
        return (
                <div style={this.props.style}>
                    <BarChart className='half'
                        colorByLabel={false}
                        trandform={'90deg'}
                        showLegend={false}
                        title= {title}
                        data= {generalChartData}
                        width= {width}
                        height= {height}
                        chartSeries = {chartSeries}
                        yDomain={[0, 200]}
                        x= {x}
                        xLabel= {xLabel}
                        xScale= {xScale}
                        yTicks= {yTicks}
                        yLabel = {yLabel}
                    />
                </div>
        )
    }
}
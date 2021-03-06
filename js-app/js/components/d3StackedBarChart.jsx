import React from 'react';
import ReactDOM from 'react-dom';
import createChart from '../d3/stackedBarChart';

const StackedBarChart = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    barHeight: React.PropTypes.number,
    data: React.PropTypes.array.isRequired,
    indexToAxisLabel: React.PropTypes.func,
    dataToBarLabel: React.PropTypes.func,
    margin: React.PropTypes.object,
    barClicked: React.PropTypes.func,
    selectedBar: React.PropTypes.number,
    maxBars: React.PropTypes.number
  },
  getDefaultProps: function() {
    return {
      width: 300,
      barHeight: 20,
      indexToLabel: function (x) { return x; },
      dataToBarLabel: function (x) { return x; },
      margin: {top: 20, right: 50, bottom: 20, left: 50},
      maxBars: 10
    };
  },
  render: function() {
    return <svg className="chart"></svg>;
  },
  componentDidMount: function() {
    var dom = ReactDOM.findDOMNode(this);
    createChart(dom, this.props.data.slice(0, this.props.maxBars), this.props);
  },
  shouldComponentUpdate: function(props) {
    var dom = ReactDOM.findDOMNode(this);
    createChart(dom, props.data.slice(0, props.maxBars), props);
    return false;
  }
});

export default StackedBarChart;

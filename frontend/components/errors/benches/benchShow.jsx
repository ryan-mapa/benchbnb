import React from 'react';
import BenchDetail from './benchDetail';

class BenchShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBench(this.props.match.params.benchId);
  }

  render() {
    const {bench} = this.props;
    if (bench === undefined) return null;
    
    console.log(bench);

    return (
      <div className="bench-show-container">
        <div className="bench-show-left">
          <div className="bench-pic">Bench pic</div>
          <h1 className="bench-title">{bench.name}</h1>
          <p>{bench.description}</p>
          <h1>REVEIEWS AND STUFF</h1>
        </div>

        <BenchDetail bench={bench} />
      </div>
    );
  }
}

export default BenchShow;
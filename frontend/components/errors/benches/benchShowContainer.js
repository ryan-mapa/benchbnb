import {connect} from 'react-redux';
import { fetchBench } from '../../../actions/benchActions';
import BenchShow from './benchShow';


const mapStateToProps = (state, ownProps) => ({
  bench: state.entities.benches[ownProps.match.params.benchId]
})

const mapDispatchToProps = dispatch => ({
  fetchBench: (benchId) => dispatch(fetchBench(benchId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow);
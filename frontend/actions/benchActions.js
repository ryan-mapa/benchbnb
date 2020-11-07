import * as benchApiUtil from '../util/benchAPiUtil';

export const RECEIVE_BENCH = "RECEIVE_BENCH";

const receiveBench = (payload) => ({
  type: RECEIVE_BENCH,
  payload
})

const receiveBenchErrors = (errors) => ({
  type: RECEIVE_BENCH,
  errors
})

export const fetchBench = benchId => dispatch => (
  benchApiUtil.fetchBench(benchId).then(
    payload => dispatch(receiveBench(payload)),
    errors => dispatch(receiveBenchErrors(errors.responseJSON))
  )
)

import { connect } from 'react-redux';
import { singup } from '../../actions/sessionActions';
import SessionForm from "./sessionForm";

const mapStateToProps = (state) => ({
  formType: 'signup'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(singup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
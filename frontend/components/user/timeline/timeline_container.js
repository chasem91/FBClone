import { connect } from 'react-redux';
import Timeline from './timeline';
import { receiveCurrentSection } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.user
});


const mapDispatchToProps = dispatch => ({
  receiveCurrentSection: section => dispatch(receiveCurrentSection(section))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

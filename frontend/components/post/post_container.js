import { connect } from 'react-redux';
import Post from './post';
import { getComments, receivePost } from '../../actions/post_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    user: state.user.user,
    post: state.post
  };
};

const mapDispatchToProps = dispatch => ({
  receivePost: post => dispatch(receivePost(post)),
  getComments: post_id => dispatch(getComments(post_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

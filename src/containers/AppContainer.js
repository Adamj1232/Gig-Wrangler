import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = (state) => {
  return state;
};

// const mapDispatchToProps = (dispatch) => {
//   return dispatch;
// };

export default connect(mapStateToProps, null)(App);

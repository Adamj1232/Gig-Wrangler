import { connect } from 'react-redux';
import MapDisplay from '../components/MapDisplay';

const mapStateToProps = (state) => {
  return { venues: state.venueReducer }
};

export default connect(mapStateToProps, null)(MapDisplay);

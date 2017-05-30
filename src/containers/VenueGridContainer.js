import { connect } from 'react-redux';
import VenueGrid from '../components/VenueGrid';

const mapStateToProps = (state) => {
  return { venues: state.venueReducer }
};

export default connect(mapStateToProps, null)(VenueGrid);

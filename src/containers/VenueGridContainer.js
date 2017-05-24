import { connect } from 'react-redux';
import VenueGrid from '../components/VenueGrid';

const mapStateToProps = (state) => {
  return { venues: state.venueReducer }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};


export default connect(mapStateToProps, null)(VenueGrid);

import { connect } from 'react-redux';
import { fetchBenchesTAC } from "../../actions/bench_actions"
import { updateBounds, updateFilter  } from "../../actions/filter_actions"
import Search from "../search/search";

const mapStateToProps = (state) => ({
  benches: Object.keys(state.entities.benches).map(key => state.entities.benches[key])
});


const mapDispatchToProps = (dispatch) => ({
    fetchBenches: () => dispatch(fetchBenchesTAC()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

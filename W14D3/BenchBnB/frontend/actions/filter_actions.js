import { fetchBenchesTAC } from "./bench_actions"
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const updateBounds = (bounds) => ({
    type: UPDATE_BOUNDS,
    bounds
});

export function updateFilter(filter) {
    return (dispatch, getState) => {
        dispatch(updateBounds(filter));
        // debugger
        return fetchBenchesTAC(getState().ui.filter)(dispatch);
        // delicious curry!
    };
}
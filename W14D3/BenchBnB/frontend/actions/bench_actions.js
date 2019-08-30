import { fetchBenches, createBench } from "../util/bench_api_util"

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_SINGLE_BENCH = "RECEIVE_SINGLE_BENCH"

const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches,
})

export const receiveSingleBench = payload => ({
    type: RECEIVE_SINGLE_BENCH,
    payload,
});


export const fetchBenchesTAC = (filters) => dispatch => fetchBenches(filters)
    .then(benches => dispatch(receiveBenches(benches)));

export const createBenchTAC = bench => dispatch => (
    createBench(bench).then(bench => {
        dispatch(receiveSingleBench(bench));
        return bench;
    })
);
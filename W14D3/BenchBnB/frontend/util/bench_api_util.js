export const fetchBenches = (filters) => {
    return $.ajax({
        method: "GET" ,
        url: "/api/benches",
        data: {bounds: filters},
        error: (err) => console.log(err)
    })
}

export const createBench = (bench) => {
    return $.ajax({
        method: 'POST',
        url: 'api/benches/',
        data: { bench }
    });
};

window.fetchBenches = fetchBenches;
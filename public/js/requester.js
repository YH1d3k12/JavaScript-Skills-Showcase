const requester = (method, endpoint, data, callback) => {
    console.log(data)
    const result = axios.post(
        'http://localhost:3000/'+endpoint,
        data
    ).then(response => {
        const result = response.data.result;
        callback(response)
    }).catch(err => {
        console.log(err, err.response);
    });
}
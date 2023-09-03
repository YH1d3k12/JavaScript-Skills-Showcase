/**
 * @param {*} method The method which axios will execute 'get', 'post', etc...
 * @param {*} endpoint The URL which the API will call upon
 * @param {*} data The body of the request
 * @param {*} callback Handles the response from the HTTP request
 */

const axios = require('axios');

const requester = async (method, endpoint, data, callback) => {
    // Console log the input data
    console.log(data)

    try
    {
        // The result will be the return from axios
        const response = await axios[method](
            'http://localhost:3000/' + endpoint,
            data
        );

        const result = response.data.result;
        callback(result)
    }
    catch (err)
    {
        console.log (err, err.response);
    };
};

module.exports = { requester };
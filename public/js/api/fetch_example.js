// Older browsers doesn't support fetch

const fetchSendHttpRequest = (method, url, data) => {
    // Fetch is a globaly available method offered by the browser in JavaScript, it works with Promises
    // When working with promises we can chain multiple then methods to do multiple steps
    return fetch(url, {
        method: method, // this defines the method type, by default its "GET"
        body: JSON.stringify(data), // this sends the data as JSON
        headers: data ? { 'Content-Type': 'application/json' } : {} // If data is true Content-Type will be application/json otherwise its an empty object
    }).then(response => {

        if (response.status >= 400) { // if the response is 400 or greater throw this error handler istead

        // the problem with fetch is that the response body isn't available without a promise
        // We can get a promise by returning the response and treat it as an error
            return response.json().then(errResData => {
                // Creates an error object
                const error = new Error('Something went wrong!');
                // Defines the response as the error data
                error.data = errResData;
                throw error;
            });
        };
        // Converts the response into JSON then it reads as JavaScript
        return response.json();
    });
};

//get stuff
// const getData = () => {
//     sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
//         console.log(responseData);
//     });
// };

// post stuff
const sendData2 = () => {
    const firstValue = document.getElementById('salary').value;
    const secondValue = document.getElementById('hoursWorked').value;

    fetchSendHttpRequest('POST', 'http://localhost:3000/2/', {
        salary: firstValue,
        hoursWorked: "secondValue"
    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err, err.data);
    });
}

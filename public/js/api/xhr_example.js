const xhrSendHttpRequest = (method, url, data) => {
    console.log("click")

    // Promises are used to deal with asynchronous requests.
    // They also providea more readable code structure.
    const promise = new Promise((resolve, reject,) => {
        // XHR is an object.
        // XMLHttpRequest is a global constructor built in most browsers.
        const xhr = new XMLHttpRequest();

        // The 'open' is not like in a database, it prepares the request
        // by taking two arguments, the http method and URL.
        xhr.open(method, url);

        // This will parse the response to JavaScript before the onload.
        // By doing this we don't get the raw JSON.
        xhr.responseType = 'json';

        // If we have data to send it adds an extra header to the request
        // telling that the given code should be read as a json.
        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        // This code will be triggered when a response is given.
        // Could be done like this: xhr.addEventListener('load')
        // but doesn't have much browser support.
        xhr.onload = () => {

            // If the status of the response is equal or greater than 400
            // It will treat as a reject
            if (xhr.status >= 400)
            {
                reject(xhr.response);
            }
            else
            {
                // JSON.parse converts the given JSON response into JS.
                // const data = JSON.parse(xhr.response);

                // This mark the promise as resolved and pass the data along.
                resolve(xhr.response);
            }
        };

        // This code will be triggered when an error is given by the api.
        xhr.onerror = () => {
            reject('Something went wrong!');
        }

        // this sends the data as JSON
        xhr.send(JSON.stringify(data));
    });
    return promise;
};

// Get stuff
// const getData = () => {
//     sendHttpRequest('GET', 'http://localhost:3000/1/').then(responseData => {
//         console.log(responseData);
//     });
// };

// Post stuff
const sendData1 = () => {
    const firstValue = document.getElementById('num1').value;
    const secondValue = document.getElementById('num2').value;

    xhrSendHttpRequest('POST', 'http://localhost:3000/1/', {
        num1: firstValue,
        num2: secondValue
    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
}

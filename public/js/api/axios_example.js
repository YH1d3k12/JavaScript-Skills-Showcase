import axios from 'axios';
// Axios returns a promise which you can work with
// the data is already parsed and converted into JavaScript

// There is no need in creating an all in method, because axios already is the all in method
// It already throws errors if the response status is 400 or greater

// You can personalize the header content by throwing a third argument

// get stuff
// const getData = () => {
//     axios.get('http://localhost:3000/4/').then(response => {
//         console.log(response);
//     });
// };
  
// post stuff example
// const sendDataExample = () => {
//     axios.post(
//         'http://localhost:3000/4/',
//         {
//             email: 'eve.holt@reqres.in'
//             // password: 'pistol'
//         },
//         {
//             // headers: 
//             // {
//             //   'Content-Type': 'application/json'
//             // }
//         }
//     ).then(response => {
//         console.log(response);
//     }).catch(err => {
//         console.log(err, err.response);
//     });
// };

const sendData4 = () => {
    const firstValue = document.getElementById('celsius').value;

    axios.post(
        'http://localhost:3000/4/',
        firstValue
    ).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err, err.response);
    });
}
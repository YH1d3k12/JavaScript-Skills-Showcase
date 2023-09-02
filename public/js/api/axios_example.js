function PostExercise4 () {
    // console.log("CLICK")
    const value1 = document.getElementById('celsius').value;

    axios.post(
        'http://localhost:3000/4/',
        {celsius: value1}
    ).then(response => {
        const result = response.data.result;
        document.getElementById('resultValue').textContent = result;
        console.log(response);
        console.log("FUNFOU RESPONSE")
    }).catch(err => {
        console.log(err, err.response);
        console.log("FUNFOU ERRO")
    });
}
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
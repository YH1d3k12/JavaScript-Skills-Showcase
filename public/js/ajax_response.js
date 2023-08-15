// This code prevents the default behavior of the <a> tag to avoid page reload.
const a_links = document.querySelectorAll('.a_link');

a_links.forEach(link => 
{
    link.addEventListener('click', (event) => 
    {
        event.preventDefault();
    });
});

const exercise_buttons = document.querySelectorAll('.exercise_button');
const challenge_buttons = document.querySelectorAll('.challenge_button');
const content_section = document.getElementById('content_section');

// Each exercise button gets an Event Listener that when clicked it will trigger loadExerciseContent method

// Method for exercise buttons
exercise_buttons.forEach(button => 
{
    button.addEventListener('click', () => 
    {
        const file_name = button.getAttribute('file_name');
        loadExerciseContent(file_name);
    });
});

// Method for challenge buttons
challenge_buttons.forEach(button => 
{
    button.addEventListener('click', () => 
    {
        const file_name = button.getAttribute('file_name');
        loadExerciseContent(file_name);
    });
});
    
// File name is send as a variable to the method
function loadExerciseContent(file_name) 
{
    // Creates an instance of the XMLHttpRequest object, which is used to send HTTP requests.
    const xhr = new XMLHttpRequest();
    
    // Prepares an HTTP GET request to fetch the content of the HTML file. 
    // The path is constructed using a string and the exercise file name. 
    // The third argument "true" specifies that the request should be asynchronous.
    try 
    {
        xhr.open('GET', `/views/${file_name}.html`, true);

        // This is an event handler that listens for changes in the state of the request. 
        // When the state becomes 4 (request is complete) and the status is 200 (success)
        // The handler updates the content of content_section.
        xhr.onreadystatechange = function () 
        {
            if (xhr.readyState === 4 && xhr.status === 200) 
            {
                content_section.innerHTML = xhr.responseText;
            }
        };
        // This sends the HTTP request to fetch the content.
        xhr.send();
    } 
    catch (error) 
    {
        console.log('Failed to retrieve path:', error);
    }


}

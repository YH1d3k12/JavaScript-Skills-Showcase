const list_button = document.querySelectorAll('.list-button');


// Each button gets an Event Listener that when clicked it will trigger loadExerciseContent method
list_button.forEach(button => 
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
                // Creates a new instance of DOMParser
                const parser = new DOMParser();
                    
                // DOMParser analises the characters as XML or HTML
                const responseDoc = parser.parseFromString(xhr.responseText, 'text/html');

                // Reads the content within content-wrapper
                const responseContent = responseDoc.querySelector('.content-wrapper');
                                        
                // If there is a child within contentSection the following code will delete it
                // After that, the new content will be loaded
                if (contentSection.firstChild) {
                    contentSection.removeChild(contentSection.firstChild);
                }
                contentSection.appendChild(responseContent);                
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

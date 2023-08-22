const body = document.getElementById('body');
const menu = document.getElementById('header-wrapper');
const menu_list_title = document.getElementById('menu-list-title')
const toggle_list_button = document.getElementById('toggle-list-button');
const list_buttons = document.querySelectorAll('.list-button');;

const exercises_list = document.getElementById('exercisesList');
const challenges_list = document.getElementById('challengesList');
const extra_list = document.getElementById('extraList');
const query_params = document.getElementById('qpList');

let current_list = 2;

// Insert initial colors for the elements when first loaded
// Add an event listener to run the code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // change background color for body and menu
    body.style.backgroundColor = 'var(--page-exercise-background-color)';
    menu.style.backgroundColor = 'var(--menu-exercise-background-color)';
    // change menu list color and text
    menu_list_title.style.color = 'var(--menu-exercise-title-color)';
    // change toggle button colors and text
    toggle_list_button.style.borderColor = 'var(--button-exercise-border-color)';
    toggle_list_button.style.backgroundColor = 'var(--button-exercise-background-color)';
    toggle_list_button.style.color = 'var(--button-exercise-color)';
    // change list buttons color and background color
    list_buttons.forEach(button => {
        button.style.borderColor = 'var(--button-exercise-border-color)';
        button.style.backgroundColor = 'var(--button-exercise-background-color)';
        button.style.color = 'var(--button-exercise-color)';
    });
});

// When the button is clicked it will execute the following code:
toggle_list_button.addEventListener('click', () => {

    // this will change the current list display
    if (current_list === 1)
    {
        // change background color for body and menu
        body.style.backgroundColor = 'var(--page-exercise-background-color)';
        menu.style.backgroundColor = 'var(--menu-exercise-background-color)';
        // change menu list color and text
        menu_list_title.style.color = 'var(--menu-exercise-title-color)';
        menu_list_title.textContent = 'Lista de Exercícios';
        // change toggle button colors and text
        toggle_list_button.style.borderColor = 'var(--button-exercise-border-color)';
        toggle_list_button.style.backgroundColor = 'var(--button-exercise-background-color)';
        toggle_list_button.style.color = 'var(--button-exercise-color)';
        // change list buttons color and background color
        list_buttons.forEach(button => {
            button.style.borderColor = 'var(--button-exercise-border-color';
            button.style.backgroundColor = 'var(--button-exercise-background-color)';
            button.style.color = 'var(--button-exercise-color)';
        });
        // show exercise list
        exercises_list.style.display = 'flex';
        // hides the remaining lists
        challenges_list.style.display = 'none';
        extra_list.style.display = 'none';
        query_params.style.display = 'none';
        // sets the value of current list
        current_list = 2;
    } 
    else if (current_list === 2)
    {
        // change background color for body and menu
        body.style.backgroundColor = 'var(--page-challenge-background-color)';
        menu.style.backgroundColor = 'var(--menu-challenge-background-color)';
        // change menu list color and text
        menu_list_title.style.color = 'var(--menu-challenge-title-color)';
        menu_list_title.textContent = 'Lista de Desafios';
        // change toggle button colors and text
        toggle_list_button.style.borderColor = 'var(--button-challenge-border-color)';
        toggle_list_button.style.backgroundColor = 'var(--button-challenge-background-color)';
        toggle_list_button.style.color = 'var(--button-challenge-color)';
        // change list buttons color and background color
        list_buttons.forEach(button => {
            button.style.borderColor = 'var(--button-challenge-border-color)';
            button.style.backgroundColor = 'var(--button-challenge-background-color)';
            button.style.color = 'var(--button-challenge-color)';
        });
        // show challenge list
        challenges_list.style.display = 'flex';
        // hides the remaining lists
        exercises_list.style.display = 'none';
        extra_list.style.display = 'none';
        query_params.style.display = 'none';
        // sets the value of current list
        current_list = 3;
    }
    else if (current_list === 3)
    {
        // change background color for body and menu
        body.style.backgroundColor = 'var(--page-extra-background-color)';
        menu.style.backgroundColor = 'var(--menu-extra-background-color)';
        // change menu list color and text
        menu_list_title.style.color = 'var(--menu-extra-title-color)';
        menu_list_title.textContent = 'Lista Extra';
        // change toggle button colors and text
        toggle_list_button.style.borderColor = 'var(--button-extra-border-color)';
        toggle_list_button.style.backgroundColor = 'var(--button-extra-background-color)';
        toggle_list_button.style.color = 'var(--button-extra-color)';
        // change list buttons color and background color
        list_buttons.forEach(button => {
            button.style.borderColor = 'var(--button-extra-border-color)';
            button.style.backgroundColor = 'var(--button-extra-background-color)';
            button.style.color = 'var(--button-extra-color)';
        });
        // show challenge list
        extra_list.style.display = 'flex';
        // hides the remaining lists
        exercises_list.style.display = 'none';
        challenges_list.style.display = 'none';
        query_params.style.display = 'none';
        // sets the value of current list
        current_list = 4;
    }
    else 
    {
        // change background color for body and menu
        body.style.backgroundColor = 'var(--page-qp-background-color)';
        menu.style.backgroundColor = 'var(--menu-qp-background-color)';
        // change menu list color and text
        menu_list_title.style.color = 'var(--menu-qp-title-color)';
        menu_list_title.textContent = 'Query Params';
        // change toggle button colors and text
        toggle_list_button.style.borderColor = 'var(--button-qp-border-color)';
        toggle_list_button.style.backgroundColor = 'var(--button-qp-background-color)';
        toggle_list_button.style.color = 'var(--button-qp-color)';
        // change toggle button colors and text
        list_buttons.forEach(button => {
            button.style.borderColor = 'var(--button-qp-border-color)';
            button.style.backgroundColor = 'var(--button-qp-background-color)';
            button.style.color = 'var( --button-qp-color)';
        });
        // show challenge list
        query_params.style.display = 'flex';
        // hides the remaining lists
        exercises_list.style.display = 'none';
        challenges_list.style.display = 'none';
        extra_list.style.display = 'none';
        // sets the value of current list
        current_list = 1;
    }
    // testing if toggle button is working when clicked
    console.log("FUNFOU");
});

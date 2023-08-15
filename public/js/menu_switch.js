const body = document.getElementById('body');
const menu = document.getElementById('menu');
const menu_list_title = document.getElementById('menu_list_title')
const toggle_list_button = document.getElementById('toggle_list_button');
const exercises_list = document.getElementById('exercises_list');
const challenges_list = document.getElementById('challenges_list');

// When the button is clicked it will execute the following code:
toggle_list_button.addEventListener('click', () => {

    // this will change the current list display
    if (exercises_list.style.display === 'none') 
    {
        body.style.backgroundColor = 'var(--page-exercise-background-color)';
        menu.style.backgroundColor = 'var(--menu-exercise-background-color)';
        menu_list_title.style.color = 'var(--menu-exercise-title-color)';
        menu_list_title.textContent = 'Lista de Exercícios';
        toggle_list_button.style.borderColor = 'var(--button-exercise-border-color';
        toggle_list_button.style.backgroundColor = 'var(--button-exercise-background-color)';
        toggle_list_button.style.color = 'var(--button-exercise-color)';
        exercises_list.style.display = 'block';
        challenges_list.style.display = 'none';

    } 
    else 
    {
        body.style.backgroundColor = 'var(--page-challenge-background-color)';
        menu.style.backgroundColor = 'var(--menu-challenge-background-color)';
        menu_list_title.style.color = 'var(--menu-challenge-title-color)';
        menu_list_title.textContent = 'Lista de Desafios';
        toggle_list_button.style.borderColor = 'var(--button-challenge-border-color';
        toggle_list_button.style.backgroundColor = 'var(--button-challenge-background-color)';
        toggle_list_button.style.color = 'var(--button-challenge-color)';
        exercises_list.style.display = 'none';
        challenges_list.style.display = 'block';
    }

    console.log("FUNFOU");
});

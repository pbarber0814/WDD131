
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        logo.src = 'photos/byui-logo-white.png';
    } else {
        // code for changes to colors and logo
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        logo.src = 'photos/byui-logo-blue.webp';
    }
}           
                    
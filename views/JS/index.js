// Seleciona todos os elementos dropdown
const dropdowns = document.querySelectorAll('.dropdown');

// Adiciona um ouvinte de eventos de clique ao documento
document.addEventListener('click', (event) => {
    // Verifica se o clique foi fora do menu dropdown
    if (!event.target.closest('.dropdown')) {
        // Fecha todos os menus dropdown abertos
        dropdowns.forEach(dropdown => {
            const menu = dropdown.querySelector('.menu');
            menu.classList.remove('menu-open');
        });
    }
});

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

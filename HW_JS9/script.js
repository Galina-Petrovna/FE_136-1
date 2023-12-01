; (function () {
    const form = document.querySelector('form');
    const text = document.querySelector('input[type=text]');

    const todoContainer = document.querySelector('.todo_items');

    const createToDoItem = function (text) {
        let li = document.createElement('li');
        li.classList.add('todo_item');

        let check = document.createElement('input');
        check.setAttribute('type', 'checkbox');

        let textSpan = document.createElement('span');
        textSpan.innerText = text;

        const doneItem = (event) => {
            if (event.target === check) {
                li.classList.toggle('done');
            }
        }

        li.addEventListener('click', doneItem);

        li.append(check, textSpan);
        return li;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let item = createToDoItem(text.value);
        text.value = '';
        todoContainer.append(item);
    });

})();
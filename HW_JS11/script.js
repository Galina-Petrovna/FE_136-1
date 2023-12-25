class User {
    constructor(data) {
        this.data = data;
        
        // this.id = data.id;
        // this.name = data.name;
        // this.email = data.email;
        // this.adress = data.adress;
        // this.phone = data.phone;
    }

    edit (data) {
        Object.assign(this.data, data);
    }

    get info () {
        return this.data;
    }
    
}

let user = new User ({name: 'Contacts', email: 'email', adress: 'adress', phone: 'phone'});
console.log(user);

class Contacts extends User {
    constructor() {
        super();
        this.users = [];
        this.id = 0;
    }
    

    add(data) {
        if (data.name.length === 0 || data.email.length === 0) return;
        let user = new User(data);
        user.edit({id: this.id++});
        this.users.push(user);
    }

    edit(id, data) {
        let user = this.users.find(user => user.data.id === id);
        user.edit(data);
    }

    remove(id) {
        this.users = this.users.filter(user => user.data.id !== id);
    }

    
};

const users = new Contacts();

class ContactsApp extends Contacts {
    constructor(app) {
        super();
        this.contacts = document.querySelector(app);
        this.userContainer = document.createElement('div');
        this.init();
    }

    init() {
        let form = document.createElement('form');
        form.innerText = 'контакты';

        let name = document.createElement('input');
        name.setAttribute('type', 'text');
        name.placeholder = 'Contacts';

        let email = document.createElement('textarea');
        email.setAttribute('type', 'email');
        email.placeholder = 'Введите Ваш email';
        let adress = document.createElement('textarea');
        adress.setAttribute('type', 'text');
        adress.placeholder = 'Введите Ваш адрес ';
        let phone = document.createElement('textarea');
        phone.setAttribute('type', 'num');
        phone.placeholder = 'Введите Ваш телефон';

        let onAdd = document.createElement('button');
        onAdd.setAttribute('type', 'submit');
        onAdd.innerText = 'Add user';

        form.addEventListener('submit', event => {
            event.preventDefault();
            const data = {
                name: name.value,
                email: email.value,
                adress: adress.value,
                phone: phone.value,
            };

            this.add(data);
            name.value = '';
            email.value = '';
            adress.value = '';
            phone.value = '';
            this.render();
        });

        form.append(name, email, adress, phone, onAdd);
        this.contacts.append(form, this.userContainer);
    }

    render () {
        this.userContainer.innerHTML = '';
        this.users.forEach(user => {
            let flag = false;
            const item = document.createElement('div');
            item.classList.add('user__item');
            const name = document.createElement('h2');
            name.classList.add('user__name');
            name.innerText = user.data.name;
            const email = document.createElement('p');
            email.classList.add('user__email');
            email.innerText = user.data.email;

            const adress = document.createElement('p');
            adress.classList.add('user__adress');
            adress.innerText = user.data.adress;

            const phone = document.createElement('p');
            phone.classList.add('user__phone');
            phone.innerText = user.data.phone;


            const onEdit = document.createElement('button');
            onEdit.classList.add('user__edit');
            onEdit.innerText = 'Edit';

            const onRemove = document.createElement('button');
            onRemove.classList.add('user__remove');
            onRemove.innerText = 'Remove';

            onRemove.addEventListener('click', () => {
                this.remove(user.data.id);
                this.render();
            });

            onEdit.addEventListener('click', () => {
                if (flag) {
                    name.contentEditable = false;
                    email.contentEditable = false;
                    adress.contentEditable = false;
                    phone.contentEditable = false;
                    onEdit.innerText = "Edit";
                    flag = !flag;
                    let data = {
                        name: name.innerText,
                        email: email.innerHTML,
                        adress: adress.innerHTML,
                        phone: phone.innerHTML,
                    }
                    this.edit(user.data.id, data);

                } else {
                    name.contentEditable = true;
                    email.contentEditable= true;
                    adress.contentEditable = true;
                    phone.contentEditable = true;
                    onEdit.innerText = "Save";
                    flag = !flag;
                }

               
            });

            item.append(name, email, adress, phone, onEdit, onRemove);
            this.userContainer.append(item);
        });
    }
}

new ContactsApp('#contacts');
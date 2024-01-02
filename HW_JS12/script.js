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
        return `&{this.data.name} \n ${this.data.email} \n &{this.data.adress} \n ${this.data.phone}`
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

    get storage() {
        let data = localStorage.getItem("users");
        data = JSON.parse(data);
        return data;
    }

    set storage(data) {
        let string = JSON.stringify(data);
        localStorage.setItem("users", string);
    }

    get cookie() {
        let name = 'users'
        let matches = document.cookie.match(
            new RegExp(
                "(?:^|; )" +
                    name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                    "=([^;]*)"
            )
        );
        return matches ? true : false;
    }

    set cookie(time) {
        let options = {
            path: '/',
            secure: true,
            'max-age': time
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent('users') + "=" + encodeURIComponent('');

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }
    
    get() {
        this.users.forEach(user => console.log(user.get()));
    }
    
};

// const users = new Contacts();

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
            this.storage = this.users;
            this.cookie = 10 * 24 * 60 * 60;
            this.render();
            this.get();
        });

        form.append(name, email, adress, phone, onAdd);
        this.contacts.append(form, this.userContainer);

        if (!this.cookie) {
            localStorage.removeItem('users');
        }

        if (this.storage) {
            this.storage.forEach((user) => this.add(user.data));
        }
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
                    this.cookie = 10 * 24 * 60 * 60;
                    this.storage = this.users;

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
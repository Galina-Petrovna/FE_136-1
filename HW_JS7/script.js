///////калькулятор

let Calc = function(){
    this.get = function() {
        
        if (confirm('Включить калькулятор?')) {
            this.a = +prompt('Введите число a');
            this.b = +prompt('Введите число b');
            this.oper = prompt('Введите операцию: +, -, *, /')
        } else {
            this.a = false;
            this.b = false;
            this.oper = false;
        };
        this.operation();
    };
   
    this.operation = function() {
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;    
        }

        this.show();
    }

    this.show = function(){
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    };
};

let calc = new Calc();
//calc.get();


///////// лампочка

let Bulb = function() {
    this.get = function() {
        this.power = +prompt('Ведите мощность лампочки');
        this.costEnergy = 0.1333;
        if (confirm('Включить лампочку?')) {
            this.workTime = +prompt('Сколько времени горит лампочка?, ч');
        } else {
            this.workTime = 0;
        };
        this.operation();
    };

    this.operation = function() {
        this.result = (this.power / 1000) * this.costEnergy * this.workTime;

        this.show();
    };

    this.show = function() {
        if (this.workTime == 0 || this.workTime === undefined) {
            alert('Лампочка не включена');
        } else {
            alert('Лампочка проработала - ' + this.workTime + 'ч, стоимость потраченной электроэнергии = ' + this.result + 'руб.');
        }
    };
};

let bulb = new Bulb();
// bulb.get();


///////чайник

let Kettle = function(){
    this.get = function(){
        this.power = +prompt('Введите мощность чайника');
        this.temp1 = 20; // начальная температура воды
        this.temp2 = 100; // конечная температура воды
        this.quantity = +prompt('Введите количество воды, л');
        this.capacity = 4200; //удельная теплоемкость воды

        this.operation();
        
    }

    this.operation = function(){
        if(confirm('Чайник включен?')){
            this.result = Math.round((this.capacity * this.quantity * (this.temp2 - this.temp1)) / this.power / 60);
        } else {
            this.result = 0;            
        };
        this.show();
    };
    this.show = function(){
        if (this.result == 0 || this.result === undefined) {
            alert('Чайник не включен');
        } else {
            alert('Время закипания - ' + this.result + 'мин');
        }
    };

};

let kettle = new Kettle();
kettle.get();

////////// автомобиль

let Avto = function (name){
    this.get = function(){
        this.name = prompt('Введите марку автомобиля');
        this.number = prompt('Введите номер автомобиля');

        this.operation();
    }

    this.operation = function(){
        if(confirm('Машина заведена?')){
            if (confirm ('Передача включена?')) {
                this.speed = prompt('Введите скорость автомобиля, км/ч');
                this.time = prompt('Введите время движения, ч');
                this.distance = this.speed * this.time;
            } else {
                this.distance = 0;
            }
        }  else {
            this.result = 0;
        }
        this.show();   
    }   

    this.show = function(){
        if (this.distance == 0 || this.distance === undefined) {
            alert('Машина не двигается');
        } else {
            alert('Автомобиль ' +  this.name + ' ' + 'гос.номер ' +  this.number + ' ' + 'проехал ' + this.distance + 'км');
        }
    };
};

let avto = new Avto();
// avto.get();

/////// Задание контакты

function Contact (name, age, phone, email) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.email = email;

    this.getInfo = () => {
        return `Name: ${this.name}, Age: ${this.age}, Phone: ${this.phone}, Email: ${this.email}`;
    }

    this.toString = () => {
        return `
        Name: ${this.name},
        Age: ${this.age},
        Phone: ${this.phone},
        Email: ${this.email},
        Id: ${this.id}.
        `
    }
}

function Contacts () {
    this.contacts = [];
    let id = 0;

    /**
     * 
     * @param {string} name 
     * @param {number} age 
     * @param {string} phone 
     * @param {string} email 
     * 
     */

    this.add = (name, age, phone, email) => {
        if (age < 0 || age > 120) return;
        if (name.length === 0) return;
        if (phone.length === 0) return;
        if (email.length ===0) return;

        let contact = new Contact(name, age, phone, email);
        contact.id = id;
        id++;
        this.contacts.push(contact);
    }

    this.getContacts = () => {
        return this.contacts;
    }

    this.getContact = (id) => {
        let contact = this.contacts.find((item) => item.id === id);
        return contact.getInfo();
    }

    this.removeContact = (id) => {
        this.contacts = this.contacts.filter((item) => item.id !== id);
    }
}


const contactNone = new Contacts();
contactNone.add('Alex', 22, '4525668', 'galinabelrom@mail.ru');
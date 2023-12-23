///// Автомобиль

document.write('Задание машина' + '<br>');

let Mach = function(name, speed, power) {
    this.name = name;
    this.speed = speed;
    this.power = power;


    this.showName = function() {
        document.write(this.name);
    };
};

let Avto = function(name) {
    Mach.apply(this, arguments);
this.name = name;
};

let mach = new Mach(),
    avto = new Avto('Opel', true, true);

console.log(mach);
console.log(avto);

avto.showName();

document.write('<br>');



/////чайник 

document.write('Задание чайник' + '<br>');

let Tech = function(power) {
    let status = false;

    power = power || 0;

    this.enable = function() {
        status = true;
    };

    this.disable = function() {
        status = false;
    };

    this.getStatus = function() {
        return status;
    };

    this.getPower = function() {
        return power;
    };
};

let Teapot = function(power, size) {
    Tech.apply(this, arguments);

    size = size || 1000;

    let waterAmount = 0,
        status = false,
        sT = null,
        self = this;

        let parentGetStatus = this.getStatus,
        parentDisable = this.disable;

    this.setWater = function(amount) {
        if (amount > 0 && amount <= size) waterAmount = amount;
        else waterAmount = 0;
    };

    this.getWater = function() {
        return waterAmount;
    };

    this.on = function() {
        if (parentGetStatus() == true && waterAmount > 0) {
            status = true;

            boiling();
        } 
    };

    this.off = function() {
        status = false;

        clearTimeout(sT);
    };


    let boiling = function() {
       sT = setTimeout(function() {
            alert ("The water's boiled");

            self.off();
        }, 10000);
    };

    

    this.getStatus = function() {

        parentGetStatus.call(this);

        if (status == true && parentGetStatus() == true) return true;
        return false;
    };

    this.disable = function() {
        parentDisable.call(this);
        parentDisable();

        if (parentGetStatus() == false) this.off();
    };

    this.showInfo = function() {
        return 'Мощность ' + power + ', объём ' + size + '. Залито воды ' + waterAmount + '. ' + (this.getStatus() ? 'Работает' : 'Не работает'); 
    }
};

let teapot = new Teapot(3500, 3000);

console.log(teapot);

console.log(teapot.showInfo());

teapot.setWater(1000);
console.log(teapot.showInfo());

teapot.enable();
teapot.on();
document.write(teapot.showInfo());


document.write('<br>');

document.write('Дополнительное задание' + '<br>');


let Sport = function(name, sportsmen, trainer) {
    this.name = name;
    this.sportsmen = sportsmen;
    this.trainer = trainer;
};

let Equestrian = function(name) {
    Sport.apply(this, arguments);

    this.name = name;

    this.create = (tagName) => {
        return document.createElement(tagName)
    };

    
    this.attr = (element, name, [value]) => {
        element.setAttribute(name, [value])
    };

    this.search = (element, selector) => {
        element = document.querySelector(selector)
    };

    this.html = (element, [value]) => {
        element.innerHTML = value
    };

    this.addClass = (element, className) => {
        element.className += className;
    };

    this.removeClass = (element, className) => {
        element.remove(className);
    };

    this.toggleClass = (element, className) => {
        element.toggle(className);
    };

    this.hasClass = (element, className) => {
       $(element).hasClass(className);
    }

    this.append = (element, newElement, [beforeElement]) => {
        element.append(newElement, [beforeElement]);
    }
   
    this.on = (element, eventName, funcName) => {
        element.addEventListener(eventName, funcName);
    }
};

let sport = new Sport('Dressage'),
    equestrian = new Equestrian('Dressage', true, true);

console.log(sport);
console.log(equestrian);

let lang = document.createElement('html');
lang.setAttribute('lang', 'en');

let metaUtf81 = document.createElement('meta');
metaUtf81.setAttribute('charset', 'UTF-8');

let title = document.createElement('title');
title.innerHTML = 'New html document';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

console.log(lang);
console.log(title);
console.log(metaUtf8);


document.head.appendChild(title);
document.head.appendChild(metaUtf8);


let div1 = document.createElement('div');

div1.classList.add('flex');

document.body.appendChild(div1);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';

div1.appendChild(h1);

let p1 = document.createElement('p1');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

div1.appendChild(p1);



let style = document.createElement('style');
style.innerHTML = `
.flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    color: #212121;
    font-family: Arvo;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 133.333%;
}

p1 {
    color: #9FA3A7;
    text-align: center;
    font-family: OpenSans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 185.714%;

    padding-bottom: 50px;
};

`;

document.body.appendChild(style);

let div2 = document.createElement('div2');

div2.classList.add('flex2');

document.body.appendChild(div2);





let style1 = document.createElement('style');
style1.innerHTML = `
.flex2 {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #FFF;
}
`;

div2.appendChild(style1);

let div3 = document.createElement('div3');

div3.classList.add('flex3');

div2.appendChild(div3);

let p2 = document.createElement('p2');
p2.innerHTML = 'FREELANCER';

div3.appendChild(p2);

let p3 = document.createElement('p3');
p3.innerHTML = 'Initially designed to ';

div3.appendChild(p3);

let p4 = document.createElement('p4');
p4.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing  ';

div3.appendChild(p4);

let button = document.createElement('div');
button.innerHTML = 'START HERE';
button.classList.add('button1');

div3.appendChild(button);

let style2 = document.createElement('style');
style2.innerHTML = `

    .flex3 {
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 400px;
        height: 480px;
        align-items: center;
        gap: 20px;

        border: 1px solid  #E8E9ED;;
    }

    p2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
    
        color: #9FA3A7;
        text-align: center;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2.4px;
    }
    
    p3 {
        display: flex;
        width: 210px;
        height: 92px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
    
        color: #212121;
        text-align: center;
        font-family: Arvo;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 46px; /* 127.778% */
    }
    
    p4 {
        display: flex;
        width: 210px;
        height: 44px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
    
        color: #9FA3A7;
        text-align: center;
        font-family: OpenSans;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 183.333% */
    }
 `;

div3.appendChild(style2);



button.style.width = '120px';
button.style.height = '38px';
button.style.border = '2px solid #FFC80A';
button.style.borderRadius = '50px';

button.style.display = 'flex';
button.style.textAlign = 'center';
button.style.alignItems = 'center';
button.style.fontFamily = 'Montserrat';
button.style.justifyContent = 'center';
button.style.color = '#212121';
button.style.fontSize = '12px';
button.style.fontWeight = '700';



let div4 = document.createElement('div4');

div4.classList.add('flex4');

div2.appendChild(div4);

let p5 = document.createElement('p5');
p5.innerHTML = 'STUDIO';

div4.appendChild(p5);

let p6 = document.createElement('p6');
p6.innerHTML = 'Initially designed to ';

div4.appendChild(p6);

let p7 = document.createElement('p7');
p7.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing  ';

div4.appendChild(p7);

let button2 = document.createElement('div');
button2.innerHTML = 'START HERE';
button2.classList.add('button2');

div4.appendChild(button2);


let style3 = document.createElement('style');
style3.innerHTML = `

    .flex4 {

        background: #8F75BE;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 400px;
        height: 480px;
        align-items: center;
        gap: 20px;
    }

    p5 {
        display: flex;
        
        flex-direction: column;
        justify-content: center;

        color: #FFC80A;
        text-align: center;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2.4px;
    }
    
    p6 {
        display: flex;
        width: 210px;
        height: 92px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
    
        color: #FFF;
        text-align: center;
        font-family: Arvo;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 46px; /* 127.778% */
    }
    
    p7 {
        display: flex;
        width: 210px;
        height: 44px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
    
        color: #FFF;
        text-align: center;
        font-family: OpenSans;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 183.333% */
    }
 `;

div4.appendChild(style3);

button2.style.width = '120px';
button2.style.height = '38px';
button2.style.border = '2px solid #FFC80A';
button2.style.borderRadius = '50px';

button2.style.display = 'flex';
button2.style.textAlign = 'center';
button2.style.alignItems = 'center';
button2.style.fontFamily = 'Montserrat';
button2.style.justifyContent = 'center';
button2.style.color = '#fff';
button2.style.fontSize = '12px';
button2.style.fontWeight = '700';
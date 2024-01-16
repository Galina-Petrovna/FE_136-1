export default class Footer {
    constructor() {
        this.elem = document.createElement('div');
    }

    render () {
        this.elem.classList.add('footer');
        this.elem.innerHTML = `
       
            <div class="logo">
                <a href="#">
                    <img src="https://png.pngtree.com/png-vector/20221228/ourmid/pngtree-online-shopping-logo-desing-png-image_6540923.png" alt="logo" />
                </a>
            </div>
        

            <div class="footer__right">
                <div class="geo">
                    <div class="img">
                        <img src="Image/geo.png" alt="geo" />
                    </div>

                   
                    <p>59, Pobediteley str, Minsk, Belarus</p>
                </div>

                <div class="mail">
                    <div class="img">
                        <img src="https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-envelope-line-icon-vector-png-image_6707447.png" alt="mail" />
                    </div>

                    <p>shop_online@gmail.com</p>
                </div>

                <div class="phone">
                    <div class="img">
                        <img src="Image/phone.png" alt="" />
                    </div>

                    <p>+375(44) 123 45 68</p>
                </div>
            </div>

            
       
        `;
    }

    init(){
        this.render();
        return this.elem;
    }
}
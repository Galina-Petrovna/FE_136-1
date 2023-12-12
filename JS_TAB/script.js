(function () {
    /**
     * 
     * @param {string} selector 
     */
    function tabs(selector) {
        const containers = document.querySelectorAll(selector);

        /**
         * 
         * @param {Element} container 
         */
        function tabController(container) {
            const buttons = container.querySelector('.tab__buttons');
            const contents = container.querySelector('.tab__contents');
            if (!buttons) return;
            if (!contents) return;

            /**
             * 
             * @param {number} num 
             */

            const contentChange = (num) => {
                [...contents.children].forEach((item, i) => {
                    if (i === num) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }

            /**
             * 
             * @param {Event & {target: HTMLElement}} event 
             */

            const buttonHandler = (event) => {
                let button = event.target;
                if (button.classList.contains('tab__button')) {
                    [...buttons.children].forEach((elem, i) => {
                        if (elem === button) {
                            elem.classList.add('active');
                            contentChange(i);
                        } else {
                            elem.classList.remove('active');
                        }
                    });
                }
            }

            buttons.addEventListener('click', (event) => buttonHandler(event));
        }

        if (containers) {
            containers.forEach(container => tabController(container));
        }

    }

    tabs('.container');

})()
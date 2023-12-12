(function(){

    const tooltips = function (selector) {
        const elems = document.querySelectorAll(selector);
        if (!elems || elems.length === 0) return;

        const tooltipHandler = (elem) => {
            const createTooltip = (event) => {

                /**
                 * @type {HTMLElement}
                 */

                let target = event.target;
                let text = target.dataset.text;
                if (!text) return;

                let tooltipElement = document.createElement('div');
                tooltipElement.classList.add('tooltip__content');
                tooltipElement.innerHTML = text;
                tooltipElement.style.top = target.offsetHeight + 10 + 'px';

                target.append(tooltipElement);
            }

            const removeTooltip = event => {
                /**
                 * @type {HTMLElement}
                 */
                let target = event.target;
                let children = target.children;

            
                [...children].forEach(item => {
                    if (item.classList.contains('tooltip__content')) {
                        item.style.opacity = 0;
                       

                        item.addEventListener('transitionend', function () {
                            item.remove();
                        });

                      
                    }
                });
            }

            elem.addEventListener('mouseout', removeTooltip);
            elem.addEventListener('mouseover', createTooltip);

            elem.addEventListener('mouseover', createTooltip);
        }

        elems.forEach(elem => tooltipHandler(elem));
    }



    tooltips('.tooltip');


})
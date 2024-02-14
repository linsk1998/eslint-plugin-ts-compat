var el: HTMLDivElement;
var handle: () => any;

el.addEventListener('click', handle);
el.removeEventListener('click', handle);
el.dispatchEvent(new Event('click'));

window.addEventListener('click', handle);
document.addEventListener('click', handle);

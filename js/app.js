const selfElement = document.querySelector('div');
const seInput = document.querySelector('input[name=outputText]');
const seBg = document.querySelector('input[name=bg]');
const seTxt = document.querySelector('input[name=txt]');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(event) {
    selfElement.textContent = seInput.value;
    selfElement.style.backgroundColor = seBg.value;
    selfElement.style.color = seTxt.value;
    selfElement.classList.toggle(selClasses.value);
});

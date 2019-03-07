const classArray = ["padded", "bigger", "borderAdd"];

document.addEventListener('DOMContentLoaded', function() {
    classArray.forEach(function(item) {
        let opt = document.createElement('option');
        opt.value = item;
        opt.innerHTML = item;
        selClasses.appendChild(opt);
    })
    nodeLister = document.querySelectorAll('#main >*');
    nodeLister.forEach(function(item) {
        console.log(item);
    })
});

const selClasses = document.querySelector('select[name=classes]');

let nodeLister;
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

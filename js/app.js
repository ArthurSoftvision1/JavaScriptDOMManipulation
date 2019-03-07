const classArray = ["padded", "bigger", "borderAdd"];
const elementArray = ['div', 'p', 'span'];

document.addEventListener('DOMContentLoaded', function() {
    classArray.forEach(function(item) {
        let opt = document.createElement('option');
        opt.value = item;
        opt.innerHTML = item;
        selClasses.appendChild(opt);
    });

    elementArray.forEach(function(item) {
        let opt = document.createElement('option');
        opt.value = item;
        opt.innerHTML = item;
        addElement.appendChild(opt);
    });

    nodeLister = document.querySelectorAll('#main >*');
    dropDownBuilder();
});

const selClasses = document.querySelector('select[name=classes]');

const eleMaker = document.querySelector('select[name=eleMaker]');

const addElement = document.querySelector('select[name=addElement]');
const adder = document.querySelector('button[name=adder]');

let nodeLister;
const selfElement = document.querySelector('div');
const seInput = document.querySelector('input[name=outputText]');
const seBg = document.querySelector('input[name=bg]');
const seTxt = document.querySelector('input[name=txt]');
const btn = document.querySelector('.btn');
const main = document.querySelector('#main');

adder.addEventListener('click', function() {
    let temp = document.createElement(addElement.value);
    temp.textContent = addElement.value;
    main.appendChild(temp);
});

btn.addEventListener('click', function(event) {
    let tempElement = nodeLister[eleMaker.value];
    tempElement.textContent = seInput.value;
    tempElement.style.backgroundColor = seBg.value;
    tempElement.style.color = seTxt.value;
    tempElement.classList.toggle(selClasses.value);
});

function dropDownBuilder() {
    eleMaker.innerHTML = "";
    nodeLister = document.querySelectorAll('#main >*');
    nodeLister.forEach(function(item, index) {
        let opt = document.createElement('option');
        opt.value = index;
        opt.innerHTML = item.tagName;
        eleMaker.appendChild(opt);
    });
}

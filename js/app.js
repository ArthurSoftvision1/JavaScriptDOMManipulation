const classArray = ["padded", "bigger", "borderAdd"];

document.addEventListener('DOMContentLoaded', function() {
    classArray.forEach(function(item) {
        let opt = document.createElement('option');
        opt.value = item;
        opt.innerHTML = item;
        selClasses.appendChild(opt);
    });
    nodeLister = document.querySelectorAll('#main >*');
    dropDownBuilder();
});

const selClasses = document.querySelector('select[name=classes]');

const eleMaker = document.querySelector('select[name=eleMaker]');
let nodeLister;
const selfElement = document.querySelector('div');
const seInput = document.querySelector('input[name=outputText]');
const seBg = document.querySelector('input[name=bg]');
const seTxt = document.querySelector('input[name=txt]');
const btn = document.querySelector('.btn');

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

var displaySelector = document.querySelector('.display');
var operationStr, result;

document.querySelector('.clear').addEventListener('click', () => {
    displaySelector.innerHTML = '';
});

document.querySelector('.backspace').addEventListener('click', backspace);

document.querySelector('.equal').addEventListener('click', () => {
    displaySelector.textContent = result;
})

document.querySelectorAll('.num').forEach(item => {
    item.addEventListener('click', () => {
        if (displaySelector.textContent.length >= 12 * 2) return;

        displaySelector.innerHTML += document.querySelector('.btn:hover').textContent;
    });
});

document.querySelectorAll('.op').forEach(item => {
    item.addEventListener('click', () => {
        operatorContent = document.querySelector('.op:hover').textContent;

        if (displaySelector.textContent.length >= 12 * 2 || displaySelector.textContent.slice(-1) === operatorContent || displaySelector.textContent.length === 0) return;

        if (displaySelector.innerHTML.slice(-7) === '</span>') backspace();

        displaySelector.innerHTML += '<span style="color: #EB4D4D">' + operatorContent + '</span>';
    });
});

setInterval(calc, 50);

function backspace() {
    if (displaySelector.innerHTML.slice(-7) === '</span>') {
        displaySelector.innerHTML = displaySelector.innerHTML.slice(0, -37);
    } else {
        displaySelector.innerHTML = displaySelector.innerHTML.slice(0, -1);
    }
}

function calc() {

    operationStr = displaySelector.textContent;

    if (displaySelector.textContent.includes('÷')) {
        operationStr = operationStr.replace('÷', '/');

    } if (displaySelector.textContent.includes('×')) {
        operationStr = operationStr.replace('×', '*');

    } if (displaySelector.textContent.includes('%')) {
        operationStr = operationStr.replace('%', '/100*');
    }

    try {
        result = eval(operationStr);
    } catch { result = '' };

    if (result == displaySelector.textContent) result = '';

    document.querySelector('.result').textContent = result;
};
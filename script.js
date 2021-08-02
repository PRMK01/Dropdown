const optionsContainer = document.querySelector('.options-container');
const selected = document.querySelector('.selected');
const allOptions = [...optionsContainer.querySelectorAll('.option')];
let currentOption = document.querySelector('.checked')
selected.innerText = currentOption.innerText;
let debounceTimeout;
let searchTerm = "";

selected.addEventListener('click', () => {
    rollOptionsList();
})

selected.addEventListener('keydown', e => {
    currentOption.classList.remove('focused');
    switch (e.code) {
        case 'Space': {
            rollOptionsList();
            break
        }
        case 'ArrowUp': {
            let prevOption = allOptions[allOptions.indexOf(currentOption) - 1]
            if (prevOption) {
                updateOption(prevOption)
            }
            break
        }
        case 'ArrowDown': {
            let nextOption = allOptions[allOptions.indexOf(currentOption) + 1]
            if (nextOption) {
                updateOption(nextOption)
            }
            break
        }
        default: {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                searchTerm = "";
            }, 500);
            searchTerm += e.key;
            for (let option of allOptions) {
                if (option.innerText.toLowerCase().startsWith(searchTerm.toLocaleLowerCase())) {
                    updateOption(option)
                    return
                }
            }
            break
        }
    }
})

allOptions.forEach(option => {
    option.addEventListener('mousedown', () => {
        updateOption(option);
        rollOptionsList(action = 'remove');
    })
})

selected.addEventListener('blur', () => {
    rollOptionsList(action = 'remove');
})

function updateOption (option) {
    currentOption.classList.remove('checked');
    currentOption = option;
    currentOption.classList.add('checked');
    currentOption.querySelector('.checkbox').checked = true;
    selected.innerText = currentOption.innerText;
    currentOption.scrollIntoView({block: 'nearest'});
}

function rollOptionsList (action) {
    if (action === 'remove') {
        optionsContainer.classList.remove('active');
        selected.classList.remove('ryż');
    }else {
        optionsContainer.classList.toggle('active');
        selected.classList.toggle('ryż');
    }
}
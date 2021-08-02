    // ADD STRAIGHT AFTER EVENT LISTENER FOR KEYDOWN
    
    // --------------------------------------------------------------------------------------------------------------  OPTION 1
    // if (e.key === " ") {
    //     optionsContainer.classList.add('active');
    //     selected.classList.add('ryż');
    // }

    // if (optionsContainer.classList.contains('active')) {
    //     let previousOption = currentOption;
    //     const focused = document.querySelector('.focused');

    //     switch (e.key) {
    //         case 'Escape': {
    //             rollOptionsList(action = 'remove');
    //             if (!(currentOption.classList.contains('checked'))) {
    //                 currentOption = document.querySelector('.checked');
    //                 currentOption.classList.add('focused');
    //                 previousOption.classList.remove('focused');
    //             }
    //             break
    //         }  
    //         case 'Enter': {
    //             rollOptionsList(action = 'remove');
    //             if (!(currentOption.classList.contains('checked'))) {
    //                 document.querySelector('.checked').classList.remove('checked');
    //                 currentOption.classList.add('checked');
    //                 currentOption.querySelector('.checkbox').checked = 'true';
    //                 selected.innerText = currentOption.innerText;
    //             }
    //             break
    //         }
    //         case 'ArrowUp': {
    //             currentOption = allOptions[allOptions.indexOf(previousOption) - 1]
    //             if (currentOption) {
    //                 currentOption.classList.add('focused');
    //                 previousOption.classList.remove('focused');
    //                 previousOption = currentOption;
    //                 currentOption.scrollIntoView({block: 'center'});
    //             }else {
    //                 currentOption = previousOption;
    //             }
    //             break
    //         }
    //         case 'ArrowDown': {
    //             currentOption = allOptions[allOptions.indexOf(previousOption) + 1]
    //             if (currentOption) {
    //                 currentOption.classList.add('focused');
    //                 previousOption.classList.remove('focused');
    //                 previousOption = currentOption;
    //                 currentOption.scrollIntoView({block: 'center'});
    //             }else {
    //                 currentOption = previousOption;
    //             }
    //             break
    //         }
    //     }
    // }

    // --------------------------------------------------------------------------------------------------------------  OPTION 2
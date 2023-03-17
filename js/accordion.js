const accordions = document.getElementsByClassName('accordion');

for(let i = 0; i < accordions.length; i++) {
    let currentAccordion = accordions[i]; // the current accordion in the array
    let parent = currentAccordion.parentNode; // the parent of this element
    // the children of the parent AKA the siblings of the current element
    // siblings also includes the current element too
    let siblings = parent.getElementsByClassName('accordion'); 
    
    // boolean whether the accordion-list (parent) should only have a
    // single accordion active at a time, and should close the others
    // when a different accordion is made active
    let singleActiveBool = parent.classList.contains('single-active');

    // get the title div and add click event listener to that
    currentAccordion.addEventListener('click', function() {
        // if single active class is applied to the parent,
        // all other accordions should become inactive before this one is made active
        if(this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            if(singleActiveBool) {
                for(item of siblings) {
                    item.classList.remove('active');
                }
            }
            this.classList.add('active');
        }
    });
}
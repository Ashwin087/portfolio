// Hamburger Menu Related
const hamburgerMenu = document.querySelector('.navBurger');
const navUl = document.querySelector('.navLinks');
const anchors = document.querySelectorAll('.anchor')

const navSlide = () => {
    hamburgerMenu.addEventListener('click', () => {
        const navUl = document.querySelector('.navLinks');

        // Toggle Nav;
        navUl.classList.toggle('active');
        hamburgerMenu.classList.toggle('burgerToggle');
    });
}



anchors.forEach((anchor) => {
    anchor.addEventListener('click', () => {
        navUl.classList.toggle('active');
        hamburgerMenu.classList.toggle('burgerToggle');    
    })
})



// Scroll to Top of Page
const takeToTop = () => {
    const scrollToTop = document.querySelector('#scrollToTop');
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })
}



// Type Writer Effect. Credit to Coding Journey (https://www.youtube.com/watch?v=T4VE_6v9hFs)
const cursorSpan = document.querySelector(".cursor")
const typedTextSpan = document.querySelector(".typed-text")
const textArray = ["a web developer", "often called Ash", "the very best, like no one ever was"]
const typingDelay = 200; //Before typing next character
const erasingDelay = 100; 
const newTextDelay = 2000;
let textArrayIndex = 0; 
let charIndex = 0;

// Type a character. Pause for typing delay before calling itself again.
// If last character of string is typed, wait for newTextDelay before calling erase. 
function type() {
    if(charIndex < textArray[textArrayIndex].length){ //char index < word in text array 
        if(!cursorSpan.classList.contains("typing")){
            cursorSpan.classList.add("typing") //If cursor span doesn't have typing class while typing, add it
        }
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex) // += allows for entire word to be typed
        charIndex++
        setTimeout(type, typingDelay) //call type function again after waiting for typingDelay
    } else { 
        cursorSpan.classList.remove("typing") //returns blinking effect
        setTimeout(erase, newTextDelay)
    }
}

function erase() {
    if(charIndex > 0) { //string is not entirely erased yet, remove character function and call erase function again
        if(!cursorSpan.classList.contains("typing")){
            cursorSpan.classList.add("typing")
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex - 1 ) // extracts characters from string between indices
        // charIndex -1: first time erase function is called, charIndex is length of first string.
        // to remove last character, take substring starting from index 0, up until but not including 3  
        charIndex--
        setTimeout(erase, erasingDelay)
    } else { //call type function to type next string after delay when charIndex = 0
        textArrayIndex++; //move on to next string
        if(textArrayIndex >= textArray.length){
            textArrayIndex = 0; //infinite loop through string in array
        }
        setTimeout(type, typingDelay + 1100);
        cursorSpan.classList.remove("typing")
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length){
        setTimeout(type, typingDelay + 300) // Delay typing on page load opposed to calling type().
    }
})



const init = () => {
    navSlide();
    takeToTop();
}

init();
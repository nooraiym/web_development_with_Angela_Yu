let drums = document.querySelectorAll('.drum');

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', handleClick)
}

function handleClick() {
    let id = this.innerHTML;
    makeSound(id);
    animateButton(id);
}


document.addEventListener('keydown', e => {
    makeSound(e.key);
    animateButton(e.key);
})

function makeSound(key) {

    switch (key) {
        case 'w':
            let tom1 = new Audio('/sounds/tom-1.mp3')
            tom1.play()
            break;
        case 'a':
            let tom2 = new Audio('/sounds/tom-2.mp3')
            tom2.play()
            break;
        case 's':
            let tom3 = new Audio('/sounds/tom-3.mp3')
            tom3.play()
            break;
        case 'd':
            let tom4 = new Audio('/sounds/tom-4.mp3')
            tom4.play()
            break;
        case 'j':
            let snare = new Audio('/sounds/snare.mp3')
            snare.play()
            break;
        case 'k':
            let crash = new Audio('/sounds/crash.mp3')
            crash.play()
            break;
        case 'l':
            let kick = new Audio('/sounds/kick-bass.mp3')
            kick.play()
            break;
        default:
            break;
    }

}

function animateButton(currentKey) {
    let button = document.querySelector("." + currentKey)
    button.classList.add('pressed')
    setTimeout( () => {
        button.classList.remove('pressed')
    }, 200)
}
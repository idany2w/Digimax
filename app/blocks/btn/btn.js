function btn__click(e){
    if(!e.target.classList.contains('btn') || e.target.tagName == "A") return false

    alert('click')
}


document.addEventListener('click', btn__click)
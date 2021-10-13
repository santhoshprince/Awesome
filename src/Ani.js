window.addEventListener('scroll', () => {

    let content = document.querySelector('.abs');
    let contentPosition = content.getBoundingClientRect().top;
    let screenposition = window.innerHeight;


    if (contentPosition < screenposition) {
        content.classList.add('active');

    }


});
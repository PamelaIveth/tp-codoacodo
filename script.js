document.querySelector('.menu-btn').addEventListener('click', ()=> {
    document.querySelector('.nav-menu').classList.toggle('show')
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.parrafo',{delay: 500});
ScrollReveal().reveal('.columnas',{delay: 500});
ScrollReveal().reveal('.banner',{delay: 500});
ScrollReveal().reveal('.social',{delay: 500});

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#correo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    $buttonMailto.setAttribute('href', `mailto:pameivethh@gmail.com?subjet=${form.get('name')}${form.get('email')}&body=${form.get('Mensaje')}`)
    $buttonMailto.click()
}
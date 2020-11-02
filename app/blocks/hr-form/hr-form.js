document.addEventListener('click', function(e){
    if(!e.target.classList.contains('hr-form__fieldset-input')) return false

    let input = e.target;
    let fieldset = input.closest('.hr-form__fieldset');
    let legend = fieldset.querySelector('.hr-form__legend');
    
    input.placeholder = legend.textContent;
    fieldset.classList.add('hr-form__fieldset--focus')
    legend.classList.add('hr-form__legend--focus')

    input.addEventListener('blur', function(){
        input.placeholder = '';
        fieldset.classList.remove('hr-form__fieldset--focus')
        legend.classList.remove('hr-form__legend--focus')
    }, {once:true})


})
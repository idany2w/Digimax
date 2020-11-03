document.addEventListener('click', function(e){
    if(!e.target.classList.contains('hr-form__fieldset-input')) return false

    var input = e.target;
    var fieldset = input.closest('.hr-form__fieldset');
    var legend = fieldset.querySelector('.hr-form__legend');

    input.placeholder = ''
    input.classList.add('hr-form__fieldset-input--focus')
    fieldset.classList.add('hr-form__fieldset--focus')
    legend.classList.add('hr-form__legend--focus')

    input.addEventListener('blur', function(){
        if(!input.value){
            input.placeholder = input.getAttribute('data-placeholder');


            input.classList.remove('hr-form__fieldset-input--focus')
            fieldset.classList.remove('hr-form__fieldset--focus')
            legend.classList.remove('hr-form__legend--focus')
        }

    }, {once:true})


})
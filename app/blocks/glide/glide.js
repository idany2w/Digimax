var Glides = []

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.glide').forEach(function(e){
        Glides.push({
            glide: new Glide(e).mount({}),
            element: e
        })
    })

    document.addEventListener('click', function(e){
        if(!e.target.classList.contains('tabs__control')) return false

        var currTabControl = e.target;
        var currTabId = currTabControl.getAttribute('data-tab-id');
        var tabs = currTabControl.closest('.tabs');
        var currTab = tabs.querySelector('.tabs__tab[data-tab-id='+currTabId+']');
        var currTabGlide = currTab.querySelector('.glide');

        Glides.forEach(function(element){
            if(element.element == currTabGlide){
                element.glide.update({})
                return
            }
        })
    })
})
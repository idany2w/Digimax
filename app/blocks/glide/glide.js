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

        let currTabControl = e.target;
        let currTabId = currTabControl.dataset.tabId;
        let tabs = currTabControl.closest('.tabs');
        let currTab = tabs.querySelector('.tabs__tab[data-tab-id='+currTabId+']');
        let currTabGlide = currTab.querySelector('.glide');

        Glides.forEach(function(element){
            if(element.element == currTabGlide){
                element.glide.update({})
                return
            }
        })
    })
})
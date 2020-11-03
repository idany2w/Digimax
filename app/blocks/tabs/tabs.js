function tabs__click(e){

    if(!e.target.classList.contains('tabs__control')) return false

    var currTabControl = e.target;
    var currTabId = currTabControl.getAttribute('data-tab-id');
    var tabs = currTabControl.closest('.tabs');
    var activeTabControl = tabs.querySelector('.tabs__control.tabs__control_active');
    var activeTabId = activeTabControl.getAttribute('data-tab-id');

    var currTab = tabs.querySelector('.tabs__tab[data-tab-id='+currTabId+']');
    var activeTab = tabs.querySelector('.tabs__tab.tabs__tab_active[data-tab-id='+activeTabId+']');

    if(activeTabControl){
        activeTabControl.classList.remove('tabs__control_active');
        activeTab.classList.remove('tabs__tab_active')
    }

    currTabControl.classList.add('tabs__control_active');
    currTab.classList.add('tabs__tab_active');
}

document.addEventListener('click', tabs__click)
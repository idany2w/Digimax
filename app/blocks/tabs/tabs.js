function tabs__click(e){

    if(!e.target.classList.contains('tabs__control')) return false

    let currTabControl = e.target;
    let currTabId = currTabControl.dataset.tabId;
    let tabs = currTabControl.closest('.tabs');
    let activeTabControl = tabs.querySelector('.tabs__control.tabs__control_active');
    let activeTabId = activeTabControl.dataset.tabId;

    let currTab = tabs.querySelector('.tabs__tab[data-tab-id='+currTabId+']');
    let activeTab = tabs.querySelector('.tabs__tab.tabs__tab_active[data-tab-id='+activeTabId+']');

    if(activeTabControl){
        activeTabControl.classList.remove('tabs__control_active');
        activeTab.classList.remove('tabs__tab_active')
    }

    currTabControl.classList.add('tabs__control_active');
    currTab.classList.add('tabs__tab_active');
}

document.addEventListener('click', tabs__click)
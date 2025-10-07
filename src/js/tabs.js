

function getSelectedTabElementFromTarget(target) {
  return target.classList.contains('tab') ? target : target.parentElement;
}

const prepareTabEventListeners = () => {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      const selectedTab = getSelectedTabElementFromTarget(event.target);
      const tabs = document.querySelectorAll('.tab');

      tabs.forEach((tab) => {
        const tabId = tab.getAttribute('id');
        const tabContent = document.querySelector(`div[data-forTab=${tabId}]`);
        const featuresImage = document.querySelector('.tabs__image');

        if (selectedTab.id === tab.id) { 
          tabContent.classList.add('active');
          tab.classList.add('active');
          featuresImage.classList.add(tabId);
        } else {
          tabContent.classList.remove('active');
          tab.classList.remove('active');
          featuresImage.classList.remove(tabId);
        }
      });
    })
  });
}

export { prepareTabEventListeners };

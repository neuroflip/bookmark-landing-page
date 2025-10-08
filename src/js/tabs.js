
const ACTIVECLASS = 'active';
let previousSelectedTabId = 'tab1';

const getSelectedTabElementFromTarget = (target) => {
  return target.classList.contains('tab') ? target : target.parentElement;
}

const getQuerySelectorForTabContent = (tabId) => {
  return `div[data-forTab=${tabId}]`
}

const tabOnClickEventListener = (event) => {
      const previousSelectedTab = document.getElementById(previousSelectedTabId);
      const previousSelectedTabContent = document.querySelector(getQuerySelectorForTabContent(previousSelectedTabId));

      const currentSelectedTab = getSelectedTabElementFromTarget(event.target);
      const currentSelectedTabId = currentSelectedTab.getAttribute('id');
      const currentSelectedTabContent = document.querySelector(getQuerySelectorForTabContent(currentSelectedTabId));
      
      const featuresImage = document.querySelector('.tabs__image');

      previousSelectedTabContent.classList.remove(ACTIVECLASS);
      previousSelectedTab.classList.remove(ACTIVECLASS);
      featuresImage.classList.remove(previousSelectedTabId);

      currentSelectedTabContent.classList.add(ACTIVECLASS);
      currentSelectedTab.classList.add(ACTIVECLASS);
      featuresImage.classList.add(currentSelectedTabId);

      previousSelectedTabId = currentSelectedTabId;
}

const prepareTabEventListeners = () => {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', tabOnClickEventListener)
  });
}

export { prepareTabEventListeners };

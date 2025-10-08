

const onClickEventListener = () => {
    const menuContainer = document.getElementById("menu");

    menuContainer.classList.toggle("closed");
}

const prepareBurguerMenuListeners = () => {
  const menuElement = document.getElementById("burguerMenu__icon");

  menuElement.addEventListener("click", onClickEventListener)
}

export { prepareBurguerMenuListeners };


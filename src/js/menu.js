

const prepareBurguerMenuListeners = () => {
  const menuElement = document.getElementById("burguerMenu__icon").addEventListener("click", () => {
    const menuContainer = document.getElementById("menu");

    menuContainer.classList.toggle("closed");
  })
}

export { prepareBurguerMenuListeners };


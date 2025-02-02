import compareOrder from "./compareOrder.js";
import handleDragAndDrop from "./dragAndDrop.js";
import shuffleArray from "./shuffleArray.js";
import stepsForSoftwareProject from "./stepsData.js";

const createListItems = () => {
  const list = document.querySelector(".list");
  list.innerHTML = "";
  const shuffledArray = shuffleArray([...stepsForSoftwareProject]);

  shuffledArray.forEach((step, index) => {
    const listItem = document.createElement("li");
    list.append(listItem);
    listItem.textContent = `${index + 1}.${step}`;
    listItem.classList.add("list__item");
    listItem.setAttribute("draggable", true);
    listItem.setAttribute("data.index", index);
  });
  const compareButton = document.createElement("button");
  document.querySelector(".main-container").append(compareButton);
  compareButton.textContent = "Check order";
  compareButton.classList.add("list__button");
  compareButton.addEventListener("click", compareOrder);
  handleDragAndDrop();

  const restartButton = document.createElement("button");
  document.querySelector(".main-container").append(restartButton);
  restartButton.textContent = "Try Again";
  restartButton.classList.add("list__button");

  restartButton.addEventListener("click", () => {
    location.reload();
  });
  handleDragAndDrop();
};

export default createListItems;

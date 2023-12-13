let addCardButton = document.querySelector(".button button");
let cardsDiv = document.querySelector(".cards");
let popup = document.querySelector(".popup");
let currentCard; // Variable to keep track of the currently edited card

addCardButton.addEventListener("click", function () {
  let newCard = document.createElement("div");

  let titleInput = document.querySelector(".addCard .title input");
  let descriptionTextarea = document.querySelector(
    ".addCard .description input"
  );

  newCard.innerHTML = `<div class="card">
    <div style ="text-align:center">${"CARD"}</div>
    <div class="cardTitle">
      <div>
          ${titleInput.value}
      </div>
      <div class="modifyDelete">
        <div id="modify">
            <button>EDIT</button>
        </div>
        <div id="delete">
            <button>DELETE</button>
        </div>
      </div>
    </div>
    <div class="cardDescription">
          <p>${descriptionTextarea.value}</p>
    </div>
  </div>`;

  let editButton = newCard.querySelector("#modify button");
  editButton.addEventListener("click", function () {
    currentCard = newCard;
    let titleInput = currentCard.querySelector(".cardTitle div");
    let descriptionInput = currentCard.querySelector(".cardDescription p");

    let popupTitle = document.querySelector(".popupTitle input");
    let popupDescription = document.querySelector(".popupDescription input");

    popupTitle.value = titleInput.textContent;
    popupDescription.value = descriptionInput.textContent;

    popup.style.display = "block";
  });

  let saveChangesButton = document.querySelector(".saveChanges");
  saveChangesButton.addEventListener("click", function () {
    let newTitle = document.querySelector(".popupTitle input").value;
    let newDescription = document.querySelector(
      ".popupDescription input"
    ).value;

    let titleInput = currentCard.querySelector(".cardTitle div");
    let descriptionInput = currentCard.querySelector(".cardDescription p");

    titleInput.textContent = newTitle;
    descriptionInput.textContent = newDescription;

    popup.style.display = "none";
  });

  let deleteButton = newCard.querySelector("#delete button");
  deleteButton.addEventListener("click", function () {
    newCard.remove();
  });

  cardsDiv.appendChild(newCard);
});

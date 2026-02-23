let interviewList = [];
let rejectedList = [];
let currentFilter = "all";

let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

let allBtn = document.getElementById("filter-all");
let interviewBtn = document.getElementById("filter-interview");
let rejectedBtn = document.getElementById("filter-rejected");

let allCardSection = document.getElementById("allCards");
let emptyBox = document.getElementById("empty-box");
let allJob = document.getElementById("btn-click");

let allCard = document.querySelectorAll(".job-card");
for (let card of allCard) {
  let status = card.querySelector(".status");
  status.innerText = "Not Applied";
}

function removeArray(arr, card) {
  let newArr = [];
  for (let item of arr) {
    if (item !== card) {
      newArr.push(item);
    }
  }
  return newArr;
}

function CalculateCount() {
  allCard = document.querySelectorAll(".job-card");
  total.innerText = allCard.length;

  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;

  if (currentFilter == "Interview") {
    allJob.innerText = interviewList.length + " of " + allCard.length + " jobs";
  } else if (currentFilter == "Rejected") {
    allJob.innerText = rejectedList.length + " of " + allCard.length + " jobs";
  } else {
    allJob.innerText = allCard.length + " jobs";
  }
}
CalculateCount();

//Event delegation
document.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("interview-btn") ||
    event.target.classList.contains("rejected-btn")
  ) {
    let card = event.target.closest(".job-card");
    let status = card.querySelector(".status");

    interviewList = interviewList.filter((item) => item !== card);
    rejectedList = rejectedList.filter((item) => item !== card);

    interviewList = removeArray(interviewList, card);
    rejectedList = removeArray(rejectedList, card);

    if (event.target.classList.contains("interview-btn")) {
      interviewList.push(card);
      status.innerText = "Interview";
      status.className =
        "status rounded-md bg-green-100 px-3 py-1 text-xs font-medium text-green-700";
    } else {
      rejectedList.push(card);
      status.innerText = "Rejected";
      status.className =
        "status rounded-md bg-red-100 px-3 py-1 text-xs font-medium text-red-700";
    }
    if (currentFilter == "Interview" && !interviewList.includes(card)) {
      card.style.display = "none";
      emptyBox.classList.remove('hidden')
    }
    if (currentFilter === "Rejected" && !rejectedList.includes(card)) {
      card.style.display = "none";
      emptyBox.classList.remove('hidden')
    }

    CalculateCount();
  }
//Delete part
  if (event.target.closest(".fa-trash-can")) {
    let card = event.target.closest(".job-card");
    if (currentFilter == "Interview") {
      interviewList = removeArray(interviewList, card);
      emptyBox.classList.remove("hidden");
      card.style.display = "none";
    } else if (currentFilter == "Rejected") {
      rejectedList = removeArray(rejectedList, card);
      emptyBox.classList.remove("hidden");
      card.style.display = "none";
    } else {
      interviewList = removeArray(interviewList, card);
      rejectedList = removeArray(rejectedList, card);
      card.remove();
    }
    CalculateCount();
  }
});


allBtn.addEventListener("click", function () {
  currentFilter = "all";
  for (let card of allCard) {
    card.style.display = "block";
  }
  emptyBox.classList.add("hidden");
  CalculateCount();
});

//Interview button
interviewBtn.addEventListener("click", function () {
  currentFilter = "Interview";
  let showing = 0;
  for (let card of allCard) {
    if (interviewList.includes(card)) {
      card.style.display = "block";
      showing++;
    } else {
      card.style.display = "none";
    }
  }
  emptyBox.classList.toggle("hidden", showing !== 0);
  CalculateCount();
});

//Rejected button
rejectedBtn.addEventListener("click", function () {
  currentFilter = "Rejected";
  let showing = 0;
  for (let card of allCard) {
    if (rejectedList.includes(card)) {
      card.style.display = "block";
      showing++;
    } else {
      card.style.display = "none";
    }
  }
  emptyBox.classList.toggle("hidden", showing !== 0);
  CalculateCount();
});



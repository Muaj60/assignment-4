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

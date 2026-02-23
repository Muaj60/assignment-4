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

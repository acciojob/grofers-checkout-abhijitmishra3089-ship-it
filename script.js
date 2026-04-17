
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((price) => {
    total +=price.textContent.match(/\d+$/);
	  total += value ? Number(value[0]) : 0;
  });

  const newRow = document.createElement("tr");
  const cell = document.createElement("td");

  cell.colSpan = 2;
	cell.id="ans";
  cell.textContent = total;

  newRow.appendChild(cell);
  document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


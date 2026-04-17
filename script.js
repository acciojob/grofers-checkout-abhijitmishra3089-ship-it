
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach((price) => {
    total += Number(price.textContent);
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


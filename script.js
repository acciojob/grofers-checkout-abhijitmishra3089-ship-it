const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
const prices=Document.quereySelectorAll('.prices');
	let total=0;
	prices.forEach((price)=>{
  total+=Number(prices.textcontent);
		});
	const newrow=Documennt.createElement("tr");
	const cell=Documennt.createElement('td');
	cell.colspan=2;
	cell.textcontent=total;
	newrow.appendChild(newcell);
    Element.querySelector('table').appendChild('newrow');
};

getSumBtn.addEventListener("click", getSum);


function acceptance() {
	let company = document.querySelector('input[name="shippingCompany"]');
	let name = document.querySelector('input[name="productName"]');
	let quantity = document.querySelector('input[name="productQuantity"]');
	let scrape = document.querySelector('input[name="productScrape"]');

	let result = document.getElementById("warehouse");
	let btnAdd = document.getElementById("acceptance")
	btnAdd.addEventListener("click", function () {
		if (company.value && name.value
			&& Number(quantity.value)
			&& Number(scrape.value)) {
			let totalQuantity = Number(quantity.value) - Number(scrape.value);
			let output = "";
			if (totalQuantity > 0) {
				let div = document.createElement("div");
				let p = document.createElement("p");
				output = `[${company.value}] ${name.value} - ${totalQuantity} pieces`;
				p.textContent = output;

				let button = document.createElement("button");
				button.textContent = "Out of stock";
				button.addEventListener("click", () => { div.remove() })

				div.appendChild(p);
				div.appendChild(button);

				result.appendChild(div);
			}
		}
		company.value = "";
		name.value = "";
		quantity.value = "";
		scrape.value = "";
	});
}
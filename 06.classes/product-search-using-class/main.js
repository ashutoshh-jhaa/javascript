class App {
  constructor() {
    this.products = [];
    this.filteredProducts = [];
    this.init();
  }

  async init() {
    await this.fetchProducts();
    this.createUI();
    this.render();
  }

  async fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      this.products = await response.json();
    } catch (error) {
      console.log(`Error Fetching Data ${error}`);
    }
    this.filteredProducts = [...this.products];
  }

  createUI() {
    const container = document.createElement("div");
    container.classList.add("container", "text-center");
    document.body.appendChild(container);

    // Create input for searching products
    this.inputField = document.createElement("input");
    this.inputField.type = "text";
    this.inputField.placeholder = "Start Searching...";
    this.inputField.classList.add("m-3");
    this.inputField.addEventListener("input", (event) => {
      this.filter(event);
    });
    container.appendChild(this.inputField);


    // Create structure of products container
    this.productsContainer = document.createElement("div");
    this.productsContainer.id = "products-container";
    this.productsContainer.classList.add("d-flex", "flex-wrap");
    container.appendChild(this.productsContainer);
  }

  render() {
    if (this.filteredProducts.length === 0) {
      this.productsContainer.textContent = "No Results";
      return;
    }

    this.productsContainer.innerHTML = "";

    this.filteredProducts.forEach((prdct) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("products", "card", "col-3", "px-2");
      productDiv.innerHTML = `
        <img src="${prdct.image}" alt="${prdct.title}" class="img-fluid">
        <h3 class="card-title">${prdct.title}</h3>
        <p class="card-text">${prdct.description.substring(0, 100)}...</p>
        <p><strong> Price : $${prdct.price}</strong></p>
      `;
      this.productsContainer.appendChild(productDiv);
    });
  }

  filter(event) {
    const query = event.target.value.toLowerCase();
    console.log(query);

    this.filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );

    console.log(this.filteredProducts);
    this.render();
  }
}

const app = new App();
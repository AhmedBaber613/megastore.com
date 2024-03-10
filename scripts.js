async function asynchronous(DescriptionCharacters) {
  try {
    const apiUrl = "https://fakestoreapi.com/products";
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.json();

    // Assuming there's a parent container in your HTML to append all product divs to.
    // Ensure this element exists in your HTML structure.
    const parentContainer = document.querySelector(".parent-container");

    // Clear existing content in the parent container.
    parentContainer.innerHTML = "";

    data.forEach((product, index) => {
      const { title, description, image, price } = product;

      // Create a new div for each product with class 'pro-max'
      const productDiv = document.createElement("div");
      productDiv.classList.add("pro-max");

      // Assign "pro-max1" class to the first three divs
      if (index < 3) {
        productDiv.classList.add("pro-max1");
      }

      const productTitle = document.createElement("h2");
      productTitle.textContent = title;

      const priceDescription = document.createElement("p");
      priceDescription.textContent = "$" + price;
      priceDescription.classList.add("price");

      const Description = document.createElement("p");
      Description.textContent = description.substr(0, DescriptionCharacters) + "...";
      Description.classList.add(".desc");

      const overlay = document.createElement("div");
      productDiv.classList.add(".overlay");

      const productImage = document.createElement("img");
      productImage.src = image;
      productImage.classList.add("img");

      // Append the title, description, and image to the new product div
      productDiv.appendChild(productImage);
      productDiv.appendChild(productTitle);
      productDiv.appendChild(Description);
      productDiv.appendChild(priceDescription);

      // Append the new product div to the parent container
      parentContainer.appendChild(productDiv);
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

asynchronous(40);
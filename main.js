const containerEl = document.querySelector(".container");

// fetching the api & putting the required data inside the html
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((ele) => {
      containerEl.innerHTML += `
         <div class="cart">
        <img 
          src= "${ele.images[0]}"
          width="250px"
          height="250px"
          alt=""
        />
        
     <span>${ele.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ${ele.brand}</span>
        <p>$${ele.price}</p>
        <p>Rating: ${ele.rating}</p>
        <p>Stock: ${ele.stock}</p>
      </div>
        `;
    });
  });

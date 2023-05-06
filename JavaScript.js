// Menambahkan event listener pada form
document.getElementById("aspirasi-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Mengambil nilai dari input form
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let aspirasi = document.getElementById("aspirasi").value;
  
    // Mengirim data ke mockAPI
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: nama,
        body: aspirasi,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
  
    // Menyimpan data secara lokal
    let data = {
      nama: nama,
      email: email,
      aspirasi: aspirasi
    };
  
    localStorage.setItem("aspirasi", JSON.stringify(data));
  
    // Menampilkan pesan sukses
    alert("Aspirasi berhasil dikirim!");
  });
  
  function getAspirasiFromAPI() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => json.slice(0, 5))
      .catch(error => console.log(error));
  }

  function getAspirasiFromLocalStorage() {
    let data = localStorage.getItem("aspirasi");
    return JSON.parse(data);
  }

  // Menampilkan data pada halaman
let container = document.getElementById("aspirasi-container");

// Mengambil data dari mockAPI atau LocalStorage
let data = getAspirasiFromAPI() || [getAspirasiFromLocalStorage()];

// Menampilkan data pada halaman
for (let i = 0; i < data.length; i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  let cardText = document.createElement("p");
  cardText.classList.add("card-text");

  cardTitle.innerText = data[i].nama;
  cardText.innerText = data[i].aspirasi;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);
  container.appendChild(card);
}

// Memperbarui tampilan pada halaman
function updateUI() {
    let container = document.getElementById("aspirasi-container");
    container.innerHTML = "";
  
    // Mengambil data dari mockAPI atau LocalStorage
    let data = getAspirasiFromAPI() || [getAspirasiFromLocalStorage()];
  
    // Menampilkan data pada halaman
    for (let i = 0; i < data.length; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      let cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      let cardText = document.createElement("p");
      cardText.classList.add("card-text");
  
      cardTitle.innerText = data[i].nama;
      cardText.innerText = data[i].aspirasi;
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      card.appendChild(cardBody);
      container.appendChild(card);
    }
  }
  
  // Menambahkan event listener pada window untuk memperbarui tampilan pada halaman
  window.addEventListener("load", updateUI);

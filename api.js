let endpointGetData = "https://reqres.in/api/users";
let konten = document.getElementById('konten');

fetch(endpointGetData)
  .then(response => response.json())
  .then(response => {
    console.log(response.data[0]);
    const data = [
      {
        jenis: "Gado Gado",
        deskripsi: "Gado-gado adalah hidangan salad tradisional Indonesia yang terdiri dari campuran sayuran segar.",
        foto: "img/gadogado.jpg"
      },
      {
        jenis: "lemper",
        deskripsi: "ketan yang dibungkus dengan daun pisang dan diisi dengan daging ayam yang dimasak dengan santan dan rempah-rempah.",
        foto: "img/lemper.jpg" 
      },
      {
        jenis: "Nasi Goreng",
        deskripsi: "Nasi goreng adalah salah satu makanan tradisional Indonesia yang paling populer. Ini adalah nasi yang digoreng bersama dengan bumbu-bumbu.",
        foto: "img/nasgor.jpg" 
      },
      {
        jenis: "Pempek",
        deskripsi: "Pempek adalah makanan khas Palembang, Sumatera Selatan, yang terbuat dari ikan yang digiling halus, tepung sagu, dan bumbu-bumbu rempah.",
        foto: "img/pempek.jpg" 
      },
      {
        jenis: "Rendang",
        deskripsi: " Hidangan ini terbuat dari daging sapi yang dimasak dalam santan dan rempah-rempah ",
        foto: "img/rendang.jpg" 
      },
      {
        jenis: "Sate",
        deskripsi: "Sate adalah makanan yang terdiri dari potongan daging (biasanya daging ayam, sapi, atau kambing) yang ditusuk dan dipanggang di atas bara api atau arang.",
        foto: "img/sate.jpg"
      },
      {
        jenis: "Soto",
        deskripsi: "sup tradisional Indonesia yang terdiri dari kaldu ayam atau daging sapi yang diisi dengan mie, potongan daging ayam atau sapi, telur rebus.",
        foto: "img/soto.jpg" 
      },
      {
        jenis: "Nasi Kuning",
        deskripsi: "Nasi Kuning adalah hidangan khas Indonesia yang terdiri dari nasi yang dimasak dengan santan dan kunyit sehingga berwarna kuning.",
        foto: "img/naskun.jpg"
      }
    ];

    console.log(data);

    for (let index = 0; index < data.length; index++) {
      konten.innerHTML += `<div class="card" style="width: 18rem;">
      <img src="${data[index].foto}" class="card-img-top" alt="${data[index].jenis}">
      <div class="card-body">
        <h5 class="card-title">${data[index].jenis}</h5>
        <p class="card-text">${data[index].deskripsi}</p>
        <a href="#" class="btn btn-primary">Pesan Sekarang</a>
      </div>
    </div>`;
    }
  });

let dataPengguna = {
  "nama": "anggun",
  "job": "mahasiswa"
};

let fetchOptions = {
  method: "POST", 
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(dataPengguna) 
};

fetch(endpointGetData, fetchOptions)
  .then(response => response.json())
  .then(response => console.log(response));

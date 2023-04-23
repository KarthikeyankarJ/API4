
async function fetchdata() {
  try{
    const response = await fetch("https://hp-api.onrender.com/api/characters")
    const data = await response.json();
    data.forEach(element => {
      const breweriesdata = {
        ...element
      }
      breweriesfinaldata(breweriesdata)
    });
  }
  catch (error){
    console.log(error)
    document.body.innerHTML += `<h1>Page Not Found Error 404</h1>`
  }
}
function breweriesfinaldata(element){
  document.body.innerHTML += `
  <div class="body">
  <div class="container"  id="name2">
  <div class="position1">
  <div class="img"><img src="${element.image}"></div>
  <h4 class="name1">${element.name}</h4>
  <div class="shopsize">
  <div class="icon"><span class="material-symbols-outlined">
  local_convenience_store
  </span></div>
  <div class="headline"><h4>${element.dateOfBirth}</h4></div>
  </div>
  
  </div>
  


  <div class="info">
  <div class="topic">
  <div class="icon"><span class="material-symbols-outlined">
  home
  </span></div>
  <div class="headline"><h5>${element.house}</h5></div>
  </div>

  <div class="topic">
  <div class="icon"><span class="material-symbols-outlined">
  alternate_email
  </span></div>
  <div class="headline"><h5>${element.gender}</h5></div>
  </div>


  <div class="topic">
  <div class="icon"><span class="material-symbols-outlined">
  recent_actors
  </span></div>
  <div class="headline"><h5>${element.actor}</h5></div>
  </div>
  </div>
  </div>
  </div>
  `
}
fetchdata()
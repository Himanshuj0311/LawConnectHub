let token = localStorage.getItem("Token");
let main = document.querySelector('.indi');
let ID =(localStorage.getItem("product"));
console.log(ID)
let url = "https://lawconnecthub.onrender.com/getLawyer";


function fetchData() {
    fetch(`${url}/${ID}`)
      .then((res) => res.json())
      .then((data) => {
      //  console.log(data)
      localStorage.setItem('lawyer', data.name)
        appendToDom(data.name, data.price, data.image, data.bio, data._id, data.email, data.gender, data.rating, data.skills,data.experience,data.languages,data.email)
      })
  }
  fetchData();
  function appendToDom(name, price, image, bio, _id, gender, email, rating, skills,experience,languages   ) {
    
    main.innerHTML = `<div class="imagediv">
     
      <img src="${image}" alt="${name}"/>
          </div>
          <div class="productdetails">
      <h3>Name: ${name}</h3>
      <h3>Bio: ${bio}</h3>
      <h3>Email:${gender} </h3>
      <p>Rating: ${rating}</p>
      <p id="priice">Price: ₹${price}</p>
      <p id="experience">Experience: ${experience}</p>
      <p id="skills">Skills: ${skills.join(" ")}</p>
      <p id="skills">Languages: ${languages.join(" ")}</p>
      <button id="BookAppintment">Book Appintment</button>
   
      </div>`
    

      // document.getElementById("BookAppintment").addEventListener("click",()=>{
      //   // console.log("hello")
      //   window.location.href("../html/Appointment.html")
        
      // })
   
      let admin= document.getElementById("BookAppintment")
      admin.addEventListener("click", ()=>{
          self.location="./Appointment.html"
      })
}

// document.getElementById("BookAppintment").addEventListener("click",()=>{
//   window.location.href("../html/Appointment.html")

// })





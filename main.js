
let students = [
  {
    id: 100,
    name: "Nurmuhammad",
    lastName: "Mahmudov",
    mark: 140.5,
    markedDate: new Date("2021-12-05").toISOString()
  },
  {
    id: 101,
    name: "Asadbek",
    lastName: "",
    mark: 146,
    markedDate: new Date("2021-12-06").toISOString()
  },
  {
    id: 102,
    name: "Ahmadjon",
    lastName: "Hasanjanov",
    mark: 75,
    markedDate: new Date("2021-12-01").toISOString()
  },
  {
    id: 103,
    name: "G'anivoy",
    lastName: "Teshayev",
    mark: 40,
    markedDate: new Date("2021-12-05").toISOString()
  },
  {
    id: 104,
    name: "Kamronbek",
    lastName: "Zoirov",
    mark: 150,
    markedDate: new Date("2022-03-29").toISOString(),
  
  }
]



let addStudends = document.querySelector(".add-students")
let formClose = document.querySelector(".form__close")
let headBtn = document.querySelector(".head__btn")
let nextid = 104
headBtn.addEventListener("click", function(){
  addStudends.classList.add("btn--open")

})

formClose.addEventListener("click", function(){
  addStudends.classList.remove("btn--open")

})

addStudends.addEventListener("click", function(e){
if(e.target == addStudends){
  addStudends.classList.remove("btn--open")
}
})

let elform = document.querySelector(".form")
let elinput = document.querySelector(".form__input")
let elinput2 = document.querySelector(".form__input2")
let elinput3 = document.querySelector(".form__input3")




let eltbody = document.querySelector("tbody")
let elbtns = document.querySelector(".td__btn2");


function add(data){
  eltbody.innerHTML = ""
data.forEach(function(event){

  let  eltr = document.createElement("tr")
  eltr.className = "table__body"

  let eltd  = document.createElement("td")
  eltd.className = "td__id"
  eltd.textContent =  event.id || nextid++;

  let elName = document.createElement("td")
  elName.textContent =  `${event.name} ${event.lastName}`

  let eldate  = document.createElement("td")
  eldate.textContent =  event.markedDate  

  let elMark = document.createElement("td")
  elMark.textContent =  event.mark

  let elStatus = document.createElement("td")
  elStatus.className = "td__style"
  elStatus.textContent = event.mark < 50 ? "Fail" : "pass";
  elStatus.style.color = event.mark < 50 ? "#FF3D00" : "#309E3A";
  let eltdSvg = document.createElement("td")
  let svgBtn = document.createElement("button")
  svgBtn.className = "td__btn"
  svgBtn.id = event.id

  let elimg = document.createElement("img")
  elimg.src = "img/edit.svg"
  elimg.id = event.id
  elimg.className = "td__img1"

  let eltdSvg2 = document.createElement("td")
  let svgBtn2 = document.createElement("button")
  svgBtn2.className = "td__btn2"


  let elimg2 = document.createElement("img")
  elimg2.src = "img/trash.svg"
  elimg2.className = "td__img"
  elimg2.id = event.id
  
  eltr.appendChild(eltd)
  eltr.appendChild(elName)
  eltr.appendChild(eldate)
  eltr.appendChild(elMark)
  eltr.appendChild(elStatus)
  eltr.appendChild(eltdSvg)
  eltdSvg.appendChild(svgBtn)
  svgBtn.appendChild(elimg)
  eltr.appendChild(eltdSvg2)
  eltdSvg2.appendChild(svgBtn2)
  svgBtn2.appendChild(elimg2)
  eltbody.appendChild(eltr)
})
}


elform.addEventListener("submit", function (e) {
  e.preventDefault(); 
  let nameValue = elinput.value;
  let lastNameValue = elinput2.value;
  let mark = elinput3.value;

  let id = nextid++
  let currentDate = new Date();
  let formattedDate = currentDate.toISOString();

  let student = {
    id: id,
    name: nameValue,
    lastName: lastNameValue,
    mark: +mark,
    markedDate: formattedDate,
  };

   
  students.push(student);

  add([student]);
});

add([]); 



let elbottom = document.querySelector(".td__btn");

eltbody.addEventListener("click", function (e) {

  if(e.target.closest(".td__img") ){
    
    students = students.filter(event => event.id !== Number(e.target.id))
    add(students);
 
    console.log(e.target.id)
  }else if (e.target.closest(".td__img1")){
    addStudends2.classList.add("btn--open")

    
    console.log(e.target.id)
  }


})

add(students)


let addStudends2 = document.querySelector(".add-students2");
let formClose2 = document.querySelector(".form__close2")


formClose2.addEventListener("click", function(){
addStudends2.classList.remove("btn--open")

})

addStudends2.addEventListener("click", function(e){
if(e.target == addStudends2){
  addStudends2.classList.remove("btn--open")
}
})


let elform2 = document.querySelector(".form2");

let elinp5 = document.querySelector(".form__input5");
let elinp6 = document.querySelector(".form__input6");
let elinp7 = document.querySelector(".form__input7");

elform2.addEventListener("submit", function (e) {
  e.preventDefault();
  students.forEach((student) => {
    student.name = elinp5.value;
    student.lastName = elinp6.value;
    student.mark = elinp7.value;

  });

  console.log(students);

  add(students);
});


let eldark = document.querySelector(".dark")
let darkInp = document.querySelector(".dark__inp")
let darkInput = document.querySelector(".dark__input")
let darkInput2 = document.querySelector(".dark__input2")


eldark.addEventListener("submit", function (e) {
  e.preventDefault();
  let rr = [];


  let filteredStudents = students.filter(function (student) {
    let nameMatches = student.name.toLowerCase().trim().includes(darkInp.value.toLowerCase().trim());
    let lastNameMatches = student.lastName.toLowerCase().trim().includes(darkInp.value.toLowerCase().trim());
    let markMatches = student.mark.toString().includes(darkInput.value.trim());

    return nameMatches || lastNameMatches || markMatches;
  });

  



  rr.push(...filteredStudents);


  add(rr);
});
//Start Add JSON data to localStorage code section
//Enter JSON file link
const jsonLink = '/application/doctors-1.json';

const btnJSON = document.getElementById("jsonToLocal");
btnJSON.addEventListener("click", jsonToLocal.bind(jsonLink), false);

function jsonToLocal() {
  //console.log(this);
  const ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', this);
  //1
  ourRequest.onload = function() {
    //4
    //Jei good connection vykdom koda
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      //console.log(ourRequest.responseText);
      localStorage.setItem('doctorsData', ourRequest.responseText);
      //const ourData = JSON.parse(ourRequest.responseText);
      //console.log(ourData, ourRequest.responseText);

      seuccess();
 
    } else {
      console.log(" We connected to the server, but it returned an error");
    }

  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  }

  //2
  ourRequest.send();
  //3
}

function seuccess() {
  btnJSON.style.background = "#5cb85c";
  const pTextas = document.createTextNode('Duomenys išsaugoti į localStorage');
  const pElement = document.createElement('p');
  pElement.className = "success";
  pElement.appendChild(pTextas)
  btnJSON.after(pElement);


//alert(doctorsData);
}
//END Add JSON data to localStorage code section



//START Add customer code section



const contentMas = document.getElementById("contentMas"),
  btnServ = document.getElementById("btnAdd"),
  doctorsData = JSON.parse(localStorage.getItem('doctorsData'));

btnServ.addEventListener("click", addCust, false);

if (doctorsData !== null) renderHTMLDoc(doctorsData);


function renderHTMLDoc(data) {
console.log(data);
  let htmlString2 = ``;
  htmlString2 += `<select id="mySelect" onchange="getSelected()">`;

  for (i = 0; i < data.length; i++) {
    htmlString2 += `<option value="${data[i].name}">${data[i].name}</option>`;
  }

  htmlString2 += `</select>`;
  contentMas.insertAdjacentHTML('afterbegin', htmlString2);
  getSelected();

}


function getSelected() {

  let selected = document.getElementById("mySelect").value;
  document.getElementById("specialist").innerHTML = "Pasirinktas gyditojas: " + selected;
  displayArray(selected);

}


function displayArray(selected) {

  const masyvas = findArray(selected);
  let strings = createParagraphs(masyvas);
  contentMas2.insertAdjacentHTML('afterbegin', strings);

}

function addCust() {

  let selected = document.getElementById("mySelect").value;
  const masyvas = findArray(selected);
  let strings = createParagraphs(masyvas);

  if (masyvas === undefined || masyvas.length == 0) {
    masyvas.push(1);
  } else {
    const lastVal = masyvas[masyvas.length - 1];
    const newLast = lastVal + 1;
    masyvas.push(newLast);
  }

  contentMas2.insertAdjacentHTML('afterbegin', strings);
  localStorage.setItem('doctorsData', JSON.stringify(doctorsData));
  getSelected();

}

function findArray(selected) {

  const obj = doctorsData.find(obj => obj.name == selected);
  contentMas2.innerHTML = "";
  const masyvas = obj.tickets;

  return masyvas;

}

function createParagraphs(masyvas) {
  let strings = ``;

  for (var i = 0, len = masyvas.length; i < len; i++) {
    strings += `<p> ${masyvas[i]} </p>`;
  }

  return strings;
}
//END Add customer code section

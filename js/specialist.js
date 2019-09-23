const contentMas = document.getElementById("contentMas"),
  btnServ = document.getElementById("btnServed"),
  doctorsData = JSON.parse(localStorage.getItem('doctorsData'));

btnServ.addEventListener("click", served, false);

if (doctorsData !== null) renderHTMLDoc(doctorsData);

function renderHTMLDoc(data) {

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

function served() {

  let selected = document.getElementById("mySelect").value;
  const masyvas = findArray(selected);
  let strings = createParagraphs(masyvas);

  masyvas.shift();
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

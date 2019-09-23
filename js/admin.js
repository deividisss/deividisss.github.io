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
      //renderHTMLDoc(ourData);
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
}
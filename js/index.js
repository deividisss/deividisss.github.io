

renderHTMLDoc(doctorsData);

function renderHTMLDoc(data) {
    let htmlString = "";
  
    for (i = 0; i < data.length; i++) {
  
      htmlString += "<div class='docDiv'><h4>" + data[i].name + " is a " + data[i].specialty + "</h4>";
      htmlString += "<ul>";
      for (ii = 0; ii < data[i].tickets.length; ii++) {
        htmlString += "<li>" + data[i].tickets[ii] + "</li>";
      }
      htmlString += "</ul><hr></div>";
  
    }
  
    contentMas.insertAdjacentHTML('afterbegin', htmlString);
  }
  
  
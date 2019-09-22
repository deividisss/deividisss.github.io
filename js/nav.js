//Navigation
(function() {

    // All items we'd like to add
    var navItems = [{
        href: '/index.html',
        text: 'Švieslentė'
      },
      {
        href: '/specialist.html',
        text: 'Specialisto puslapis'
      },
      {
        href: '/admin.html',
        text: 'Administracija'
      }
    ];
  
    // A few variables for use later
    var navList = document.createElement("ul"),
      navItem, navLink;
  
  
    // Cycle over each nav item
    for (var i = 0; i < navItems.length; i++) {
      // Create a fresh list item, and anchor
      navItem = document.createElement("li");
      navLink = document.createElement("a");
  
      // Set properties on anchor
      navLink.href = navItems[i].href;
      navLink.innerHTML = navItems[i].text;
  
      // Add anchor to list item, and list item to list
      navItem.appendChild(navLink);
      navList.appendChild(navItem);
    }
  
    // Set first list item as current
    //navList.children[0].className = "current";
  
    // Add list to body (or anywhere else)
  
    document.querySelector("nav").appendChild(navList);;
  
  }());
  
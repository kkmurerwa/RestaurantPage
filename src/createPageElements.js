// Create function that generates page elements dynamically
export function createElements(){
    const tabContainer = document.createElement("div")
    tabContainer.className = "tab-bar"

    //create tab buttons
    const homeButton = document.createElement("button")
    homeButton.classList.add("tab-item", "active")
    homeButton.innerHTML = "<i class='fa fa-home'> Home"

    //Add button action listener
    homeButton.addEventListener('click', function(){
        // Stuff
        populateContentDiv(0)
        tabContainer.childNodes.forEach(elem => elem.classList.remove("active"))
        homeButton.classList.add("active")
    })


    const menuButton = document.createElement("button")
    menuButton.classList.add("tab-item")
    menuButton.innerHTML = "<i class='fa fa-bars'> Menu"

    // Add button action listener
    menuButton.addEventListener('click', function(){
        // Stuff
        populateContentDiv(1)
        tabContainer.childNodes.forEach(elem => elem.classList.remove("active"))
        menuButton.classList.add("active")
    })

    
    const contactButton = document.createElement("button")
    contactButton.classList.add("tab-item")
    contactButton.innerHTML = "<i class='fa fa-address-card'> Contact"

    //Add button action listener
    contactButton.addEventListener('click', function(){
        // Stuff
        populateContentDiv(2)
        tabContainer.childNodes.forEach(elem => elem.classList.remove("active"))
        contactButton.classList.add("active")
    })

    tabContainer.append(homeButton, menuButton, contactButton)

    document.body.appendChild(tabContainer)

    populateContentDiv(0)
}

const contentDiv = document.createElement("div")
contentDiv.className = "content"

function populateContentDiv(id){
    if (id === 0){
        contentDiv.innerHTML = "Home stuff will come here"
    } else if (id === 1) {
        let menu = menuElements()
    
        // contentDiv.append(menu.menuContainer)
        contentDiv.innerHTML = "Menu items will come here"
    } else {
        contentDiv.innerHTML = "Contact stuff will come here"
    }

    document.body.appendChild(contentDiv)
}

const menuElements = () => {
    const menuContainer = document.createElement("div")
    menuContainer.innerHTML = "Hello man"

    return {menuContainer}
}
document.getElementById("list").addEventListener("click", function (event) {
    if (event.target.classList.contains("close")) {
        let div = event.target.parentElement;
        div.style.display = "none";
  
        // Extract the numeric part from the close icon's ID
        let closeId = event.target.id.replace("close", "");
        // Get the corresponding <hr> element by ID
        let hrElement = document.getElementById("hr" + closeId);
        // Hide the corresponding <hr> element
        hrElement.style.display = "none";
    }
  });
  
  function addItemFunction() {
    let text = document.getElementById("text").value;
    var list = document.createElement("li");
    var node = document.createTextNode(text);
    list.innerHTML = "<i class='fa fa-close close' style='font-size:30px'></i>";
  
    let element = document.getElementById("list");
  
    if (text === "") {
        alert("You must add an item");
    } else {
        list.appendChild(node);
        element.appendChild(list);
  
        // Apply the "sublist" class to the newly added item
        list.classList.add("sublist");
  
        // Create and append a new <hr> element after the newly added item
        let hr = document.createElement("hr");
        element.appendChild(hr);
        // Assign a unique ID to the <hr> element
        let hrId = "hr" + (element.getElementsByTagName("li").length);
        hr.id = hrId;
  
        // Assign a unique ID to the close icon
        let closeIcon = list.querySelector(".close");
        closeIcon.id = "close" + (element.getElementsByTagName("li").length);
    }
    document.getElementById("text").value = "";
  }
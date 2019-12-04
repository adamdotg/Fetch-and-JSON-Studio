// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            for (let i = 0; i<json.length; i++){
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li id="color">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `;
                if (json[i].active){
                    //document.getElementById("color").style.color = "green";
                    //let activeColor = document.querySelector(".color");
                   // activeColor.style.color = "green";
                    console.log("looking for color class");
                    //console.log("?", activeColor.style.color);
                }
                //if active then active:true = green or something
            }
        });
      //container.innerHTML = 
      console.log("this is a working test", response);
    });
  });
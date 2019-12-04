// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            //sort by hoursInSpace: declare empty array > 
            for (let i = 0; i<json.length; i++){
                if (json[i].active){
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li id="color" style="color: green;">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                    `;
                } else {
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li id="color" style="color: black;">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                    `;
                }
                //document.getElementById("color").style.color = "green";
                //let activeColor = document.querySelector(".color");
                // activeColor.style.color = "green";
                //console.log("looking for color class", json[i].firstName);
            }
        });
      //container.innerHTML = 
      console.log("this is a working test", response);
    });
  });
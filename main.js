
window.onload = function () {
  let input = document.querySelector("#city");
  let submit = document.querySelector("#getTemp");
  let strainInp = document.querySelector("#strainInp")
  let strain = document.querySelector("#strain")
  let testChild = document.querySelector(".see")
  let placeHolder = [];
  let flavorInp = document.querySelector("#flavorInp")
  let flavor = document.querySelector("#flavor")

  // define variables for input and submit

  submit.addEventListener("click", async function (evt) {
    evt.preventDefault();
    let inputVal = input.value;
    console.log(inputVal);
    let nameIn = await axios.get(`https://cors-anywhere.herokuapp.com/strainapi.evanbusse.com/jIF7gVD/strains/search/name/${inputVal}`
      
    
      
    );
    let gif = await axios.get("http://api.giphy.com/v1/gifs/search?q=weed&api_key=VC8tFxRJWVzQj5LrvDTYc0YsEgUm4EhH&limit=30");
    console.log(gif)
    // let ran = Math.floor(Math.random()*10)
    // let giffy = gif.data.data
    // let gifs = giffy[ran].embed_url
    //console.log(gifs)
    let strain = nameIn;
    console.log(strain);
    let strainS = strain.data
    
    for (let i = 0; i < 10; i++) {
      let ss = Math.floor(Math.random() * 10)
      if (strainS.length < 5) {
        ss = i;
        
      } 
      let strainDes = strainS[ss].desc
      let strainName = strainS[ss].name
      let strainRace = strainS[ss].race
      let ran = Math.floor(Math.random()*30)
     let giffy = gif.data.data
      let gifs = giffy[ran].embed_url
      console.log(strainDes)
      let tester = document.createElement("h1")
      tester.className.add = "see"
      tester.innerHTML = `<embed src="${gifs}"> <br> <span class ="coloo"> ${strainName} </span> is a <span class="coloo2"> ${strainRace} </span>: ${strainDes}`
      testChild.appendChild(tester)

    }
    

    
  })




  strain.addEventListener("click", async function (evt) {
    evt.preventDefault();
    let strainVal = strainInp.value;
    console.log(strainVal)
    let inOrSav = await axios.get(`https://cors-anywhere.herokuapp.com/strainapi.evanbusse.com/jIF7gVD/strains/search/race/${strainVal}`
    );
    console.log(inOrSav);
    let intro = document.createElement("h2")
    if (strainVal == "sativa") {
      intro.innerHTML = `Looking for an active high eh? Here are some strains that might be good for you`
    } else if (strainVal == "indica") {
      intro.innerHTML = "Time to melt into the couch eh? Here are some options for ya..."
    } else if  (strainVal == "hybrid"){
        intro.innerHTML = "Why not have the best of both worlds?"
    } else {
      intro.innerHTML = "You only got three choices bud, sativa, indica or hybrid ; )"
    }
    testChild.appendChild(intro)
    let inOrSavResult = inOrSav.data
    for (let i = 0; i < 10; i++) {
      let ss = Math.floor(Math.random() * 500)
      //let strainDes1 = inOrSavResult[ss].desc
      let strainName1 = inOrSavResult[ss].name
      let strainRace1 = inOrSavResult[ss].race

      let indy500 = document.createElement("h1")
      
      indy500.className.add = "see"
      indy500.innerHTML = ` ${strainName1}`
      testChild.appendChild(indy500)

     
    }
    let curious = document.createElement("h2")
    let curious2 = document.createElement("h2")
    
      curious.innerHTML = "Curious about a specific strain listed heres effects/flavors/medicial use? Try going to the top and searching the strain name!"
      testChild.appendChild(curious)
    

  })

  // so this "race" search works but does not log descriptions or effects
  flavor.addEventListener("click", async function (evt) {
    evt.preventDefault();
    let flavorVal = flavorInp.value;
    console.log(flavorVal)
    let flava = await axios.get(`https://cors-anywhere.herokuapp.com/strainapi.evanbusse.com/jIF7gVD/strains/search/flavor/${flavorVal}`)
    console.log(flava)
    let gif = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${flavorVal}&api_key=VC8tFxRJWVzQj5LrvDTYc0YsEgUm4EhH&limit=10`);
    console.log(gif)
    let flavors = flava.data
    let intro = document.createElement("h5");
    intro.innerHTML = `Yummmmmmm! Here are some strains that contain an essense of <span class="coloo2"> ${flavorVal} </span> . . .`
    testChild.appendChild(intro);
    for (let i = 0; i < 10; i++) {
      let flavName = flavors[i].name
      let flavRace = flavors[i].race
      //let ran = Math.floor(Math.random()*10)
      let giffy = gif.data.data
      let gifs = giffy[i].embed_url
      let flavorApp = document.createElement("h3")
      flavorApp.className.add = "food"
      flavorApp.innerHTML = `<embed src="${gifs}"> <br> <span class="coloo"> ${flavName} </span> which is a <span class="coloo2"> ${flavRace} </span> strain`
      testChild.appendChild(flavorApp)


    }
    
    
  })


}

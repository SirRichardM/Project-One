window.onload = function() {
  let input = document.querySelector("#city");
  let submit = document.querySelector("#getTemp");
  let strainInp = document.querySelector("#strainInp");
  let strain = document.querySelector("#strain");
  let testChild = document.querySelector(".see");
  let placeHolder = [];
  let flavorInp = document.querySelector("#flavorInp");
  let flavor = document.querySelector("#flavor");
  let effectInp = document.querySelector("#effectInp");
  let effect = document.querySelector("#effect");

  // define variables for input and submit

  submit.addEventListener("click", async function(evt) {
    evt.preventDefault();
    let inputVal = input.value;
    console.log(inputVal);
    let nameIn = await axios.get(
      `https://cors-anywhere.herokuapp.com/strainapi.evanbusse.com/jIF7gVD/strains/search/name/${inputVal}`
    );
    let gif = await axios.get(
      "http://api.giphy.com/v1/gifs/search?q=weed&api_key=VC8tFxRJWVzQj5LrvDTYc0YsEgUm4EhH&limit=30"
    );
    console.log(gif);
    // let ran = Math.floor(Math.random()*10)
    // let giffy = gif.data.data
    // let gifs = giffy[ran].embed_url
    //console.log(gifs)
    let strain = nameIn;
    console.log(strain);
    let strainS = strain.data;
    if (strainS.length == 0) {
      let bs = document.createElement("h1");
      bs.innerHTML = `Sorry bud, no results for <span class="coloo3"> ${inputVal} </span> ! Maybe try another?`
      testChild.appendChild(bs)
    }
    for (let i = 0; i < 10; i++) {
      let ss = Math.floor(Math.random() * 10);
      if (strainS.length < 5) {
        ss = i;
      }
      let strainDes = strainS[ss].desc;
      let strainName = strainS[ss].name;
      let strainRace = strainS[ss].race;
      let ran = Math.floor(Math.random() * 30);
      let giffy = gif.data.data;
      let gifs = giffy[ran].embed_url;
      console.log(strainDes);
      let tester = document.createElement("h1");
      tester.className.add = "see";
      tester.innerHTML = `<embed src="${gifs}"> <br> <span class ="coloo"> ${strainName} </span> is a <span class="coloo2"> ${strainRace} </span>: ${strainDes}`;
      testChild.appendChild(tester);
    }
  });

  strain.addEventListener("click", async function(evt) {
    evt.preventDefault();
    let strainVal = strainInp.value;
    console.log(strainVal);
    let inOrSav = await axios.get(
      `https://cors-anywhere.herokuapp.com/strainapi.evanbusse.com/jIF7gVD/strains/search/race/${strainVal}`
    );
    console.log(inOrSav);
    let gif = await axios.get(
      "http://api.giphy.com/v1/gifs/search?q=weed&api_key=VC8tFxRJWVzQj5LrvDTYc0YsEgUm4EhH&limit=30"
    );
    let intro = document.createElement("h6");
    if (strainVal == "sativa") {
      intro.innerHTML = `Looking for an energetic high eh? Maybe get a bit creative? Here are some options for ya..`;
    } else if (strainVal == "indica") {
      intro.innerHTML =
        "Time to melt into the couch eh? Here are some options for ya...";
    } else if (strainVal == "hybrid") {
      intro.innerHTML = "Why not have the best of both worlds?";
    } else {
      intro.innerHTML =
        "You only got three choices bud, sativa, indica or hybrid";
    }
    testChild.appendChild(intro);
    let inOrSavResult = inOrSav.data;
    for (let i = 0; i < 10; i++) {
      let ss = Math.floor(Math.random() * 1000);
      if (inOrSavResult.length < 420) {
        ss = Math.floor(Math.random() * 415)
      } else if (inOrSavResult.length < 660) {
        ss = Math.floor(Math.random() * 650)
      }
      //let strainDes1 = inOrSavResult[ss].desc
      let strainName1 = inOrSavResult[ss].name;
      let strainRace1 = inOrSavResult[ss].race;
      let giffy = gif.data.data;
      let gifs = giffy[i].embed_url;

      let indy500 = document.createElement("h4");

      indy500.className.add = "see2";
      indy500.className.add = "see";
      indy500.innerHTML = ` <embed src=${gifs}> <br> ${strainName1} `;
      testChild.appendChild(indy500);
    }
    let curious = document.createElement("h2");
    let curious2 = document.createElement("h2");

    curious.innerHTML =
      "Curious about a specific strain listed heres effects/flavors/history? Try going to the top and searching 'Strain Name'";
    testChild.appendChild(curious);
  });

  // so this "race" search works but does not log descriptions or effects
  flavor.addEventListener("click", async function(evt) {
    evt.preventDefault();
    let flavorVal = flavorInp.value;
    console.log(flavorVal);
    let flava = await axios.get(
      `https://cors-anywhere.herokuapp.com/strainapi.evanbusse.com/jIF7gVD/strains/search/flavor/${flavorVal}`
    );
    console.log(flava);
    let gif = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${flavorVal}&api_key=VC8tFxRJWVzQj5LrvDTYc0YsEgUm4EhH&limit=10`
    );
    console.log(gif);
    
    let flavors = flava.data;
    if (flavors.length == 0) {
      let bsflav = document.createElement("h5")
      bsflav.innerHTML = `No flavor profiles for ${flavorVal}! Try cheese, apple, coffee, woody, earthy, berry, blueberry, pine, minty, citrus, tropical, lemon, lime, honey, skunk, nutty, sweet, strawberry, grape or butter! `
      testChild.appendChild(bsflav)
    } else {
      let intro = document.createElement("h5");
      intro.className.add = "spin"
      intro.innerHTML = `Yummmmmmm! Here are some strains that contain a <span class="coloo2"> ${flavorVal} </span> taste. . . <br>`;
      testChild.appendChild(intro);
    }
    for (let i = 0; i < 10; i++) {
      let flavName = flavors[i].name;
      let flavRace = flavors[i].race;
      //let ran = Math.floor(Math.random()*10)
      let giffy = gif.data.data;
      let gifs = giffy[i].embed_url;
      let flavorApp = document.createElement("h3");
      if (i % 2 == 0) {
        flavorApp.className.add = "food2";
      }
      flavorApp.className.add = "food";
      flavorApp.innerHTML = `<embed src="${gifs}"> <br> <span class="coloo"> ${flavName} </span> which is a <span class="coloo2"> ${flavRace} </span> strain`;
      testChild.appendChild(flavorApp);
    }
    let ender = document.createElement("h2")
    ender.innerHTML = "Want some more information on one of the strains listed? Try searching it under 'Strain Name' !"
    testChild.appendChild(ender)
  });

  effect.addEventListener("click", async function(evt) {
    evt.preventDefault();
    let effectVal = effectInp.value;
    console.log(effectVal);
    let effects = await axios.get(
      `https://cors-anywhere.herokuapp.com/strainapi.evanbusse.com/jIF7gVD/strains/search/effect/${effectVal}`
    );
    console.log(effects);
    let effekt = effects.data;
    let gif = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${effectVal}&api_key=VC8tFxRJWVzQj5LrvDTYc0YsEgUm4EhH&limit=10`
    );
    console.log(gif);
    // let intro = document.createElement("h5");
    // intro.innerHTML = "Results";
    if (effekt.length == 0) {
      let nonsense = document.createElement("h6")
      
      nonsense.innerHTML = ` Sorry bud, no results for <span class="coloo"> ${effectVal}. </span> The best options for effects would be <span class="coloo3"> relaxed, happy, euphoric, creative, hungry, energetic, giggly, uplifted, focused and aroused.</span> If you are looking for medical use some options are <span class="coloo3"> depression, fatigue, pain, insomnia, nausea, headaches, inflammation and muscle spams </span>`
      testChild.appendChild(nonsense)
    }   // testChild.appendChild(intro);
    for (let i = 0; i < 10; i++) {
      let numero = Math.floor(Math.random() * 1200);
      if (effekt.length < 1000 || effekt.length < 500) {
        numero = i;
      }
      let effRes = effekt[numero].name;
      let effRace = effekt[numero].race;
      let effEFF = effekt[numero].effect;
      let giffy = gif.data.data;
      let gifs = giffy[i].embed_url;
      let effectApp = document.createElement("h6");
      let workpls = "workpls"
      effectApp.className.add = workpls
      if (
        effectVal == "fatigue" ||
        effectVal == "depression" ||
        effectVal == "pain" ||
        effectVal == "stress" ||
        effectVal == "insomnia" ||
        effectVal == "nausea" ||
        effectVal == "headaches" ||
        effectVal == "muscle spasms" ||
        effectVal == "inflammation"
      ) {
        effectApp.innerHTML = `<embed src="${gifs}"> <br> <span class="coloo"> ${effRes} </span> is a <span class="coloo2"> ${effRace} </span> and should help you clear that <span class="coloo3"> ${effEFF} </span> right up!`;
      } else if (
        effectVal == "happy" ||
        effectVal == "euphoric" ||
        effectVal == "relaxed" ||
        effectVal == "creative" ||
        effectVal == "hungry" ||
        effectVal == "aroused" ||
        effectVal == "giggly" ||
        effectVal == "energetic" ||
        effectVal == "focused" ||
        effectVal == "uplifted"
      ) {
        effectApp.innerHTML = `<embed src="${gifs}"> <br> <span class="coloo"> ${effRes} </span> is a <span class="coloo2"> ${effRace} </span> and should help you get into a nice <span class="coloo3"> ${effEFF} </span> mood`;
      } else {
        effectApp.innerHTML = `Sorry none of those fit the search parameter, if you are looking for medical use some options are depression, fatigue, pain, insomnia, nausea, headaches, inflammation and muscle spams` 
      }
      
        testChild.appendChild(effectApp);
    }
    let curious = document.createElement("h2")
    curious.innerHTML = "Want some more information on one of the strains listed? Try searching it under 'Strain Name' at the top of the page !"
    testChild.appendChild(curious)
  });
};

function myButton() {
  location.reload();
}
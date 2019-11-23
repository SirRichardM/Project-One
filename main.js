
window.onload = function () {
  let input = document.querySelector("#city");
  let submit = document.querySelector("#getTemp");
  let strainInp = document.querySelector("#strainInp")
  let strain = document.querySelector("#strain")
  let testChild = document.querySelector(".see")

  // define variables for input and submit

  submit.addEventListener("click", async function (evt) {
    evt.preventDefault();
    let inputVal = input.value;
    console.log(inputVal);
    let nameIn = await axios.get(`https://cors-anywhere.herokuapp.com/strainapi.evanbusse.com/jIF7gVD/strains/search/name/${inputVal}`
      
      
      
    );
    let strain = nameIn;
    console.log(strain);
    let strainDes = strain.data[3].desc
    console.log(strainDes)
    let tester = document.createElement("h1")
    tester.className.add = "see"
    tester.innerHTML = strainDes
    testChild.appendChild(tester)

    
  })




  strain.addEventListener("click", async function (evt) {
    evt.preventDefault();
    let strainVal = strainInp.value;
    console.log(strainVal)
    let inOrSav = await axios.get(`https://cors-anywhere.herokuapp.com/strainapi.evanbusse.com/jIF7gVD/strains/search/race/${strainVal}`
    );
    console.log(inOrSav);
  })
}

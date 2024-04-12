
function getpurrfacts() {
  const myHeaders = new Headers();
  myHeaders.append("Cookie", "connect.sid=s%3AzI_rBiMyKTJDfmZsBwi2-UJDAjIskOa8.5JjI3q2N1A1BFwvAGE6HWlfer3FmGNDcOgb5XdBqyhI");

  const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://cat-fact.herokuapp.com/facts", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    //console.log(result)
    showfacts(result)
  })
  .catch((error) => console.error(error));
};


function showfacts(result){
  
    const factArea = document.getElementById("fact-container");
    factArea.innerHTML = ""; 
  
    const randomIndex = Math.floor(Math.random() * result.length);
    const randomFact = result[randomIndex];
  
    
    const factElement = document.createElement('p');
    factElement.textContent = randomFact.text;
  
    
    factArea.appendChild(factElement);
  
  
}


document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById("generate");
  generateButton.addEventListener('click', function() {
      getpurrfacts();
  });
});







 












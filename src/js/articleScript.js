

  
    // console.log("loads the script");

    // const messageArray = ['this','is','a','long','message'];
    
    // // const articleDiv = document.createElement("div")
    
    
    // const mainDiv = document.querySelector(".main");
    
    // let article1 = document.createElement("article");
    // let article2 = document.createElement("article");
    // let article3 = document.createElement("article");
    // let article4 = document.createElement("article");
    // let article5 = document.createElement("article");
    
    // let para1 = document.createElement("p");
    // para1.text = messageArray[0];
    // let para2 = document.createElement("p");
    // para2.text = messageArray[1];
    // let para3 = document.createElement("p");
    // para3.text = messageArray[2];
    // let para4 = document.createElement("p");
    // para4.text = messageArray[3];
    // let para5 = document.createElement("p");
    // para5.text = messageArray[4];
    
    // article1.appendChild(para1);
    // article1.className = 'message';
    // article2.appendChild(para2)
    // article2.className = 'message';
    // article3.appendChild(para3)
    // article3.className = 'message';
    // article4.appendChild(para4)
    // article4.className = 'message';
    // article5.appendChild(para5)
    // article5.className = 'message';
    
    // mainDiv.append(article1, article2, article3,article4,article5);





    window.addEventListener("click", async () => {
  // This block will be executed once the page is loaded and ready

  console.log("goes in the DOMContentLoaded");

  

  document.body.addEventListener("click", async () => {
    let mainDiv = document.querySelector(".main");

    let pokemonArray= ["this","is","some","random","text"];

    pokemonArray.forEach((element) => {
      let article = document.createElement("article");
      article.appendChild(document.createTextNode(`${element}`));
      article.setAttribute("class", "message"); // added line
      mainDiv.appendChild(article);
    });
  });
  
 
  

});





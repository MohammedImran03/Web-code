//Title in HTML H2 element
let title=document.createElement("h1");
document.body.append(title);
title.setAttribute("class","title");
//TITLE DESIGN using SetTimeout
setTimeout(()=>{
    title.innerText="P";
    setTimeout(()=>{
        title.innerText="O";
        setTimeout(()=>{
            title.innerText="K";
            setTimeout(()=>{
                title.innerText="E";
                setTimeout(()=>{
                    title.innerText="M";
                    setTimeout(()=>{
                        title.innerText="O";
                        setTimeout(()=>{
                            title.innerText="N";
                            setTimeout(()=>{
                                title.innerHTML="POKEMON &#128056;";
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

//Html elements for layout presentation
let divlist=document.createElement("div");
document.body.append(divlist);
divlist.setAttribute("id","pokemonlist");
divlist.setAttribute("class","pokemonlist");

//End Credit Page
let imagediv=document.createElement("div");
document.body.append(imagediv);
imagediv.setAttribute("class","endcredit");

//Buttons For Pagination
let divbuttons=document.createElement("div");
document.body.append(divbuttons);
divbuttons.setAttribute("id","buttons");
divbuttons.setAttribute("class","buttons");

//variables to deplo in UI
const pokemonlist =document.getElementById("pokemonlist");
const buttons=document.getElementById("buttons");
let buttonprevious;
let buttonNext;
let templateHtml;
let APIurl=`https://pokeapi.co/api/v2/pokemon/`;

//Applying constrains

// getting response through API by Asyn and await

const getresponse=async(url)=>{
    try {
        let response = await fetch(url);
        let results= await response.json();
        console.log(results);
       Pokemondata(results.results);
       
        buttonNext=results.next ?`<button id="NEXTBUTTON" class="btn" data-url=${results.next}>&gt;&gt;</button>` : "";
        buttonprevious=results.previous ?`<button id="PREVIOUSBUTTON" class="btn" data-url=${results.previous}>&lt;&lt;</button>`: "";  
        buttons.innerHTML=buttonprevious+" "+buttonNext;  
        
        }
    catch (err) {
      console.log("Error");
    }
}
//Fetch URL via function
getresponse(APIurl);

//create cards in UI by calling the function
const Pokemondata= async(data)=>{
    pokemonlist.innerHTML= " ";
    try {
         for(let index of data){
            const resp = await fetch(index.url);
            const result = await resp.json();
            console.log(result);
         if(result.id <=60){
            let move1=result.moves[0].move.name;
            let move2=result.moves[1].move.name;
            let move3=result.moves[2].move.name;
            let move4=result.moves[3].move.name;
            let move5=result.moves[4].move.name;
            templateHtml=`<div class="pokemonimg">
            <img src=${result.sprites.other.dream_world.front_default} alt=${result.name}/>
            <p>${result.name.toUpperCase()}</p>
            <p>Weight: ${result.weight}</p>
            <p>Abilities: <ol><li>${result.abilities[0].ability.name}</li><li>${result.abilities[1].ability.name}</li></ol></p>
            <p>Moves:<ol><li>${move1}</li><li>${move2}</li><li>${move3}</li><li>${move4}</li><li>${move5}</li></ol></p>
            </div>`
            pokemonlist.innerHTML+=templateHtml;
         }else if(result.id>60){
            title.innerHTML=`POKEMON &#128056;<br><span class="message">END CREDIT</span>`
            document.getElementById("NEXTBUTTON").style.visibility = 'hidden';
            imagediv.innerHTML=`<img src="https://www.gifcen.com/wp-content/uploads/2022/12/charizard-gif-17.gif"/>`
            setTimeout(()=>{
                location.reload();
            },3000);
            
         }
         }
         
        } catch (err) {
      console.log("Error");
    }
}
//Adding Functions on Buttons
buttons.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn')){
        let value=e.target.dataset.url
        console.log(value);
     getresponse(value);
     
    }
})

//Footer Tab
let footer=document.createElement("footer");
document.body.append(footer);
footer.innerHTML=`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"/>`;


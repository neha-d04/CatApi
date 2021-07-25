let url = "https://cataas.com/api/cats";
let data=[];



let title = document.createElement('h1');
title.innerHTML= "*** CAT KINGDOM ***";

let searchContainer = document.createElement('div');
searchContainer.setAttribute('class','container');

let searchrow = document.createElement('div');
searchrow.setAttribute('class','row');
 
let col = document.createElement('div');
col.setAttribute('class','col-12');

let div = document.createElement('div');





let searchBar = document.createElement('input');
searchBar.setAttribute('type','text');
searchBar.setAttribute('class','form-control');
searchBar.setAttribute('id','searchbar');
searchBar.setAttribute('placeholder','Search for a Cat');



div.append(searchBar);
col.append(div);
searchrow.append(col);
searchContainer.append(searchrow);
document.body.append(title,searchContainer);

 function displayCats(data1){
  document.getElementsByClassName('container').innerHTML="";
  let container = document.createElement('div');
  container.setAttribute('class','container');



    let row = document.createElement('div');
    row.setAttribute('class','row');

   data1.forEach(element => {
      let col = document.createElement('div');
      col.setAttribute('class','col-4 mb-3');

     

      let cardImg = document.createElement('img');
      cardImg.setAttribute('class',' img-thumbnail');
      cardImg.setAttribute('id','popup');
      
      
      
      
      cardImg.setAttribute('src', 'https://cataas.com/cat/' + element.id);
        cardImg.setAttribute('onclick', modal(cardImg.src));
      

     
      col.append(cardImg);
      row.append(col);
  });

  container.append(row);
  document.body.append(container);

}


let search= document.getElementById('searchbar');




async function getJSON(){
    try {
        let resp = await fetch(url);
         data = await resp.json();
        console.log(data);

        displayCats(data);
    } catch (error) {
        console.log(error);
    }
   
}

getJSON();

search.addEventListener('keyup',(e) => {
    const searchstring = e.target.value;
    const filteredCats =  data.filter((cats)=>{
       let flag=0;
       cats.tags.forEach(e=>{
        if(e.includes(searchstring)){
           flag=1; 
        }
       });
       if(flag)
       return (cats);
        
    });
console.log(filteredCats);


document.getElementsByClassName('container').innerHTML="";
displayCats(filteredCats);
});

function modal(src){
    var div1 = document.createElement('div');
    div1.setAttribute('class','modal fade');
    div1.setAttribute('id','examplemodal');
    div1.setAttribute('tabindex','-1');
    div1.setAttribute('role','dialog');
    div1.setAttribute('aria-labelledby','exampleModelLabel');
    div1.setAttribute('aria-hidden','true');

    var div2 = document.createElement('div');
    div2.setAttribute('class','modal-dialog');
    div2.setAttribute('role','document');

    var div3 = document.createElement('div');
    div3.setAttribute('class','modal-content');

    var div4 = document.createElement('div');
    div4.setAttribute('class','modal-header');

    var button= document.createElement('button');
    button.setAttribute('type','button');
    button.setAttribute('class','close');
    button.setAttribute('data-dismiss','modal');
    button.setAttribute('aria-label','Close');

    var span = document.createElement('span');
    span.setAttribute('aria-hidden','true');
    span.innerHTML= "&times;";

    button.append(span);
    div4.append(button);

    var div5 = document.createElement('div');
    div5.setAttribute('class','modal-body');

    var img = document.createElement('img');
    img.setAttribute('src',src.this);

    div5.append(img);
    div3.append(div5);
    div2.append(div3);
    div1.append(div2);
    document.body.append(div1);
    



}



        
      

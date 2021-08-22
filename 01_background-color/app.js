const mycolor =['#5D737E','#E94F37','#88d18a','rgba(125,125,125,0.5)','yellow'];
const btn= document.getElementById('btn');

//add listener

btn.addEventListener('click', ()=> {
  let idxRandom = Math.floor(Math.random()*mycolor.length) //pakai patokan idx rang 0..4
  const body = document.body;
  body.style.backgroundColor = mycolor[idxRandom];
  console.log(idxRandom);

})







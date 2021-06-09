function del (e){
  document.getElementsByTagName("tr")[2].remove();    
}

var clicks = 0;
function counter(){
  clicks += 1;
document.getElementById("btn").innerHTML = `<h1>Click me: ${clicks}</h1>`;
}
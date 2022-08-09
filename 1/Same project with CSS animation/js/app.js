const loadingText = document.querySelector('.loading-text');

let i = 0;

let repeat = setInterval(increase, 30);

function increase(){
  i++;

  loadingText.innerHTML = `${i}%`

  if(i >= 100){
    clearTimeout(repeat)
    
  }
}


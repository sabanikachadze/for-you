const button = document.getElementById("result-button");
const userName = document.getElementById("userName");
const noFace = document.querySelector('.img-one')
const yesFace = document.querySelector('.img-two')


button.addEventListener('click', function(){
  if(userName.value === ''){
    alert('Write Name DOWN!!')
    yesFace.classList.remove("display");
    noFace.classList.remove("display");
  }else if(userName.value !== 'mariam kavtaradze' ){
    yesFace.classList.remove("display");
    noFace.classList.add("display");
  }else if(userName.value === 'mariam kavtaradze' ){
    noFace.classList.remove("display");
    yesFace.classList.add("display");
  }
});
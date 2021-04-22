//************* Target name
const targetName = document.getElementById('target_name');
let array = ['Tanguy  HOSPICE'];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement('span'); 
    targetName.appendChild(letter); 

    letter.classList.add('letter'); 
    letter.style.opacity = '0'; 
    letter.style.animation = 'anim_name 60s ease-in-out forwards';  
    letter.textContent = array[wordIndex][letterIndex]; 

    
    setTimeout(() => {
      letter.remove();
    }, 60000)
}


const loop = () => {
  setTimeout(() => {
    if (wordIndex > array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
     
    } else if (letterIndex < array[wordIndex].length){
      createLetter (); 
      letterIndex++; 
      loop();
    } else{
      letterIndex = 0;
      wordIndex++;
      
      setTimeout(() => {
        loop ();
      }, 4000);
    }

  }, 160); 
}

loop ();
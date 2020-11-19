console.log('%c HI', 'color: firebrick')
const URL = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 


document.addEventListener('DOMContentLoaded', () => {
    handleDogPhotos()
    handleBreedPhotos()
    handleDropDownMenu()
})


const handleDogPhotos = () => {
    fetch(URL,{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((dogObj) => {
        console.log(dogObj.msg)
        let dogUrl = dogObj.message
        addImagesToPage(dogUrl)
      })
    }
  
const handleBreedPhotos = () => {
    fetch(breedUrl,{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((dogObj) => {
        console.log(dogObj.msg)
        let dogUrl = dogObj.message
        addBreedsToPage(dogUrl)
      })
}
  
  const addImagesToPage = (dogUrl) => {
      console.log(dogUrl)
      dogUrl.forEach( (element) => { 
        // create image
        const dogImg = document.createElement('img')
        
        dogImg.style.height = "25%";
        dogImg.style.width = "25%";
        // change the src
        //console.log(element)
        dogImg.src = element
    
        // find the parent
        const dogImgParent = document.querySelector('#dog-image-container')
        // dogImgParent.innerHTML = ''
    
        // ✋🏻
        dogImgParent.appendChild(dogImg)  
      })
  }

const addBreedsToPage = (dogList) => {
    console.log(dogList)
    for (var key in dogList) { 
      // create image
      const dogBreed = document.createElement('li')
      
        dogBreed.addEventListener('click', () => {
            dogBreed.style.color =  'red'
      })

      dogBreed.innerText = key
  
      // find the parent
      const dogBreedParent = document.querySelector('#dog-breeds')

      // ✋🏻
      dogBreedParent.appendChild(dogBreed)  
    }
}

const handleDropDownMenu = () => {
    const dropDown = document.querySelector('#breed-dropdown')
    const dogBreedParent = document.querySelector('#dog-breeds')

    filterBreeds = () => {
        
        console.log("!")

        for (let i = 0; i < dogBreedParent.children.length; i++) {
            // console.log(dropDown.value)
            // dropDown.value => current selected item
            if (dogBreedParent.children[i].innerText.startsWith(dropDown.value)) { 
                console.log(2)
                dogBreedParent.children[i].style.display = "block"
            } else {
                dogBreedParent.children[i].style.display = "none"
                console.log(3)
            }  
        }
        
    }
    dropDown.onchange = filterBreeds    
}
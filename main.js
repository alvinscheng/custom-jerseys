var jerseyConfig = {
  gender: 'male',
  primaryColor: 'white',
  secondaryColor: 'white'
}

var $front = document.querySelector('#front-img')
var $back = document.querySelector('#back-img')
var $genderForm = document.querySelector('#gender')
var $primaryColor = document.querySelector('#jersey-color-primary')
var $secondaryColor = document.querySelector('#jersey-color-secondary')

function changeJersey() {
  $front.src = 'images/' + jerseyConfig.gender + '-' + jerseyConfig.primaryColor + '-' + jerseyConfig.secondaryColor + '-front.jpg'
  $back.src = 'images/' + jerseyConfig.gender + '-' + jerseyConfig.primaryColor + '-' + jerseyConfig.secondaryColor + '-back.jpg'
}

$genderForm.addEventListener('change', function (event) {
  jerseyConfig.gender = event.target.value
  changeJersey()
})

$primaryColor.addEventListener('change', function (event) {
  jerseyConfig.primaryColor = event.target.value
  changeJersey()
})

$secondaryColor.addEventListener('change', function (event) {
  jerseyConfig.secondaryColor = event.target.value
  changeJersey()
})

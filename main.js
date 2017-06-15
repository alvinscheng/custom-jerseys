var jerseyConfig = {
  gender: 'male',
  primaryColor: 'white',
  secondaryColor: 'white',
  name: 'Lastname',
  number: 0
}

var $front = document.querySelector('#front-img')
var $back = document.querySelector('#back-img')
var $genderForm = document.querySelector('#gender')
var $primaryColor = document.querySelector('#jersey-color-primary')
var $secondaryColor = document.querySelector('#jersey-color-secondary')

function changeJersey(config) {
  $front.src = 'images/' + config.gender + '-' + config.primaryColor + '-' + config.secondaryColor + '-front.jpg'
  $back.src = 'images/' + config.gender + '-' + config.primaryColor + '-' + config.secondaryColor + '-back.jpg'
}

$genderForm.addEventListener('change', function (event) {
  jerseyConfig.gender = event.target.value
  changeJersey(jerseyConfig)
})

$primaryColor.addEventListener('change', function (event) {
  jerseyConfig.primaryColor = event.target.value
  changeJersey(jerseyConfig)
})

$secondaryColor.addEventListener('change', function (event) {
  jerseyConfig.secondaryColor = event.target.value
  changeJersey(jerseyConfig)
})

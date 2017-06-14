var $front = document.querySelector('#front-img')
var $back = document.querySelector('#back-img')
var $genderForm = document.querySelector('#gender')
var $primaryColor = document.querySelector('#jersey-color-primary')
var $secondaryColor = document.querySelector('#jersey-color-secondary')
var primaryColor = 'white'
var secondaryColor = 'white'
var gender = 'male'

$genderForm.addEventListener('change', function (event) {
  gender = event.target.value
  $front.src = 'images/' + gender + '-' + primaryColor + '-' + secondaryColor + '-front.jpg'
  $back.src = 'images/' + gender + '-' + primaryColor + '-' + secondaryColor + '-back.jpg'
})

$primaryColor.addEventListener('change', function (event) {
  primaryColor = event.target.value
  $front.src = 'images/' + gender + '-' + primaryColor + '-' + secondaryColor + '-front.jpg'
  $back.src = 'images/' + gender + '-' + primaryColor + '-' + secondaryColor + '-back.jpg'
})

$secondaryColor.addEventListener('change', function (event) {
  secondaryColor = event.target.value
  $front.src = 'images/' + gender + '-' + primaryColor + '-' + secondaryColor + '-front.jpg'
  $back.src = 'images/' + gender + '-' + primaryColor + '-' + secondaryColor + '-back.jpg'
})

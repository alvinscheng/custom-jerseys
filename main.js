var $front = document.querySelector('#front-img')
var $back = document.querySelector('#back-img')
var $optionsForm = document.querySelector('#options-form')
var $primaryColor = document.querySelector('#jersey-color-primary')
var $secondaryColor = document.querySelector('#jersey-color-secondary')
var primaryColor = 'white'
var secondaryColor = 'white'

$optionsForm.addEventListener('submit', function (event) {
  event.preventDefault()
  var $gender = document.querySelector('input[name="gender"]:checked')
  $front.src = 'images/' + $gender.value + '-white-white-front.jpg'
  $back.src = 'images/' + $gender.value + '-white-white-back.jpg'
})

$primaryColor.addEventListener('change', function (event) {
  primaryColor = event.target.value
  $front.src = 'images/male-' + primaryColor + '-' + secondaryColor + '-front.jpg'
  $back.src = 'images/male-' + primaryColor + '-' + secondaryColor + '-back.jpg'
})

$secondaryColor.addEventListener('change', function (event) {
  secondaryColor = event.target.value
  $front.src = 'images/male-' + primaryColor + '-' + secondaryColor + '-front.jpg'
  $back.src = 'images/male-' + primaryColor + '-' + secondaryColor + '-back.jpg'
})

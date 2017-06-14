var $front = document.querySelector('#front-img')
var $back = document.querySelector('#back-img')
var $optionsForm = document.querySelector('#options-form')

$optionsForm.addEventListener('submit', function (event) {
  event.preventDefault()
  var $gender = document.querySelector('input[name="gender"]:checked')
  $front.src = 'images/' + $gender.value + '-white-white-front.jpg'
  $back.src = 'images/' + $gender.value + '-white-white-back.jpg'
})

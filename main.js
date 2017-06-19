var jerseyConfig = {
  gender: 'male',
  size: null,
  primaryColor: 'white',
  secondaryColor: 'white',
  name: 'Lastname',
  number: 0,
  quantity: 1
}

var cart = []
var $front = document.querySelector('#front-img')
var $back = document.querySelector('#back-img')
var $jerseyNumber = document.querySelector('#jersey-number')
var $jerseyName = document.querySelector('#jersey-name')
var $customizeForm = document.querySelector('#customize-form')
var $genderForm = document.querySelector('#gender')
var $jerseySize = document.querySelector('#jersey-size')
var $primaryColor = document.querySelector('#jersey-color-primary')
var $secondaryColor = document.querySelector('#jersey-color-secondary')
var $quantity = document.querySelector('#quantity')
var $cartButton = document.querySelector('#cart-btn')
var $cartCounter = document.querySelector('#cart-quant')
var $cartMenu = document.querySelector('#cart-menu')

function changeJersey(config) {
  $front.src = 'images/' + config.gender + '-' + config.primaryColor + '-' + config.secondaryColor + '-front.jpg'
  $back.src = 'images/' + config.gender + '-' + config.primaryColor + '-' + config.secondaryColor + '-back.jpg'
  $jerseyName.textContent = config.name
  $jerseyNumber.textContent = config.number
}

function resetJersey() {
  jerseyConfig = {
    gender: 'male',
    size: null,
    primaryColor: 'white',
    secondaryColor: 'white',
    name: 'Lastname',
    number: 0,
    quantity: 1
  }
  changeJersey(jerseyConfig)
}

$genderForm.addEventListener('change', function (event) {
  jerseyConfig.gender = event.target.value
  changeJersey(jerseyConfig)
})

$jerseySize.addEventListener('change', function (event) {
  jerseyConfig.size = event.target.value
})

$primaryColor.addEventListener('change', function (event) {
  jerseyConfig.primaryColor = event.target.value
  changeJersey(jerseyConfig)
})

$secondaryColor.addEventListener('change', function (event) {
  jerseyConfig.secondaryColor = event.target.value
  changeJersey(jerseyConfig)
})

$customizeForm.addEventListener('submit', function (event) {
  event.preventDefault()
  var $number = document.querySelector('#number')
  var $name = document.querySelector('#name')
  jerseyConfig.name = $name.value
  jerseyConfig.number = $number.value
  changeJersey(jerseyConfig)
})

$cartButton.addEventListener('click', function (event) {
  if (validate(jerseyConfig)) {
    var quantity = parseInt($quantity.value, 10)
    jerseyConfig.quantity = quantity
    addToCart(jerseyConfig, quantity)
    $customizeForm.reset()
    resetJersey()
  }
})

function validate(obj) {
  for (var prop in obj) {
    if (obj[prop] === null) {
      alert(prop + ' must be selected!')
      return false
    }
  }
  return true
}

function addToCart(item, qty) {
  for (var i = 0; i < qty; i++) {
    cart.push(item)
  }
  $cartCounter.textContent = cart.length
  renderCartItem()
}

function renderImage(img) {
  var $image = document.createElement('img')
  $image.src = img
  return $image
}

function renderProperty(item, prop) {
  var $prop = document.createElement('p')
  $prop.textContent = prop + ': ' + item[prop]
  return $prop
}

function renderCartItem() {
  var $item = document.createElement('li')
  $item.appendChild(renderImage($back.src))
  var props = ['name', 'number', 'size', 'quantity']
  for (var i = 0; i < props.length; i++) {
    $item.appendChild(renderProperty(jerseyConfig, props[i]))
  }
  $cartMenu.appendChild($item)
}

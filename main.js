var jerseyConfig = {
  gender: 'male',
  size: null,
  primaryColor: 'white',
  secondaryColor: 'white',
  name: 'Lastname',
  number: 0
}

var cartJersey = {}
var cart = []
var cartID = 0
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
var $jerseyCost = document.querySelector('#cost')

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
    number: 0
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

$quantity.addEventListener('change', function (event) {
  var quant = parseInt($quantity.value, 10)
  $jerseyCost.textContent = quant * 25
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
  cartJersey = item
  cartJersey.quantity = qty
  cartJersey.price = parseInt($jerseyCost.textContent, 10)
  cartID += 1
  cartJersey.cartId = cartID
  cart.push(cartJersey)
  $cartCounter.textContent = countCartItems()
  renderCartItems()
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

function renderText(item, text) {
  var $text = document.createElement('p')
  $text.textContent = text + ': '
  $text.classList.add('inline-block')
  return $text
}

function renderQuantInput(item) {
  var $input = document.createElement('input')
  $input.setAttribute('type', 'number')
  $input.setAttribute('value', item.quantity)
  $input.setAttribute('min', 1)
  $input.setAttribute('max', 99)
  $input.addEventListener('change', function (event) {
    for (var i = 0; i < cart.length; i++) {
      if (parseInt($input.parentNode.dataset.cartId, 10) === cart[i].cartId) {
        cart[i].quantity = parseInt(event.target.value, 10)
      }
    }
    renderCartItems()
    $cartCounter.textContent = countCartItems()
  })
  return $input
}

function renderDeleteButton() {
  var $btn = document.createElement('button')
  $btn.textContent = 'Delete'
  $btn.classList.add('btn', 'btn-primary', 'btn-xs', 'pull-right', 'delete-btn')
  $btn.addEventListener('click', function (event) {
    var confirmation = confirm('Are you sure you want to remove this from your cart?')
    if (confirmation) {
      for (var i = 0; i < cart.length; i++) {
        if (parseInt($btn.parentNode.dataset.cartId, 10) === cart[i].cartId) {
          cart.splice(i, 1)
        }
      }
      renderCartItems()
      $cartCounter.textContent = countCartItems()
    }
  })
  return $btn
}

function renderCartItems() {
  var props = ['name', 'number', 'size']
  while ($cartMenu.lastChild.id !== 'checkout-btn') {
    $cartMenu.removeChild($cartMenu.lastChild)
  }
  for (var i = 0; i < cart.length; i++) {
    var $item = document.createElement('li')
    var picture = 'images/' + cart[i].gender + '-' + cart[i].primaryColor + '-' + cart[i].secondaryColor + '-back.jpg'
    $item.appendChild(renderImage(picture))
    for (var j = 0; j < props.length; j++) {
      $item.appendChild(renderProperty(cart[i], props[j]))
    }
    $item.appendChild(renderText(cart[i], 'quantity'))
    $item.appendChild(renderQuantInput(cart[i]))
    $item.appendChild(renderDeleteButton())
    $item.appendChild(renderProperty(cart[i], 'price'))
    $item.dataset.cartId = cart[i].cartId
    $cartMenu.appendChild($item)
  }
}

function countCartItems() {
  var cartCount = 0
  for (var i = 0; i < cart.length; i++) {
    cartCount += cart[i].quantity
  }
  return cartCount
}

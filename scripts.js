var carnageClickCount = 0
var riotClickCount = 0
var sounds = {}

window.addEventListener('load', function () {
  var carnage = document.getElementById('carnage')

  carnage.addEventListener('click', function () {
    carnageClickCount++

    if (carnageClickCount === 1) {
      alert('Don\'t touch me bro.')
    }

    if (carnageClickCount === 2) {
      alert('I\'m warning you...')
    }

    if (carnageClickCount > 2) {
      rickroll()
    }
  })

  var riot = document.getElementById('riot')

  riot.addEventListener('click', function () {
    riotClickCount++

    if (confirm('Don\'t touch me.')) {
      // alert('You clicked ok')
    } else {
      if (confirm('Do you think im stupid?')) {
        rickroll()
      }
    }
  })

  var monke1 = document.getElementById('monke1')

  monke1.addEventListener('click', function () {
    // monke1ClickCount++

    if (confirm('do you want to eat banan?')) {
      alert('Here you go :)')
      banan()
    } else {
      alert('im now sad monke')
      sad()
    }
  })

  var monke2 = document.getElementById('monke2')

  monke2.addEventListener('click', function () {
    // monke1ClickCount++

    if (confirm('Are you a monke too?')) {
      alert('yayyyy')
      happyMonke()
    } else {
      alert('nnnnnoooooo')
      sadMonke()
    }
  })

  var smurfcat = document.getElementById('smurfcat')

  smurfcat.addEventListener('click', function () {
    if (confirm('YAY you have found the hidden smurf cat:o')) {
      alert('now we are going to listen to some jams:)')
      coolcat()
    } else {
      alert('why would you ignore  me? now you  have to pay')
      angy()
    }
  })

  var kitty = document.getElementById('kitty')

  kitty.addEventListener('click', function () {
    if (confirm('YAY you have found the hidden nyan cat cat:o')) {
      alert('now were going to make you deaph:)')
      meow()
    } else {
      alert('waa im sad now:(')
      scream()
    }
  })

  var cheese = document.getElementById('cheese')

  cheese.addEventListener('click', function () {
    if (confirm('YAY you have found the hidden cheese:o')) {
      alert('now were going to make you say cheese:)')
      cheeese()
    } else {
      alert('no cheese for you now:(')
      mad()
    }
  })
})


function rickroll() {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}

function sad() {
  window.open('images/sad.webp')
  playSound('sad.mp3')
}

function coolcat() {
  window.open('images/coolcat.gif')
  playSound('wel.mp3')
}

function sadMonke() {
  window.open('images/sad-monke.jpeg')
    playSound('violen.mp3')
}

function banan() {
  window.open('images/banan.gif')
  playSound('pnutbuter.mp3')
}

function happyMonke() {
  window.open('images/happy-monke.gif')
  playSound('spinningmonke.mp3')
}

function angy() {
  window.open('images/angy.webp')
  playSound('doom.mp3')
}

function meow() {
  window.open('images/wee.webp')
  playSound('loud.mp3')
}

function scream() {
  window.open('images/scream.gif')
  playSound('aaaaaaaa.mp3')
}

function cheeese() {
  window.open('images/cheese.gif')
  playSound('dotdotdot.mp3')
}

function mad() {
  window.open('images/no-cheese.jpeg')
  playSound('aw-man.mp3')
}

function playSound(sound) {
  var audio = sounds[sound]

  if (!audio) {
    sounds[sound] = new Audio('sounds/' + sound)
    audio = sounds[sound]
  }

  audio.play()
}

var bgColorChangeElements = document.querySelectorAll('[data-bg-color-change]')
bgColorChangeElements.forEach(function (element) {
  element.addEventListener('click', function (e) {
    var color = e.currentTarget.getAttribute('data-bg-color-change')
    document.body.style.backgroundColor = color
  })
})

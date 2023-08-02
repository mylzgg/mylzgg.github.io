var carnageClickCount = 0
var riotClickCount = 0

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
})


function rickroll() {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}

function sad() {
  window.open('images/sad.webp')
}

function sadMonke() {
  window.open('images/sad-monke.jpeg')
}

function banan() {
  window.open('images/banan.gif')
}

function happyMonke() {
  window.open('images/happy-monke.gif')
}

var bgColorChangeElements = document.querySelectorAll('[data-bg-color-change]')
bgColorChangeElements.forEach(function (element) {
  element.addEventListener('click', function (e) {
    var color = e.currentTarget.getAttribute('data-bg-color-change')
    document.body.style.backgroundColor = color
  })
})

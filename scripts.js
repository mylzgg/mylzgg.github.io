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
})

function rickroll() {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}

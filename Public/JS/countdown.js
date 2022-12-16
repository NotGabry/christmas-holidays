let alternatives = ['days', 'hours', 'minutes', 'seconds']

const showEverything = () => {
    document.querySelector('h1').innerHTML = document.querySelector('h1').innerHTML.replace('0000', new Date().getUTCFullYear())
    document.querySelector('h1').style.visibility = 'visible'
    document.getElementById('countdown').style.display = 'flex'
    document.getElementById('loader').style.display = 'none'
}

const calculateObject = () => {
    let thisYear = new Date().getUTCFullYear()
    let now = new Date()
    let holiDate = new Date(thisYear, 11, 22, 13, 50, 00, 00)
    let calc = holiDate - now
    if (now.getTime() >= holiDate.getTime()) return 'after'
    else return {
        days: calc / 1000 / 60 / 60 / 24,
        hours: calc / 1000 / 60 / 60 % 24,
        minutes: calc / 1000 / 60 % 60,
        seconds: calc / 1000 % 60
    }
}

const loadObject = () => {
    for (const a in alternatives) {
        let x = document.getElementById(alternatives[a])
        if (calculateObject() == 'after') {
            document.querySelector('h1').innerHTML = `${twemoji.parse('🎁')} Holidays ${twemoji.parse('🥮')} are finally Here!`
            document.getElementById('countdown').style.display = 'none'
            return 
        }
        else x.innerText = Math.floor(calculateObject()[alternatives[a]])
    }
}

setTimeout(showEverything, 1500)
setInterval(loadObject, 1000)
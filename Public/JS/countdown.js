let alternatives = ['days', 'hours', 'minutes', 'seconds']

const showEverything = () => {
    document.querySelector('h1').innerHTML = document.querySelector('h1').innerHTML.replace('0000', new Date().getUTCFullYear())
    document.getElementById('loader').style.display = 'none'
    document.querySelector('h1').style.visibility = 'visible'
    if (calculateObject() != 'after') document.getElementById('countdown').style.visibility = 'visible'
}

const calculateObject = () => {
    let thisYear = new Date().getUTCFullYear()
    let now = new Date()
    let holiDate = new Date(thisYear, 11, 25, 00, 00, 00, 00)
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
            document.querySelector('h1').innerHTML = `${twemoji.parse('🎁')} Christmas is finally Here!`
            return document.getElementById('countdown').style.visibility = 'hidden'
        } 
        else x.innerText = Math.floor(calculateObject()[alternatives[a]])
    }
}

setTimeout(showEverything, 1500)
setInterval(loadObject, 1000)

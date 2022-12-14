let alternatives = ['days', 'hours', 'minutes', 'seconds']

const calculateObject = () => {
    let thisYear = new Date().getUTCFullYear()
    let now = new Date()
    let holiDate = new Date(thisYear, 11, 23, 14, 00, 00, 00)
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
            document.querySelector('h1').innerText = 'Holidays Are Here Finally!'
            document.getElementById('countdown').style.display = 'none'
            return 
        }
        else x.innerText = Math.floor(calculateObject()[alternatives[a]])
    }
}

setInterval(loadObject, 1000)
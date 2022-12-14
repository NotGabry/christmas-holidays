const generateNumber = (a) => {
    if (a == 1) {
        let num = Math.random() * (3 - 1) + 1
        let secondDigit = num.toString().split('')[2]
        if (parseInt(secondDigit) >= 6) secondDigit = 5
        return `${num.toFixed(0)}.${secondDigit}` 
    } else if (a == 0) {
        let num = Math.random() * (8 - 1) + 1
        let secondDigit = num.toString().split('')[2]
        if (parseInt(secondDigit) >= 6) secondDigit = 5
        return `${num.toFixed(0)}.${secondDigit}` 
    }
}

const loadSnow = () => {
    let s = document.getElementById('snowflakes')
    for (let i = 0; i < 20; i++) {
        let a = document.createElement('div')
        a.className = 'snowflake'
        let b = document.createElement('div')
        b.className = 'fallingSnow'
        a.appendChild(b)
        a.style = `--d: ${generateNumber(0)}s, ${generateNumber(1)}s;`
        s.appendChild(a)
    }
} 

loadSnow()
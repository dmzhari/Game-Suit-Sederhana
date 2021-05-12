let menang = 1
let kalah = 1

function getPilihanComputer() {
    const comp = Math.random()

    if (comp < 0.34) return 'Kertas'
    if (comp >= 0.34 && comp < 0.67) return 'Gunting'
    return 'Batu'
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!!'
    if (player == 'Kertas') return (comp == 'Batu') ? 'MENANG!' : 'KALAH!'
    if (player == 'Gunting') return (comp == 'Batu') ? 'KALAH!' : 'MENANG!'
    if (player == 'Batu') return (comp == 'Kertas') ? 'KALAH!' : 'MENANG!'
}

function putar() {
    const komputer = document.getElementById('komputer')
    const teks = ['Kertas', 'Gunting', 'Batu']
    const waktuMulai = new Date().getTime()
    let i = 0
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        komputer.innerHTML = teks[i++]
        if (i == teks.length) i = 0
    }, 100)
}

const pilihan = document.querySelectorAll("button[type='button']")
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const PilihanComputer = getPilihanComputer()
        const PilihanPlayer = pil.getAttribute('id')
        const hasil = getHasil(PilihanComputer, PilihanPlayer)
        let nilaimenang = document.getElementById('menang')
        let nilaikalah = document.getElementById('kalah')

        putar()

        setTimeout(function () {
            const komputer = document.querySelector('#komputer')
            komputer.innerHTML = PilihanComputer

            const info = document.querySelector('.hasil')
            info.innerHTML = hasil

            if (hasil === 'MENANG!') {
                nilaimenang.innerHTML = menang++
                return nilaimenang
            } else if (hasil === 'SERI!!') {
                return false;
            } else {
                nilaikalah.innerHTML = kalah++
                return nilaikalah
            }
        }, 1000)
    })
})

const reset = document.getElementById('reset')
reset.addEventListener('click', function () {
    menang = 0
    kalah = 0

    document.getElementById('menang').innerHTML = menang++
    document.getElementById('kalah').innerHTML = kalah++
})
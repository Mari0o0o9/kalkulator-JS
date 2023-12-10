function liczby() {
    var wynik = document.getElementById('wynik')
    var przyciski = document.querySelectorAll('.przyciski')
    
    przyciski.forEach(element => {
        element.addEventListener('click', index => {
            wynik.value += index.currentTarget.getAttribute('data-cyfra')
        })
    })
}

function usuwanie() {
    var wynik = document.getElementById('wynik')

    var usun = document.getElementById('usun')
    usun.addEventListener('click', ()=> {
        if(wynik.value.length > 0) { 
            wynik.value = wynik.value.slice(0, -1);
        }
    })

    var usunWszystko = document.getElementById('usunWszystko')
    usunWszystko.addEventListener('click', ()=> {
        wynik.value = null
    })
}

function wynik() {
    var wynik = document.getElementById('wynik')
    var dzialanie = document.getElementById('dzialanie')
    var historia = document.getElementById('dzialania')

    document.addEventListener('keydown', event => {
        if(event.key === 'Enter') {
            let liczenie = math.evaluate(wynik.value)
    
            historia.style.display = `flex`
            historia.innerHTML += `<p>${wynik.value} = ${liczenie}`
    
            wynik.value = math.evaluate(wynik.value)
        }
    })

    dzialanie.addEventListener('click', ()=> {
        let liczenie = math.evaluate(wynik.value)

        historia.style.display = `flex`
        historia.innerHTML += `<p>${wynik.value} = ${liczenie}`

        wynik.value = math.evaluate(wynik.value)
    })
}

liczby();
usuwanie();
wynik();

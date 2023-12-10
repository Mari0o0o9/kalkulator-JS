function liczby() {
    var wynik = document.getElementById('wynik')
    var przyciski = document.querySelectorAll('.przyciski')
    
    przyciski.forEach(element => {
        element.addEventListener('click', index => {
            let kropka = document.getElementById('kropka')
            if(wynik.value.length > -1) {
                kropka.dataset.cyfra = '.'
            }
            if(wynik.value.length < -1) {
                kropka.dataset.cyfra = '0.'
            }


            wynik.value += index.currentTarget.getAttribute('data-cyfra')
            console.log(wynik.value.length)
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
            let liczenie = eval(wynik.value)
    
            historia.style.display = `flex`
            historia.innerHTML += `<p>${wynik.value} = ${liczenie}`
    
            wynik.value = eval(wynik.value)
        }
    })

    dzialanie.addEventListener('click', ()=> {
        let liczenie = eval(wynik.value)

        historia.style.display = `flex`
        historia.innerHTML += `<p>${wynik.value} = ${liczenie}`

        wynik.value = eval(wynik.value)
    })
}

liczby();
usuwanie();
wynik();

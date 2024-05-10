let tipPercentage = 0
let totalBill = 0

const billInput = document.getElementById('bill')
const peopleInput = document.getElementById('people')
const errorText = document.getElementById('error-text')

const resetBtn = document.getElementById('reset-btn')

const tipButtons = document.querySelectorAll('.tip-button')
const tipInput = document.getElementById('custom-tip')

const tipPerPerson = document.getElementById('tip-per-person')
const totalPerPerson = document.getElementById('total-per-person')

const populateTipAndTotal = () => {
    const totalNumOfPeople = Number(peopleInput.value)
    totalBill = Number(billInput.value)
    
    const tip = !totalNumOfPeople ? 0 : (totalBill * ((tipPercentage / 100))) / totalNumOfPeople
    const total = !totalNumOfPeople ? 0 : (totalBill / totalNumOfPeople) + tip

    tipPerPerson.textContent = `$${tip.toFixed(2)}`
    totalPerPerson.textContent = `$${total.toFixed(2)}`
}

const inputChecker = el => {
    let billAmount = 0
    let peopleAmount = 0
    let tipAmount = 0

    el.addEventListener('input', function() {
        const twoDecimalPlaces = /^\d*\.?\d{0,2}$/;
        const onlyNumbers = /^[0-9]*$/

        if (this.id === 'bill' || this.id === 'custom-tip') {
            if (this.value.match(twoDecimalPlaces)) {
                if (this.id === 'bill') {
                    billAmount = Number(this.value)
                } else {
                    tipAmount = Number(this.value)
                }
            } else {
                if (this.id === 'bill') {
                    this.value = billAmount
                } else {
                    this.value = tipAmount
                }
            }
        } else {
            if (this.value.match(onlyNumbers)) {
                peopleAmount = Number(this.value)
            } else {
                this.value = peopleAmount
            }
        }
    });
}

inputChecker(billInput)
inputChecker(peopleInput)
inputChecker(tipInput)

const resetAllTipButtons = () => {
    tipButtons.forEach(b => {
        b.classList.remove('clicked')
    })
}

tipInput.addEventListener('input', function () {
    if (!(tipInput.value === '' || tipInput === '0')) {
        resetAllTipButtons()
        tipPercentage = Number(tipInput.value) || 0
    } else {
        tipPercentage = 0
    }
    populateTipAndTotal()
})

tipButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        resetAllTipButtons()
        tipPercentage = Number(btn.textContent.slice(0, btn.textContent.length - 1)) || 0
        btn.classList.add('clicked')
        tipInput.value = ''
        populateTipAndTotal()
    })
})

const setFocusListener = el => {
    el.addEventListener('focus', function() {
        this.parentNode.classList.add('focused');
    })

    el.addEventListener('blur', function() {
        this.parentNode.classList.remove('focused');
    })
}

const addError = () => {
    peopleInput.parentNode.classList.add('error')
    errorText.style.display = 'block'
    resetBtn.setAttribute('disabled', '')
}
const removeError = () => {
    peopleInput.parentNode.classList.remove('error')
    errorText.style.display = 'none'
    resetBtn.removeAttribute('disabled')
}

resetBtn.addEventListener('click', function () {
    resetAllTipButtons()
    billInput.value = ''
    peopleInput.value = ''
    tipInput.value = ''
    resetBtn.setAttribute('disabled', '')

    tipPercentage = 0
    totalBill = 0
    populateTipAndTotal()
})

const setInputListenerOnBill = el => {
    el.addEventListener('input', function () {
        if (!(billInput.value === '' || billInput.value === '0')) {
            if (peopleInput.value === '' || peopleInput.value === '0') {
                addError()
            } else {
                removeError()
            }
        } else {
            removeError()
        }
        populateTipAndTotal()
    })
}

const setInputListenerOnPeople = el => {
    el.addEventListener('input', function () {
        if (!(peopleInput.value === '' || peopleInput.value === '0')) {
            removeError()
        } else {
            if (!(billInput.value === '' || billInput.value === '0')) {
                addError()
            }
            resetBtn.setAttribute('disabled', '')
        }
        populateTipAndTotal()
    })
}

setFocusListener(billInput)
setFocusListener(peopleInput)
setInputListenerOnPeople(peopleInput)
setInputListenerOnBill(billInput)
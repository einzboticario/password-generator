// display
const pw_display = document.getElementById('pw_display');

// one and only form
const form = document.getElementById('pw_generator_form');

// char slider
const char_amt_range = document.getElementById('char_amt_range');
const char_amt_number = document.getElementById('char_amt_number');

// checkboxes
const include_upper = document.getElementById('include_upper');
const include_numbers = document.getElementById('include_numbers');
const include_symbols = document.getElementById('include_symbols');

// button
const generate_btn = document.getElementById('generate_btn');

// when the user clicks generate
form.addEventListener('submit', e => {
    // prevent the form from submitting and refreshing the page
    e.preventDefault()
    const char_amt = char_amt_number.value
    const upper = include_upper.checked
    const numbers = include_numbers.checked
    const symbols = include_symbols.checked

    // call function to generate password
    const password = generatePassword(char_amt, upper, numbers, symbols)
})

//generatePassword function
function generatePassword(char_amt, upper, numbers, symbols){
    //~~~~~
}

// link char slider value
char_amt_number.addEventListener('input', syncCharSlider)
char_amt_range.addEventListener('input', syncCharSlider)

//syncCharSlider function
function syncCharSlider (e){
    const val = e.target.value
    char_amt_number.value = val
    char_amt_range.value = val
}
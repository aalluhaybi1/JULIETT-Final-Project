// NATO Phonetic Alphabet Dictionary
const natoPhonetic = {
    'a': 'Alfa',
    'b': 'Bravo',
    'c': 'Charlie',
    'd': 'Delta',
    'e': 'Echo',
    'f': 'Foxtrot',
    'g': 'Golf',
    'h': 'Hotel',
    'i': 'India',
    'j': 'Juliett',
    'k': 'Kilo',
    'l': 'Lima',
    'm': 'Mike',
    'n': 'November',
    'o': 'Oscar',
    'p': 'Papa',
    'q': 'Quebec',
    'r': 'Romeo',
    's': 'Sierra',
    't': 'Tango',
    'u': 'Uniform',
    'v': 'Victor',
    'w': 'Whiskey',
    'x': 'X-ray',
    'y': 'Yankee',
    'z': 'Zulu',
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine'
};

// Function to convert text to NATO phonetic alphabet
function convertToPhonetic() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = '';

    for (const char of inputText) {
        if (natoPhonetic[char]) {
            outputText += natoPhonetic[char] + ' ';
        } else {
            outputText += char + ' ';
        }
    }

    document.getElementById('outputArea').innerText = outputText.trim();
}

// Function to convert text to kebab-case
function convertToKebabCase() {
    const inputText = document.getElementById('inputText').value.trim();
    const kebabCaseText = inputText.replace(/\s+/g, '-').toLowerCase();
    document.getElementById('outputArea').innerText = kebabCaseText;
}

// Function to clear the form
function clearForm() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputArea').innerText = '';
}

// Event listener for form submission
document.getElementById('phoneticForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Call the convertToPhonetic function
    convertToPhonetic();
});

// Event listener for kebab-case conversion
document.getElementById('kebabCaseBtn').addEventListener('click', function() {
    convertToKebabCase();
});


const inputTextElement = document.getElementById('text-input');
const btnAlert = document.getElementById('check-btn');
const resultText = document.getElementById('result');

const isPalindrome = (str) => {
    const cleanedInput = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return cleanedInput === cleanedInput.split('').reverse().join('');
};

btnAlert.addEventListener('click', (event) => {
    event.preventDefault();

    const userInput = inputTextElement.value.trim();

    if (userInput === '') {
        return alert("Please input a value");
    }

    const isPalindromeResult = isPalindrome(userInput);

    resultText.innerHTML = `<p><strong>${userInput}</strong>${isPalindromeResult ? ' is' : ' is not'} a palindrome</p>`;
});

inputTextElement.addEventListener('input', () => {
    resultText.innerHTML = '';
});



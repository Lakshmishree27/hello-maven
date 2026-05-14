const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for string input
rl.question("Enter a string: ", function(userInput) {

    // Find length
    console.log("Length of the string:", userInput.length);

    // Extract "JavaScript"
    const startIndex = userInput.indexOf("JavaScript");

    if (startIndex !== -1) {

        // Using substring()
        const extractedWord =
            userInput.substring(startIndex, startIndex + 10);

        console.log("Extracted word:", extractedWord);

    } else {

        console.log("The word 'JavaScript' was not found.");

    }

    // Replace JavaScript with Python
    const newString =
        userInput.replace("JavaScript", "Python");

    console.log("New string after replacement:", newString);

    // Ask for palindrome input
    rl.question(
        "Enter a string to check palindrome: ",
        function(palindromeInput) {

            // Palindrome function
            function isPalindrome(str) {

                const cleanedStr =
                    str.toLowerCase()
                       .replace(/[^a-z0-9]/g, '');

                const reversedStr =
                    cleanedStr.split('')
                              .reverse()
                              .join('');

                return cleanedStr === reversedStr;
            }

            // Display result
            console.log(
                `Is "${palindromeInput}" a palindrome?`,
                isPalindrome(palindromeInput)
            );

            // Close interface
            rl.close();
        }
    );
});
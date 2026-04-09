let tries = 0;

const isSameWord = () => {
    // check if a string is the same as another string
};

const isAnagram = () => {
    // check if a string is an anagram of another string
};

export const checkGuess = () => {
    
    tries++;
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (tries > 4) reject('Too many tries');
            resolve();
        }, Math.round(Math.random() * 1000)),
    );
};

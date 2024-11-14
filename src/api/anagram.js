let tries = 0;

export const isAnagram = () => {
    // check if a string is an anagram of another string
};

export const getIsAnagram = () => {
    // simulate api call
    tries++;
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (tries > 4) reject('Too many tries');
            resolve(tries);
        }, 500),
    );
};

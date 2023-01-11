module.exports = function toReadable(n) {
    const numbersFromZeroToNineteen = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const dozensFromTwentyToNinety = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (n < 20) {
        return numbersFromZeroToNineteen[n];
    } else if (n >= 20 && n < 100) {
        if (n % 10 === 0) {
            return dozensFromTwentyToNinety[n / 10 - 2];
        } else {
            const dozens = Math.floor(n / 10) - 2;
            const units = n % 10;
            return `${dozensFromTwentyToNinety[dozens]} ${numbersFromZeroToNineteen[units]}`;
        }
    } else {
        if (n % 100 === 0) {
            const hundreds = n / 100;
            return `${numbersFromZeroToNineteen[hundreds]} hundred`;
        } else {
            const hundreds = Math.floor(n / 100);
            const remainder = n % (hundreds * 100);
            const dozens = (remainder) => {
                if (remainder < 20) {
                    return numbersFromZeroToNineteen[remainder];
                } else if (remainder >= 20 && remainder < 100) {
                    if (remainder % 10 === 0) {
                        return dozensFromTwentyToNinety[remainder / 10 - 2];
                    } else {
                        const dozens = Math.floor(remainder / 10) - 2;
                        const units = remainder % 10;
                        return `${dozensFromTwentyToNinety[dozens]} ${numbersFromZeroToNineteen[units]}`;
                    }
                }
            };
            return `${numbersFromZeroToNineteen[hundreds]} hundred ${dozens(
                remainder
            )}`;
        }
    }
};

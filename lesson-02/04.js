const giveMeRightCondition = (value1, value2, maximum) => {
    if (value1 === value2 && value2 <= maximum) {
        console.log('Success!');
    } else {
        console.log('Something wrong!');
    }
}

giveMeRightCondition(15, 38, 199)

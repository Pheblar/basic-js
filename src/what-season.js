module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    } else {
        for (let key in date) {
            if (typeof date[key] !== 'number') {
                throw new Error('Error');
            }
        }
        switch (date.getMonth()) {
            case 11:
            case 0: 
            case 1:
                return 'winter';
            case 2:
            case 3:
            case 4:
                return 'spring';
            case 8:
            case 9:
            case 10:
                return 'autumn';
            case 5:
            case 6: 
            case 7:
                return 'summer';
        }
    }
};

const findTheOldest = function(people) {
    const getAge = (birth, death) => {
        if(!death){
            death = new Date().getFullYear();
        };
        return death - birth;
    };
    
    const sortedList = people.sort((a, b) => {
        ageA = getAge(a.yearOfBirth, a.yearOfDeath);
        ageB = getAge(b.yearOfBirth, b.yearOfDeath);
        return ageA > ageB ? -1 : 1;
    });
    return sortedList[0];
};

// Do not edit below this line
module.exports = findTheOldest;

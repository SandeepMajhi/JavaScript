let person = {
    fistName : 'Sandeep',
    lastName : 'Majhi',
    age : 23,
    country : 'India',
    city: 'Jamshedpur',
    skills: ['html, css, javascript'],

    getFullName : function(){
        return `${this.firstName } ${this.lastName}`
    },
    phone: '9334548105'
}

console.log(person)
console.log(person.fistName)
console.log(person.skills)


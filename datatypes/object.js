// Object stores methods and properties in key-pair manner

var obj = {};


var joeRes = {
    "math":20,
    "physics":30,
    "chemistry":40,
    "bio":45,
    "hindi":65
}


console.log(joeRes)

// Reading object values
// 1. Dot notation
// 2. Bracket Notation

console.log(joeRes.hindi);

console.log(joeRes.chemistry);


joeRes.hindi = 35;

console.log(joeRes);

joeRes.english = 20;

console.log(joeRes);


// Defining a key
//  It should not be reserved keyword
// Can't take numbers


var pen = {
    name:"fountain",
    "is it blue":false,
    "12":45,
}


// Your Intro

var mohIntro = {
    name:"Mohini",
    married:true,
    age:24,
    gender:"Female",
    higherQualification: {
        degree:"Bachlor",
        percentage:71,
        college:"SIET"
    },
    friends:[{
        name:"Arooz",
        age:24,
        married:false,
        phone:12345678
    },{
        name:"Anjali",
        age:24,
        married:false
    }]
}


console.log(mohIntro.gender);
console.log(mohIntro.higherQualification.percentage);
console.log(mohIntro.friends[1].name)
 
// example

var myInfo = {
    "name": 'Mohini Tiwari',
    "education": 'B.Tech',
    "address": 'Allahabad',
    "phoneNo": 1234567890,
    "gender": 'Female',
    "dob": '20-Jul-1997',
    "result":[
        {
            "sem": 'semsester-1st',
            "percentage":67,
            "session":'2014-2015'
        },
        {
            "sem": 'semester-2nd',
            "percentage": 68,
            "session": '2014-2015'

        }
    ]

}

console.log(myInfo.name);

console.log(myInfo.education);

console.log(myInfo.address);

console.log(myInfo.phoneNo);

console.log(myInfo.gender);

console.log(myInfo.dob);

console.log(myInfo.result);

console.log(myInfo.result[0].sem);

console.log(myInfo.result[0].percentage);

console.log(myInfo.result[0].session);

console.log(myInfo.result[1].sem);

console.log(myInfo.result[1].percentage);

console.log(myInfo.result[1].session);



























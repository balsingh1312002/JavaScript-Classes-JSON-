//1. Create a Class

class user{
constructor(userName,MobileNum,Age){
    this.username=userName;
    this.MobileNum=MobileNum;
    this.age=Age;
}
    isAdult(){
    if(this.age>=18){
        return true
    }else if(this.age<18){
        return false
    }
}

//2. Create Class Methods

getUserDetails(){
    console.log(`
        Username : ${this.username},
        Mobile Num : ${this.MobileNum},
        Age : ${this.age},
        isAdult : ${this.isAdult()}.
        `);
}

}

//3. Create User Objects

const Alice=new user("Alice",987654321,25);
const Bob=new user("Bob",978674535,24);
const Charlie=new user("Charlie",765432981,17);

//4. Store Users in an Array

const users=[Alice,Bob,Charlie]

//5. Display User Details

users.forEach((detail)=>{
    detail.getUserDetails();
})

//1: Create JSON Data

const jsonData=`[
     { "username": "Alice", "mobileNum": "9876543210", "age": 25 },
     { "username": "Bob", "mobileNum": "9123456780", "age": 30 },
     { "username": "Charlie", "mobileNum": "9001122334", "age": 17 }
]`;

// 2: Convert JSON to JavaScript Object

const Users=JSON.parse(jsonData);
console.log(Users);

//3: Display the Data

Users.forEach((details)=>console.log(`${details.username} - ${details.mobileNum} - ${details.age}`));

//4: Convert Object Back to JSON

const jsonOutput=JSON.stringify(Users);

console.log(jsonOutput);
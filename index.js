// var obj = {};
// var userName = function () {
//     return new Promise( (resolve, reject) => {
//         resolve("PuranKotwal");
//     }); 
// };

// var userEmail = function () {
//     return new Promise( (resolve, reject) => {
//         resolve("puran@akwa.io");
//     }); 
// };

// userName()
// .then( userName => {
//     obj.userName = userName;
//     userEmail()
//     .then( userEmail => {
//         obj.userEmail = userEmail;
//         console.log(obj);
//     });
// });


/***** Use async await *** */


var obj = {};
var userName = function () {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            resolve("PuranKotwal");
        }, 2000 );
    }); 
};

var userEmail = function () {
    return new Promise( (resolve, reject) => {
        resolve("puran@akwa.io");
    }); 
};

async function getUserDetails () {
    console.log(1);
    obj.userName = await userName();
    console.log(2);
    obj.userEmail = await userEmail();
    console.log(3);
    console.log(obj);
}

getUserDetails();
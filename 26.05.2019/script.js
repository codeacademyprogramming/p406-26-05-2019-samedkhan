// var age = 17;

// var city = "Baku";

// var isMarried = false;

// var lastAccessDate;

// var ages = [24, 28, 31, 25];

// for (var i = 0; i < ages.length; i++) {
//     console.log(ages[i]);
// }



// var n = Number(prompt("Mebleg yazin"));

// var moneyBill = [1, 5, 10, 20, 50, 100, 200];

// var count = 0;

// if (n % moneyBill[0] == 0) {

//     for (var i = moneyBill.length - 1; i >= 0; i--) {
//         if (n >= moneyBill[i]) {
//             count += (n - n % moneyBill[i]) / moneyBill[i];
//             n %= moneyBill[i];
//         }
//     }

//     console.log(count);

// } else {
//     console.log("Bu mebleg odene bilinmez");
// }

// var arr1 = [15, 18, 21, 14];
// var arr2 = [14, 26, 21, 12];

// for (var i = 0; i < arr1.length; i++) {
//     // console.log("first loop", i);
//     for (var j = 0; j < arr2.length; j++) {
//         // console.log("second loop", j);
//         if (arr1[i] == arr2[j]) {
//             console.log(arr1[i]);
//         }
//     }
// }

// var stu1_name = "Ramal";
// var stu1_surname = "Gurbanov";
// var stu1_age = 18 * 2;
// var stu1_isMarried = true;

// var stuArr = ["Ramal", "Qurbanov", 36, true];

// var stu1 = {
//     name: "Ramal",
//     surname: "Qurbanov",
//     age: 18 * 2,
//     isMarried: true,
//     children: ["Fateh", "Meryem"]
// };

// var comp = {
//     marka: "Apple",
//     ram: 16,
//     hardDisk: 256
// };

// for (var i = 0; i < stu1.children.length; i++) {
//     console.log(stu1.children[i]);
// }


// for (var prop in stu1) {
//     console.log(prop, stu1[prop]);
// }

function displayPrice(price, discount, type = "%") {
    if (typeof (price) != "number") {
        return -1;
    }

    if (type == "%") {
        return price - (price * discount / 100);
    }

    if (type == "azn") {
        return price - discount;
    }

    return price;
}

// console.log(displayPrice(179, 10));

// console.log(displayPrice(200, 1, "azn"));

var stu1 = {
    name: "Ramal",
    surname: "Qurbanov",
    age: 18 * 2,
    isMarried: true,
    children: ["Fateh", "Meryem"],
    fullname: function () {
        return this.name + " " + this.surname;
    }
};

console.log(stu1.fullname());

var akm47 = {
    damage: 21,
    pistolCount: 30,
    pistrolType: 7.62,

    shoot: function () {
        return "live point -" + this.damage;
    },

    reload: function () {
        return "Salam";
    }
}
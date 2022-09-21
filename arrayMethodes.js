
// .shift()


// .unshift()
let names = ["yosef", "nati"],
    newArr = [],
    add = "pavel";

for (let i = 0; i < names.length; i++) {
    newArr[i + 1] = names[i];
}
newArr[0] = add;
names = newArr
console.log(names.length)





// .indexOf()
// let countries = ["Nigeria", "Ghana", "Rwanda", "Ghana"]
// let position = -1;
// let from=2;
// let search = "Ghana";

// for (i in countries) {
//     if (countries[i] === search&& i>from ) {
//         position = i
//         break;
//     }
// }
// console.log(position)
// .join()
let countries = ["Nigeria", "Ghana", "Rwanda", "Ghana"];
let char = prompt(":הכנס תו לפיצול", ",");;
let res = ""


res = countries[0]
for (i of countries) {
    if (i != countries[0])
        res += char + i
}
console.log(res)

// .lastIndexOf()


let countries = ["Nigeria", "israel", "Ghana", "Rwanda", "Ghana"]
let position = -1;
let from = 2;
let search = "Ghana";

for (i = from; i >= 0; i--) {
    if (search == countries[i]) {
        position = i
        break;
    }

}
console.log(position)

// .reverse()
// let arr = [1, 2, 3, 4, 5],
//  temp

//  for(i=0;i<=arr.length/2;i++){
//     temp=arr[i];
//     arr[i]=arr[arr.length-1-i];
//     arr[arr.length-1-i]=temp;
//  }
//  console.log(arr)


// .sort()
let arr = ["Nigeria", "israel", "Ghana", "Rwanda", "Ghana"],
    temp;
for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp
        }
    }
}
console.log(arr)

// .slice()



// 3. הדפיסו את מספר התא בו נמצא ערך בעל יותר ממילה אחת, הדפיסו את המילה הראשונה. 
// בונוס - הדפיסו את המילה האחרונה - ב-2 דרכים.
let names = ["nadav", "maya", "yonatan", "avi", "yossi", "bat el"];


for (i in names) {
    if (names[i].includes(" ")) {
        // console.log(i)
        console.log(names[i].split(" ")[0])
    }
}


// 4. הדפיסו את כל הערכים בפורמט הבא
//  ______*______**______***______****
// כאשר ______ מייצג ערך/תא.


let names = ["nadav", "maya", "yonatan", "avi", "yossi", "bat el"];
let res = ""
let star = "*"
for (i in names) {
    res += names[i] + star.repeat(i + 1);

}
console.log(res)


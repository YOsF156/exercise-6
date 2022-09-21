let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6";
let txt2 = "PIG17, bear29, BiRd8";
let txt3 = "SNAKE39, donkey14";
let arrName = [], arrCode = [];

formatAnimal(txt1)
formatAnimal(txt2)
formatAnimal(txt3)


let option

do {
    option = prompt("welcom to the zoo!🙋‍♂️ \n please choise an action: \n [1] search by code\n [2] search by name/letter \n [3] add a new animal \n [4] delete an animal from the list");

    let isSuccess = true;
    switch (option) {
        case "1":
            let code = prompt("enter code for search")
            isSuccess = searchByCode(code)
            break;
        case "2":
            let char = prompt("enter char fo search");
            isSuccess = searchByChar(char)
            break;
        case "3":
            animalName = prompt("enter Animal name:");
            code = prompt("enter Animal code:");
            isSuccess = addAnimal(animalName, code);
            break;
        case "4":
            code = prompt("enter Animal code:");
            isSuccess = deleteAnimal(code);
            break;
        case "5":
            isSuccess = true//כך לא נקבל שגיאת קלט רגע לפני היציאה
        default:
            console.log("wrong input")
            break;
    }
    if (!isSuccess) {
        console.log("somthing get wrong")
    }
} while (option != "5")









function formatAnimal(txt) {
    let arr = txt.split(", ")
    for (i of arr) {
        let str = i.slice(0, i.search(/\d/));
        let num = i.replace(str, "");
        arrName.push(str.toLowerCase());
        arrCode.push(num);

    }

}

function printCode(index) {
    console.log(arrName[index])
    console.log(arrCode[index])
}

function searchByCode(code) {
    for (i in arrCode) {
        if (arrCode[i] == code) {
            printCode(i)
            return true
        }
    }
    return false
}


function searchByChar(char) {
    let arr = []
    for (i in arrName) {
        if (arrName[i].includes(char.toLowerCase())) {
            arr.push(i)
        }
    }
    if (arr.length > 0) {
        console.log(`found ${arr.length} animals`)
        for (i of arr) {
            printCode(Number(i))
        }
        return true
    }
    return false
}

function addAnimal(name, code) {
    if (searchAnimalByCode(code, false)) {
        return false;
    }
    arrAnimalName.push(name);
    arrAnimalcode.push(code);
    return true;
}

function deleteAnimal(code) {
    for (let i = 0; i < arrAnimalcode.length; i++) {
        if (arrAnimalcode[i] == code) {
            arrAnimalcode.splice(i, 1);
            arrAnimalName.splice(i, 1);
            return true;
        }
    }
    return false;
}
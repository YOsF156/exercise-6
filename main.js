let persons = []
function createPerson(firstName, lastName, id, city, birth, idParent) {
    return {
        firstName, // >> firstName:firstName
        lastName,
        id: id,
        city,
        birthday: birth,
        idParent: idParent ?? null,
        print: function () {
            console.log(`
            ${this.firstName} ${this.lastName}  |  ${this.id}
            ${this.city}
            `);
        },
        getAge: function () {
            this.birthday
        }

    }
}
persons.push(
    createPerson('eli', 'cohen', "1", 'Jerusalem', '198378732'),
    createPerson('avi', 'levi', "12", 'Tel aviv', '1278732', "1"),
    createPerson('eli', 'cohen', "13", 'Haifa', '1983732732', "1"),
    createPerson('shlomi', 'peretz', "131", 'Jerusalem', '1498378732', "13"),
    createPerson('mor', 'peretz', "132", 'Jerusalem', '1498378732', "13"),
    createPerson('jonatan', 'levi', "14", 'Jerusalem', '1498378732', "1"),
)

// function validString() { } // f_n,l_n,city
// function validNumber() { } // id, idParent, 
// function validDate() { } // birth

// let valid = {
//     firstName : validString,
//     lastName : validString,
//     birth : validDate
// }

// function getValid(prop){ //firstName
//     valid[prop]()
// }


// פונקציה גנרית לבדיקת תקינות קלט על פי סוג ודרישה האם חובה
function validation(prop, type, requierd = true) {
    while (true) {
        let isValid = true;
        let inp = prompt(`enter ${prop} please: `).trim()
        if (requierd) {
            isValid = isValid && Boolean(inp)
        }
        if (type == 'str') {
            isValid = isValid && true //inp.search() / inp.match()
        }

        if (type == 'num') {
            isValid = isValid && inp.match()
        }

        if (isValid) {
            return inp;
        }
    }
    // first name ??? only alpha , without spaces, not empty 


}

function addNewPerson() {
    let id = "2134" //prompt("enter")
    // check if exist
    let p = getPerson(id) // person <<>> undefiend
    if (p) {
        console.log(id, " is exist:", p.firstName, p.lastName);
        // throw(id ," is exist")
        return false;
    }

    //  inputs & validations
    let idParent = validation("id of your parents", "num", false) //"3287" //prompt("enter")
    let f_name = validation("first name", "str")// "ran" //prompt("enter")
    let l_name = validation("last name", "str")
    let city = "Paris" //prompt("enter")
    let birth = "327476232" //prompt("enter")


    // create by template
    p = createPerson(f_name, l_name, id, city, birth, idParent)
    // push
    persons.push(p)

    // print new person / Done
    console.log(p);

}


function getPerson(id) {
    return persons.find(p => p.id == id);

    // return persons.some((obj) => obj.id == id)

}

function deleteByObj(p) {
    // for on childrens
    let children = getChildren(p.id)
    for (c of children) { // [c1, c2]
        deleteByObj(c)
    }
    // delete 
    persons.splice(persons.indexOf(p), 1)
}

function deletePerson() {
    let idDel = prompt("enter id for delete: ")
    let p = getPerson(idDel)
    if (!p) {
        throw "is not exist"
    }
    debugger;
    deleteByObj(p)
}

function printPerson(p) {
    p.print()
    // ask 
    getChildren(p.id).forEach(c => c.print());

}

function getChildren(id) {
    return persons.filter(p => p.idParent == id)
}

let persons = []

const createPerson = (firstName, lastName, id, city, birth, parentId = null) => {
    return {

        firstName,
        lastName,
        id,
        city,
        birth,
        parentId,
        printPerson: function () {
            console.log(`${this.firstName}  ${this.lastName}  |\n the id is: ${this.id}`)
        },
        getAge: function () {
            let ageDifMs = Date.now() - new Date(this.birth).getTime();
            let ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
    }
}


// function Person(firstName, lastName, id, city, birth, parentId = null) {

//     this.firstName = firstName,
//         this.lastName = lastName,
//         this.id = id

// }


persons.push(createPerson("yos", "shar", 13131, "mifg", "12/10/1988"),
    createPerson('eli', 'cohen', "1", 'Jerusalem', '01/01/1955'),
    createPerson('avi', 'levi', "12", 'Tel aviv', '1278732', "1"),
    createPerson('eli', 'cohen', "13", 'Haifa', '1983732732', "1"),
    createPerson('shlomi', 'peretz', "131", 'Jerusalem', '1498378732', "13"),
    createPerson('mor', 'peretz', "132", 'Jerusalem', '1498378732', "13"),
    createPerson('jonatan', 'levi', "14", 'Jerusalem', '1498378732', "1"),
)
console.log(persons[1].getAge())


// הוספת אדם
// 1 .כל השדות חובה – למעט ת"ז הורה
// אם הזין ת"ז הורה – יש לבדוק האם קיים בכלל ת"ז כזה במערכת.
// 2 .בדיקת תקינות – לבדוק שהערכים שהוזנו תקינים, לדוג' בשם פרטי אסור מספרים.
// 3 .ת"ז הורה – אם לא הוזן ת"ז בהורה, והאדם הוא יחידני, החליטו על ערך קבוע שיהיה לכל אדם ללא הורה.
function validation(text, type, requierd) {
    let valid = true;
    while (true) {
        let input = prompt(`please enter ${text} :`).trim()
        if (requierd) {
            valid = Boolean(input)
        }
        if (type === "num") {
            let regEx = new RegExp(/^\d+$/)
            valid = valid && regEx.test(input)
        }
        if (type === "str") {
            // valid=valid&&input.match("/^\d+$")
        }
        if (valid) { return input }

    }

}


function addPerson() {
    // let firstName = validation("your first name", "str", true);
    // let lastName = validation("your first name", "str", true);
    let id = validation("person id", "num", true);

    persons.push(createPerson(firstName, lastName, id, city))
}

addPerson()
// מחיקת אדם
// 1 .בדיק ה האם קיים האדם – לבדוק שבן האדם קיים לפני שמוחקים אותו (אי אפשר למחוק אם לא קיים).
// 2 .בדיקה האם האדם שנדרש למחוק הינו הורה – במידה וכן, עליכם להחליט על דרך :
// a .מחיקת ההורה והפיכת הילדים לחופשיים, ז"א ללא ת"ז הורה (הערך הקבוע).
// b .מחיקת הילדים ורק לאחר מכן מחיקת ההורה -מומלץ.

// עריכת פרטים
// 1 .עריכת פרטים אישיים - אפשרות לערוך (למעט תאריך לידה)

// הדפסת אדם
// הדפיסו אדם לפי תבנית שתבחרו, לדוגמא -
// שם פרטי, שם משפחה | ת"ז
// ת.א לידה , גיל מדוייק.
// אפשרו למשתמש להחליט אם ההדפסה תציג גם את הילדים (באותו פורמט הנ"ל).

// חיפוש
// 1 .חיפוש עפ"י טקסט – יחפש בשדות שם פרטי ושם משפחה . כל טקסט בכל מקום בשדות.
// ( לדוגמא : "el "ימצא ב"eli "וגם ב"orel .("
// 2 .חיפוש עפ"י ת"ז – חיפוש מדויק.
// תוצאות החיפוש ידפיסו פרטי אדם.

// חתכים, שאילתות ודו"חות
// 1 .הצגת בני אדם מעל גיל מסוים (המשתמש מזין גיל).
// 2 .הצגת ילדים של אדם מסוים. (חיפוש ע"י ת"ז)
// 3 .כל מי שעומד באחד התנאים הבאים:
// a .נולד בחודש זוגי
// b .יש לו 2 ילדים לפחות
// c .השם שלו או של אחד הילדים שלו הוא פלינדרום (לדוג' דוד, שמש; גם בפרטי וגם במשפ')
// 4 .הצגת כל עיר והתושבים שלה.
// לדוגמא:
// רעננה
// -אדם 2אדם 1
// חיפה
// -אדם 3
// הצגת האדם עפ"י התבנית של הדפסת אדם.
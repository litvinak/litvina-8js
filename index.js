class Student {
    constructor (university, course, fullName, mark) {
        this.university = university
        this.course = course
        this.fullName = fullName
        this.mark = mark
        this.dismiss = false
    }
    getInfo() {
        return `Студент ${this.course} курсу, ${this.university}, ${this.fullName}`
    }

    get markArr() {
        return !this.dismiss ? this.mark : null;
    }

    set markArr(value) {
        if (!this.dismiss) {
            return this.mark.push(value);
        } 
    }

    getAverageMark() {
        let sum = this.mark.reduce((acc, item) => acc + item);
        return sum/this.mark.length
     }

     getDismiss() {
        this.dismiss = true
        console.log(`Студента виключено`);
     }

     getRecovery() {
        this.dismiss = false
        console.log(`Студента поновлено`);
     }
}

const ostap = new Student("Вища школа психотерапії м.Одеса", "1", "Остап Бендер", [5, 4, 4, 5])

console.log(ostap.getInfo());
console.log(ostap.markArr);
ostap.markArr = 5;
console.log(ostap.markArr);
console.log(ostap.getAverageMark());
ostap.getDismiss();
ostap.markArr = 6;
console.log(ostap.markArr);

ostap.getRecovery();
ostap.markArr = 4;
console.log(ostap.markArr);
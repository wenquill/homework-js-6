function User(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 100; i++) {
    const user = new User(
        `Username${i}`,
        `Usersurname${i}`,
        Math.floor(Math.random() * 90),
        Math.random() > 0.5,
        `useremail${i}@gmail.com`,
        Math.random() > 0.5
    );
    users.push(user);
}
console.log('початковий масив:', users);

// 1---------------------------------------------
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// 2---------------------------------------------
const notSubscribed = [];
users.forEach (item => {
    if (!item.isSubscribed) {
        notSubscribed.push(item);
    }
});
console.log('масив непідписаних користувачів:', notSubscribed);

// 3---------------------------------------------
const isFemalePupil = [];
users.map (item => {
    if (!item.isMale && item.age <= 18 && item.age >= 6) {
        isFemalePupil.push(item.getFullName());
    }
});
console.log('масив елементів жіночої статі шкільного віку:', isFemalePupil);

// 4---------------------------------------------
const isEmail = users.findIndex (item => {
    if (item.email === 'useremail5@gmail.com') {
        return item;
    }
});
users.splice(isEmail, 1);
console.log('видалення елемента з емейлом...:', users);

// 5---------------------------------------------
const isSomeEmail = users.some (item => item.email === 'useremail99@gmail.com');
console.log('перевірка на наявність користувача з емейлом...:', isSomeEmail);

// 6---------------------------------------------
const isAllSubscribed = users.every(item => item.isSubscribed)
console.log('перевірка чи всі користувачі підписані:', isAllSubscribed);
const contactBook = {
    contacts: [
        { name: "Маша", phone: "+380931234567", email: "masha@gmaul.com" },
        { name: "Саша", phone: "+380671112233", email: "sasha@gmaul.com" },
        { name: "Андрій", phone: "+380991234321", email: "andriy@gmaul.com" },
        { name: "Катя", phone: "+380501234789", email: "katya@gmaul.com" }
    ],

    findContact(nameToFind) {
        const contact = this.contacts.find(c => c.name === nameToFind);
        if (contact) {
            console.log("Знайдено:", contact);
        } else {
            console.log("Контакт не знайдено");
        }
    },

    addContact(name, phone, email) {
        this.contacts.push({ name, phone, email });
        console.log("Контакт додано.", this.contacts);
    }
};


contactBook.findContact("Катя");
contactBook.addContact("Олег", "+380631112222", "oleg@gmaul.com");
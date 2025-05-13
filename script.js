const contactBook = {
    contacts: [
        { name: "Маша", phone: "+380931234567", email: "masha@gmaul.com" },
        { name: "Саша", phone: "+380671112233", email: "sasha@gmaul.com" },
        { name: "Андрій", phone: "+380991234321", email: "andriy@gmaul.com" },
        { name: "Катя", phone: "+380501234789", email: "katya@gmaul.com" }
    ],

    findContacts(nameStart) {
        const search = nameStart.toLowerCase();
        const results = this.contacts.filter(contact =>
            contact.name.toLowerCase().startsWith(search)
        );
        return results;
    },

    addContact(name, phone, email) {
        this.contacts.push({ name, phone, email });
        console.log("Контакт додано. Список оновлено:", this.contacts);
    }
};


console.log(contactBook.findContacts("ка")); 
console.log(contactBook.findContacts("а"));  

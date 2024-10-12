
let pet = {
    name: prompt("What's your pet's name?"),
    type: prompt("What type of pet is it? (e.g., dog, cat, dragon)"),
    age: 0,
    happiness: 50,
    hunger: 50,

    
    feed : function() {
        if(this.hunger >=0)
        this.hunger = this.hunger - 20;
        alert(`You fed ${this.name}. Hunger is now ${this.hunger}.`);
    },

   
    play : function() {
        if(this.happiness < 100)
        this.happiness =  this.happiness + 20;
        alert(`You played with ${this.name}. Happiness is now ${this.happiness}.`);
    },


    agePet : function() {
        this.age++;
        this.happiness = this.happiness - 5;
        this.hunger = 100, this.hunger + 10;
        alert(`${this.name} is now ${this.age} years old. Happiness: ${this.happiness}, Hunger: ${this.hunger}`);
    },

    getInfo : function() {
        alert(`Name: ${this.name}\nType: ${this.type}\nAge: ${this.age}\nHappiness: ${this.happiness}\nHunger: ${this.hunger}`);
    }
};


while (true) {
    let action = prompt(`What would you like to do with ${pet.name}?\n1: Feed\n2: Play\n3: Age Pet\n4: Get Info\n5: Exit`);

    switch (action) {
        case "1":
            pet.feed();
            break;
        case "2":
            pet.play();
            break;
        case "3":
            pet.agePet();
            break;
        case "4":
            pet.getInfo();
            break;
        case "5":
            alert("Thanks for playing!");
        default:
            alert("Invalid choice. Please try again.");
    }
}
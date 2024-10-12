var pet  = {
    name : 'abc' , 
    type : 'cat' ,
    age : 9,
    happiness : 50 ,
    hunger : 60 ,
    feed : function(){
        if(this.hunger >= 20){
            this.happiness = this.happiness-20;
            console.log(this.happiness)
        }
    },
    play : function(){
        if(this.happiness>=0 && this.happiness<=100){
            this.happiness+=20;
            console.log(this.happiness)
        }
    },
    agePet : function(){
        this.age+=1;
        this.happiness = this.happiness-5;
        this.hunger+=10;

        // console.log(this.age)
        // console.log(this.happiness)
        // console.log(this.hunger)

    },
    getInfo : function(){
        console.log(`Pet Name is ${this.name} Type is ${this.type} age is ${this.age} , happiness ${this.happiness} hunger ${this.hunger}`)
    }
}





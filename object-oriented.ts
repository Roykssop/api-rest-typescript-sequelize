enum Editor{
    MARVEL,
    DC
}

class SuperHero{
    readonly creationYear:number;

    constructor(    
        protected _name:string,
        protected _editor:Editor,
        creationYear: number){
        this.creationYear = creationYear;
    }

    createMessage():string{
        return ` Hola soy  ${this._name}, 
                 formo parte de ${Editor[this._editor]}, 
                 y nací en ${this.creationYear}`;
    }

}

interface CanFly{
    flies(frase:string):void
}

class FlyingHero extends SuperHero implements CanFly{

    flies(frase:string){
        console.log("Estamos volando!")
    }

    constructor(
        public _name:string,
        public _editor:Editor,
        creationYear: number,
        private _fly:boolean){
        super(_name,_editor,creationYear);
        this._fly = _fly;
    }


    get fly():boolean{
        return this._fly;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }


    createMessage():string{
        return ` Hola soy  ${this.name}, 
                 formo parte de ${Editor[this._editor]}, 
                 nací en ${this.creationYear},
                 y ademas puedo volar`;        
    }
}




const Superman = new SuperHero('Superman',Editor.DC,1999);
const Batman = new FlyingHero('Batman',Editor.DC,1999,true);
Batman.name = "Larry";




console.log("Batman", Batman.createMessage());
console.log("Batman", Superman.createMessage());
console.log("Batman name", Batman.name);
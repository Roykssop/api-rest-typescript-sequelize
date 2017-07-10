interface HasName{
    name:string;
}

const heroes:HasName[] = [
    {name: "Superman"},
    {name: "Batman"},
    {name : "Flash"}
];

function cloneArray<T>(array:T[]): T[]{
    return array.slice(0);
}

const clones = cloneArray(heroes);

console.log("Clones", clones);



class SuperHeroes implements HasName{
    constructor(public name:string){}
}

class Heroes extends SuperHeroes{

}

class Villanos extends SuperHeroes{

}

class SuperEquipo<T>{
    constructor(public members:T[], Leader:T){

    }
}

const Rayo = new Heroes("Rayo");
const Guason = new Villanos("Guason");
const Splinter = new Heroes("Splinter");
const Skeletor = new Villanos("Skeletor");

const VelezSquad = new SuperEquipo([Rayo,Guason,Splinter,Skeletor],Guason);
const VelezMembers = VelezSquad.members;
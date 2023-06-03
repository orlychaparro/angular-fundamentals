const username: string = 'Nicolas';
const sum = (a: number, b: number)=> {
  return a + b ;
}
sum(1,2);

class person {
  age: number;
  lastname: string;

  constructor(age: number, lastname:string){
      this.age = age;
      this.lastname=lastname;
  }

}


const nico = new person(48,'Orlando');



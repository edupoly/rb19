interface Person{
  firstname:string,
  lastname:string,
  age:number
};
type Branch='CSE'|'IT'|'ECE'|'MECH'|'CIVIL'
interface Student extends Person{
  marks:Array<number>,
  rollnumber:number,
  branch:Branch,
};

var std1:Student;
std1={
  marks:[11,22,33],
  rollnumber:12312,
  branch:"CIVIL",
  firstname:'praveen',
  lastname:'gubbala',
  age:33
}
export {}
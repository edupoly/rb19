interface Student{
  firstname:string,
  lastname:string,
  age:number,
  marks:Array<number>,
  mobile?:number
}
var students:Array<Student>;
students = [
  {
    firstname:'kiran',
    lastname:'thisas',
    age:34,
    marks:[11,223,4,5]
  },
  {
    firstname:'kiran',
    lastname:'thisas',
    age:34,
    marks:[11,223,4,5]
  },
  {
    firstname:'kiran',
    lastname:'thisas',
    age:34,
    marks:[11,223,4,5]
  },
  {
    firstname:'kiran',
    lastname:'thisas',
    age:34,
    marks:[11,223,4,5]
  },
]

students.push({
  firstname:'rahul',
  lastname:'reddy',
  age:33,
  marks:[11,223,4,5]
})
//Owner Profile

class Owner{
  constructor(fst, lst, teleNum, address, email, dogList, emgFst, emgLst, emgNum){
    this.fstName = fst;
    this.lstName = lst;
    this.number = teleNum;
    this.address = address;
    this.email = email;
    this.dogs = dogList;
    this.emgFstName = emgFst;
    this.emgLstName = emgLst;
    this.emgNumber = emgNum;
  }

  get name(){
    return this.fstName + " " + this.lstName;
  }

  set name(fst, lst){
    this.fstName = fst;
    this.lstName = lst;
  }

  get firstName(){
    return this.fstName;
  }

  set firstName(name){
    this.fstName = name;
  }

  get lastName(){
    return this.lstName;
  }

  set lastName(name){
    this.lstName = name;
  }

  get number(){
    return this.number;
  }

  set number(num){
    this.number = num;
  }

  get address(){
    return this.address;
  }

  set address(newAddress){
    this.address = newAddress;
  }

  get email(){
    return this.email;
  }

  set email(newEmail){
    this.email = newEmail;
  }

  get dogs(){
    return this.dogs;
  }

  set dogs(newDogList){
    this.dogs = newDogList;
  }

  get emgName(){
    return this.emgFstName + " " + this.emgLstName;
  }

  set emgName(fst, lst){
    this.emgFstName = fst;
    this.emgLstName = lst;
  }

  get emgFirstName(){
    return this.emgFstName;
  }

  set emgFirstName(name){
    this.emgFstName = name;
  }

  get emgLastName(){
    return this.emgLstName;
  }

  set emgLastName(name){
    this.emgLstName = name;
  }

}

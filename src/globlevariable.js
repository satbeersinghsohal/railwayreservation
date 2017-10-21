class MyClass {
  constructor(){
      var variable =0;
      var isloggedin =false;
  }
  setvariable = (body) => {
      this.variable = body;
      this.isloggedin =true;
  }
  getvariable = () => {
    return this.variable;
  }
  isloggedin =() => {
      return this.isloggedin;
  }
}

export default (new MyClass);
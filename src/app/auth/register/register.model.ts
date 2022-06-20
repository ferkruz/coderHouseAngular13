export class Register{
    name: string;
    email: string;
    password: string;
    agree?: boolean
    constructor(name: string, email: string, password: string, agree: boolean){   
      this.name = name;   
      this.email = email;
      this.password = password;
      this.agree = agree;
    }
  }
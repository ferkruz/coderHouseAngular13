export class Login{
    email: string;
    password: string;
    remember?: boolean
    constructor(password: string, email: string, remember: boolean){      
      this.email = email;
      this.password = password;
      this.remember = remember;
    }
  }
import { InstituteReg } from "./Models/instituteReg";
import { login } from "./Models/login";
import { std_regi } from "./Models/std_regi";

export class CurrentUser { 
    private static _instance: CurrentUser;
    institute!: InstituteReg;
    student!: std_regi;
    login!: login 
        
    

    setInstitute(inst: InstituteReg) {
        this.setLogin({
            userId:inst.email,
            password:inst.setPassword,
            role:"INSTITUTE"
        })
        this.institute = inst;
    }
    getInstitute(): InstituteReg {
        return this.institute;
    }
    setStudent(s: std_regi) { 
        this.setLogin({
            userId:s.email,
            password:s.password,
            role:"STUDENT"
        })
        this.student = s;
    }
    getStudent(): std_regi{

        return this.student;
    }
    getLogin() { 
        return this.login;
    }
    setLogin(l: login) { 
                 
        this.login = l;
    }

    loadStudent() { }
    loadInstitute() { }
    
    //Singleton Declaration
    private constructor()
    {
        //...
    }

    public static get Instance()
    {
        // Do you need arguments? Make it a regular static method instead.
        return this._instance || (this._instance = new this());
    }
}
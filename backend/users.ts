export class User{
    constructor(public email: string, public name:string, public password: string) {
    }

    matches(another: User): boolean{
        return another !== undefined && another.email == this.email && another.password === this.password
    }
}


export const users: {[key:string]: User} = {
    "ricardo@gmail.com": new User('ricardo@gmail.com', 'Ricardo', '123456'),
    "pedro@gmail.com": new User('pedro@gmail.com', 'Pedro', '123456'),
}

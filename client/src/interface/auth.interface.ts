export interface  ISignup {

    username: string,
    email: string,
    password: string,
    phonenumber?: number

}
export type ILogin = Omit<ISignup, 'username' | 'phonenumber'>
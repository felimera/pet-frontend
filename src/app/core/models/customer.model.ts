export class Customer {
  constructor(
    public firstName: string,
    public lastName: string,
    public homeAddress: string,
    public phone: string,
    public email: string,
    public isOlder: false,
    public userId: number,
    public id?: number
  ) { }
}


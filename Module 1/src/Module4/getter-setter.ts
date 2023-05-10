class BankAccount1 {
    readonly id: number;
    name: string;
    private _balance1: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance1 = balance;
    }

    //getter
    get balanceAll(): number {
        return this._balance1;
    }

    //setter
    set deposit(amount: number) {
        this._balance1 = this._balance1 + amount;
    }

}

const myAccount1 = new BankAccount1(1, "Neasher", 10);
console.log(myAccount1.balanceAll);

myAccount1.deposit = 20;
console.log(myAccount1.balanceAll);
console.log(myAccount1);

class BankAccount {
    readonly id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    getBalance() {
        console.log(`My Current Balance is ${this._balance}`);
    }

    addDeposit(money: number) {
        this._balance = this._balance + money;
    }
}

const myAccount = new BankAccount(1, "Neasher", 10000);
myAccount.getBalance();
myAccount.addDeposit(10000);
console.log(myAccount);



class BankAccount {
    balance: number = 0
    
    constructor(startingBalance: number) {
        this.balance = startingBalance
    }
    deposit(amount: number): number {
        this.balance += amount
        return this.balance
    }
    withdraw (amount: number): number {
        if (amount <= this.balance) {
            this.balance -= amount
        } else {
            console.log("Insufficients Funds")
        }
        return this.balance
    }
    getBalance(): number {
        return this.balance
    }
    
}


class SonAccount extends BankAccount {
    oneDeposit(amount: number): number {
        return this.deposit(amount)
    }
    oneWithdraw(amount: number): number {
        return this.withdraw(amount)
    }
}

class MotherAccount extends BankAccount {
    removeInterest(): number {
        const interest = this.balance * 0.1
        this.withdraw(interest)
        return this.balance
    }
    twoDeposit(amount: number): number {
        return this.deposit(amount)
    }
    twoWithdraw (amount: number): number {
        return this.withdraw(amount)
    }
}
const sonAccount = new SonAccount(0);
console.log("Son Account:",
sonAccount.oneDeposit(0)
)
console.log('Son Account Withdrawal:', sonAccount.oneWithdraw(130))


const MomAccount = new MotherAccount(1000)
console.log("Mother Account:", MomAccount.twoDeposit(500))
console.log('Mother Account Withdrawal:', MomAccount.twoWithdraw(200))
console.log("Mother Account Interest:", MomAccount.removeInterest())

console.log('Son Account Balance:', sonAccount.getBalance())
console.log('Mother Account Balance:', MomAccount.getBalance())
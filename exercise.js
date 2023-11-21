var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(startingBalance) {
        this.balance = 0;
        this.balance = startingBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        return this.balance;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficients Funds");
        }
        return this.balance;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SonAccount.prototype.oneDeposit = function (amount) {
        return this.deposit(amount);
    };
    SonAccount.prototype.oneWithdraw = function (amount) {
        return this.withdraw(amount);
    };
    return SonAccount;
}(BankAccount));
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.removeInterest = function () {
        var interest = this.balance * 0.1;
        this.withdraw(interest);
        return this.balance;
    };
    MotherAccount.prototype.twoDeposit = function (amount) {
        return this.deposit(amount);
    };
    MotherAccount.prototype.twoWithdraw = function (amount) {
        return this.withdraw(amount);
    };
    return MotherAccount;
}(BankAccount));
var sonAccount = new SonAccount(0);
console.log("Son Account:", sonAccount.oneDeposit(0));
console.log('Son Account Withdrawal:', sonAccount.oneWithdraw(130));
var MomAccount = new MotherAccount(1000);
console.log("Mother Account:", MomAccount.twoDeposit(500));
console.log('Mother Account Withdrawal:', MomAccount.twoWithdraw(200));
console.log("Mother Account Interest:", MomAccount.removeInterest());
console.log('Son Account Balance:', sonAccount.getBalance());
console.log('Mother Account Balance:', MomAccount.getBalance());

// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.

enum TransactionType {
  Deposit,
  Withdraw,
}

type Transaction = {
  accountNo: number;
  amount: number;
  type: TransactionType;
};

type BankAccount = {
  accountNo: number;
  firstname: string;
  lastname: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
};

let accounts: BankAccount[] = [];
let transactions: Transaction[] = [];

// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
function createAccount(
  accountNo: number,
  firstname: string,
  lastname: string,
  initialDeposit: number,
  isActive = true,
): BankAccount {
  const transactions = getTransactionHistory(accountNo);
  const createdAccount = {
    accountNo: accountNo,
    firstname: firstname,
    lastname: lastname,
    balance: initialDeposit,
    isActive: isActive,
    transactions: transactions,
  };

  accounts.push(createdAccount);
  return createdAccount;
}

// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
function processTransaction(
  accountNo: number,
  amount: number,
  transactionType: TransactionType,
): string {
  const transaction = {
    accountNo: accountNo,
    amount: amount,
    type: transactionType,
  };

  transactions.push(transaction);
  return `${amount} ${transactionType === TransactionType.Deposit ? "deposited into" : "withdrawn from"} account number ${accountNo}`;
}

// 3. Implement a function `getBalance` that returns the balance of a given account number.
function getBalance(accountNo: number): number | undefined {
  const foundAccount = accounts.find(
    (account) => account.accountNo === accountNo,
  );
  return foundAccount?.balance;
}

// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
function getTransactionHistory(accountNo: number): Transaction[] {
  const foundTransaction = transactions.filter(
    (tran) => tran.accountNo === accountNo,
  );
  return foundTransaction;
}

// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
function checkActiveStatus(accountNo: number): boolean | undefined {
  const foundAccount = accounts.find((acc) => acc.accountNo === accountNo);
  return foundAccount?.isActive;
}

// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.
function closeAccount(accountNo: number): string {
  const foundIndex = accounts.findIndex((acc) => acc.accountNo === accountNo);
  accounts.splice(foundIndex, 1);
  return `Account number ${accountNo} closed`;
}

// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)); // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)); // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)); // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)); // "Insufficient funds for withdrawal"
console.log(getBalance(1)); // 130
console.log(getTransactionHistory(1)); // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)); // true
console.log(closeAccount(1)); // "Account number 1 closed"

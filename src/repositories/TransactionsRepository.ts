import Transaction from '../models/Transaction';


interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getIncome(): number{

  }

  public getBalance(): Balance {
    // TODO
  }

  public create({ title, value, type }: Request): Transaction {
    const transaction = new Transaction({
      title,
      type,
      value,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;

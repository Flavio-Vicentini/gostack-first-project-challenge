import Transaction from '../models/Transaction';

interface createTransactionDTO {
  title:string,
  value:number,
  type: 'income' | 'outcome'
}
interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions
  }

  public getBalance(): Balance {
    const {income, outcome} = this.transactions.reduce((accumulator,transaction) => {
        transaction.type === 'income' ? accumulator.income += transaction.value : accumulator.outcome += transaction.value
        return accumulator
    },
    {
      income:0,
      outcome:0
    })
    const total = income - outcome
    return {income, outcome, total}
  }

  public create({title, value, type}:createTransactionDTO): Transaction {
    const transaction = new Transaction ({title, value, type})
    this.transactions.push(transaction)
    return transaction
  }
}

export default TransactionsRepository;

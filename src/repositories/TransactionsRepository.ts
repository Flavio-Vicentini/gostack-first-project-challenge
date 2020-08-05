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
    const income = this.transactions.reduce((acc,cur) => {
        if (cur.type === 'income'){
            return acc += cur.value
        }else return acc
    },0)
    const outcome = this.transactions.reduce((acc,cur) => {
      if (cur.type === 'outcome'){
          return acc += cur.value
      }else return acc
  },0)
    const balance:Balance = {
      income: income,
      outcome: outcome,
      total:income-outcome
    }
    return balance
  }

  public create({title, value, type}:createTransactionDTO): Transaction {
    const transaction = new Transaction ({title, value, type})
    this.transactions.push(transaction)
    return transaction
  }
}

export default TransactionsRepository;

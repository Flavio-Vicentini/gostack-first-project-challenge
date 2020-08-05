import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Transaction): Transaction {
    if (type !== 'income' && type !== 'outcome') throw Error ("Operation doesn't exists")
    const balance = this.transactionsRepository.getBalance()
    if (type === 'outcome' && value > balance.total) {
      throw Error ("Insufficient funds")
    }
    const transaction = this.transactionsRepository.create({title,value,type})
    return transaction
  }
}

export default CreateTransactionService;

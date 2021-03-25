import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
 import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

 const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsRepository.all()
    const balance = transactionsRepository.getBalance()
    response.json({transactions,balance})
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const createTransaction = new CreateTransactionService (transactionsRepository)
    const transaction = createTransaction.execute(request.body)
    return response.json(transaction)

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;

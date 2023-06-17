import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import './index.css'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleNameInput: '',
    amountInput: '',
    transactionTypeInput: transactionTypeOptions[0].optionId,
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    const updatedList = transactionList.filter(each => each.id !== id)
    this.setState({
      transactionList: updatedList,
    })
  }

  getBalance = () => {
    const {transactionList} = this.state
    let expenses = 0
    let income = 0
    let balance = 0
    transactionList.forEach(each => {
      if (each.transactionTypeInput === transactionTypeOptions[1].optionId) {
        expenses += each.amountInput
      } else {
        income += each.amountInput
      }
    })

    balance = income - expenses
    return balance
  }

  getExpense = () => {
    let expenses = 0
    const {transactionList} = this.state
    transactionList.forEach(each => {
      if (each.transactionTypeInput === transactionTypeOptions[1].optionId) {
        expenses += each.amountInput
      }
    })
    return expenses
  }

  getIncome = () => {
    const {transactionList} = this.state
    let income = 0
    transactionList.forEach(each => {
      if (each.transactionTypeInput === transactionTypeOptions[0].optionId) {
        income += each.amountInput
      }
    })
    return income
  }

  onSubmit = event => {
    event.preventDefault()
    const {titleNameInput, amountInput, transactionTypeInput} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === transactionTypeInput,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      titleNameInput,
      amountInput,
      transactionTypeInput,
      typeOption: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleNameInput: '',
      amountInput: '',
      transactionTypeInput: transactionTypeOptions[0].optionId,
    }))
  }

  titleName = event => {
    this.setState({titleNameInput: event.target.value})
  }

  onAddAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  transactionType = event => {
    this.setState({transactionTypeInput: event.target.value})
  }

  render() {
    const balance = this.getBalance()
    const expenses = this.getExpense()
    const income = this.getIncome()
    const {transactionList, titleNameInput, amountInput} = this.state
    return (
      <div className="main-container">
        <div className="manager-details">
          <h1 className="name">Hi,Richard</h1>
          <p>
            Welcome back to your
            <span className="highLight"> money manager</span>
          </p>
        </div>
        <div className="money-details-container">
          <MoneyDetails income={income} expenses={expenses} balance={balance} />
        </div>
        <div className="transaction-container">
          <div className="transaction-details-container">
            <div className="add-transaction-container">
              <h1>Add Transaction</h1>
              <form className="form-container" onSubmit={this.onSubmit}>
                <label htmlFor="transaction-title">Title</label>
                <input
                  type="text"
                  id="transaction-title"
                  onChange={this.titleName}
                  placeholder="Title"
                  value={titleNameInput}
                />

                <label htmlFor="transaction-amount">Amount</label>
                <input
                  type="text"
                  id="transaction-amount"
                  onChange={this.onAddAmount}
                  placeholder="Amount"
                  value={amountInput}
                />

                <label htmlFor="transaction-type">Type</label>
                <select id="transaction-type" onChange={this.transactionType}>
                  {transactionTypeOptions.map(each => (
                    <option key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>

                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1>History</h1>
              <ul className="history-details">
                <li className="table-head">
                  <p className="title-space">Title</p>
                  <p className="amount-space">Amount</p>
                  <p className="type-space">Type</p>
                  <p className="empty-space"> </p>
                </li>
                {transactionList.map(each => (
                  <TransactionItem
                    key={each.id}
                    title={each.titleNameInput}
                    amount={each.amountInput}
                    type={each.typeOption}
                    deleteTransaction={this.onDeleteTransaction}
                    id={each.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

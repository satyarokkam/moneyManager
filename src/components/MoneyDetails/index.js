import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props
  return (
    <div className="money-details-container">
      <div className="details-container balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="symbol"
        />
        <div className="info-container">
          <p className="text1-styling">Your balance</p>
          <p className="text2-styling" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="details-container income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="symbol"
        />
        <div className="info-container">
          <p className="text1-styling">Your Income</p>
          <p className="text2-styling" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="details-container expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="symbol"
        />
        <div className="info-container">
          <p className="text1-styling">Your Expenses</p>
          <p className="text2-styling" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

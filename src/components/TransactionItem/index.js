import './index.css'

const TransactionItem = props => {
  const {title, amount, type, deleteTransaction, id} = props
  const onDeleteItem = () => {
    deleteTransaction(id)
  }
  return (
    <li className="list-transaction-container">
      <p className="title-space">{title}</p>
      <p className="amount-space">Rs {amount}</p>
      <p className="type-space">{type}</p>
      <button
        onClick={onDeleteItem}
        type="button"
        data-testid="delete"
        className="pic-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-pic"
        />
      </button>
    </li>
  )
}
export default TransactionItem

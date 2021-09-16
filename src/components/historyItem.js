import './historyItem.css'

const HistoryItem = props => {
  const {Item, deleteElement} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = Item
  const onDelete = () => {
    deleteElement(id)
  }

  return (
    <li className="liContainer">
      <div className="itemContainer">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button type="button" className="but" onClick={onDelete} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem

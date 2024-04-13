import './index.css'

const TabItems = props => {
  const {eachTabItems, isActive, updateTheActiveTabId} = props
  const {tabId, displayText} = eachTabItems

  const addStyleForButton = isActive ? 'button-tab' : ''

  const onClickTabItem = () => {
    updateTheActiveTabId(tabId)
  }

  return (
    <li className="list-of-tab-container">
      <button
        className={`tab-item-button ${addStyleForButton}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems

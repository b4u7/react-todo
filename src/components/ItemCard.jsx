import Card from './Card'
import Button from './Button'

const ItemCard = props => {
  const { item, setCompletedStatus, deleteItem } = props

  return (
    <Card>
      <div className="flex">
        <p>{item.title}</p>
        <div className="ml-auto">
          <input
            className="form-checkbox rounded ml-2 text-emerald-500 focus:ring-emerald-500 shadow-md"
            type="checkbox"
            name="completed"
            onChange={setCompletedStatus}
            checked={item.completed}
          />
        </div>
      </div>
      <div className="text-right">
        <Button
          classes="text-red-500 hover:text-red-400 active:text-red-500 focus:text-red-500 underline"
          onClick={deleteItem}
        >
          Delete
        </Button>
      </div>
    </Card>
  )
}

export default ItemCard

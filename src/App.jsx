import { useCallback, useEffect, useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  let [value, setValue] = useState('')

  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) ?? []
  )

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'))

    if (storedItems) {
      setItems(storedItems)
    }
  }, [setItems])

  const handleChange = useCallback(
    event => {
      setValue(event.target.value)
    },
    [setValue]
  )

  const handleSubmit = useCallback(
    event => {
      event.preventDefault()

      let id = items.length ? items[items.length - 1].id + 1 : 0
      setItems([
        ...items.map(obj => obj),
        {
          id,
          title: value,
          completed: false,
        },
      ])

      setValue('')
    },
    [value, items, setValue, setItems]
  )

  const setCompleted = useCallback(
    itemIdx => {
      setItems(
        items.map(item => {
          if (item.id === itemIdx) {
            return {
              ...item,
              completed: !item.completed,
            }
          }

          return item
        })
      )
    },
    [items, setItems]
  )

  const deleteItem = useCallback(
    itemIdx => {
      setItems(items.filter(item => item.id !== itemIdx))
    },
    [items, setItems]
  )

  return (
    <section className="mt-4">
      <div className="mx-auto container space-y-4 max-w-prose">
        <div className="my-8">
          <h1 className="text-xl font-bold">React Todo</h1>
          <p>
            A dead simple todo application powered by React, Vite and
            TailwindCSS.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="newItem"
              className="
                  form-input transition mt-1
                  bg-slate-100 active:bg-white focus:bg-white
                  dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-700 dark:focus:bg-slate-700
                  dark:hover:border-emerald-500 dark:active:border-emerald-500 dark:focus:border-emerald-500
                  dark:active:ring-emerald-500 dark:focus:ring-emerald-500
                  dark:placeholder:text-slate-500
                  dark:text-slate-300
                  rounded-md w-full border-2 border-transparent hover:border-slate-200
                "
              placeholder="What are you trying to achieve today?"
              value={value}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          {value.length > 0 && (
            <div className="text-right">
              <Button
                type="submit"
                classes="
                  bg-transparent
                  hover:bg-slate-200 active:bg-slate-100 focus:bg-slate-100 dark:text-slate-400
                  dark:hover:bg-slate-600 dark:active:bg-slate-500 dark:focus:bg-slate-500
                  dark:hover:text-slate-300 dark:active:text-slate-200 dark:focus:text-slate-200 
                  "
              >
                Create new todo
              </Button>
            </div>
          )}
        </form>
        <h4>Active items</h4>
        {(items.length > 0 && (
          <div className="flex flex-col-reverse space-y-4 space-y-reverse">
            {items.map((item, idx) => (
              <Card key={`${item.title}-${idx}`}>
                <div className="flex">
                  <p>{item.title}</p>
                  <div className="ml-auto">
                    <input
                      className="form-checkbox h-8 w-8 rounded-full ml-2 text-emerald-500 focus:ring-emerald-500 shadow-md cursor-pointer"
                      type="checkbox"
                      name="completed"
                      onChange={() => setCompleted(item.id)}
                      checked={item.completed}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <Button
                    classes="text-red-500 hover:text-red-400 active:text-red-500 focus:text-red-500 underline"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )) || (
          <div className="text-center">
            You've completed every goal for today. Great work!
          </div>
        )}
      </div>
    </section>
  )
}

export default App

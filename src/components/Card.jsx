const Card = props => {
  const { children } = props

  return (
    <div className="p-4 bg-white dark:bg-slate-700 rounded-md shadow-sm dark:shadow-none">
      {children}
    </div>
  )
}

export default Card

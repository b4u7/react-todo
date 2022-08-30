const Button = props => {
  const { children, classes, ...rest } = props

  return (
    <button
      className={`px-4 py-2 transition text-sm font-semibold rounded ${classes}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button

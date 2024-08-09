const Example1 = () => {
  const [val, setVal] = React.useState(0)
  const handleClick = () => {
    setVal(val + 1)
  }
  return <button onClick={handleClick}> Count up from {val} </button>
}

const Example2 = () => {
  React.useEffect(() => {
    console.log("The component rendered successfully")
  })
  return <p> This is the component </p>
}

console.log("Pista: ReactDOM està disponible com a variable:", ReactDOM)

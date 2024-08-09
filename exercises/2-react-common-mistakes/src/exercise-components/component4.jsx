const myProcess = () => {
  let myVar = "a"
  setTimeout(() => {
    myVar = "b"
  }, 0)
  return myVar
}

export const Component4 = () => {
  const myVar = myProcess()

  return <p className="component4">{myVar}</p>
}

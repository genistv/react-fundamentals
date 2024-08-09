import React, { useEffect, useState } from "react"

export const Component2 = ({ input }) => {
  const [myInput, setMyInput] = useState(input)
  useEffect(() => {
    setMyInput(input)
  }, [input])
  console.log("a render for state", input)
  return (
    <div className="component2">
      The content is {myInput} and you should check the console
    </div>
  )
}

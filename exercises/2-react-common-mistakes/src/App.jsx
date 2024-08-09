import { useState } from "react"
import { Component1 } from "./exercise-components/component1"
import { Component2 } from "./exercise-components/component2"
import { Component3 } from "./exercise-components/component3"
import { Component4 } from "./exercise-components/component4"
import { Component5 } from "./exercise-components/component5"

export const App = () => {
  const [inputState, setInputState] = useState("")
  return (
    <>
      <h1> Exercici 2 </h1>
      <section className="enunciat">
        <p>
          Analitza el codi de les components a la carpeta
          src/exercise-components
        </p>
        <p> Entén i experimenta amb el problema que té cada una </p>
      </section>
      <ul>
        <li>
          <h2>Component 1: </h2>
          <Component1 />
        </li>
        <li>
          <h2>Component 2: </h2>
          <input
            value={inputState}
            onChange={(e) => setInputState(e.currentTarget.value)}
          />
          <Component2 input={inputState} />
        </li>
        <li>
          <h2>Component 3: </h2>
          <Component3 />
        </li>
        <li>
          <h2>Component 4: </h2>
          <Component4 />
        </li>
        <li>
          <h2>Component 5: </h2>
          <Component5 />
        </li>
      </ul>
    </>
  )
}

export default App

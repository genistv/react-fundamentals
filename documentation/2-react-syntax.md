# React: Sintaxi bàsica

- Projecte: React fundamentals
- Autors: Genís Torrents
- Última edició: 2023-12-09
- Status: Draft

## L'element clau de la sintaxi: l'arbre de components

La sintaxi de React està dissenyada per tal de:

- Permetre el reaprofitament de components encapsulades
- Representar l'estructura de la pàgina en termes de les components reaprofitables de la manera més propera a HTML possible

---

<aside>
<b>NOTA</b>:
<i> 
Aquests 2 propòsits avui en dia es poden assolir en gran mesura utilitzant Web Components. És possible que al futur proper això acabi desbancant React (així com la solució de problema de la travessabilitat al JS ha acabat desbancant jquery), però a dia d'avui encara hi ha una diferència fonamental entre l'enfocament que proposa React i el de les components web: el primer encapsula model, controlador i vista conjuntament, mentre que el segon només encapsula vistes reusables.
</i>
</aside>

---

A React, doncs, definirem components amb una estructura que recorda molt la d'HTML: seran representades per un nom general (tipus 'tag'), acceptaran una colla d'atributs (no només valors numèrics i textos, també altres valors JS) i possiblement un contingut intern fet d'altres components (o text).

De fet, l'estructura és tan propera a html que enlloc d'utilitzar les eines de JS pròpies de React, gairebé sempre utilitzem un precompilador que ens permet escriure les seves estructures amb la mateixa notació que utilitzem a html. El codi resultant s'anomena JSX. És tan prevalent, que enlloc d'estudiar la forma de definir i combinar components a React pla, descriurem aquests mecanismes directament amb JSX.

No cal dir que la necessitat de precompilar dificulta significativament el desenvolupament quan no fem servir un entorn ja preparat amb un bundler. La llibreria més idònia per la precompilació de JSX és Babel.

## JSX

A React, utilitzem el llenguatge anomenat **JSX** (que serà precompilat a JS però sembla HTML). En aquest llenguatge:

- Podem injectar-hi valors de JS en qualsevol punt envoltant-los de claus, és a dir {}. Dins aquestes claus no podem utilitzar control de flux (if, for, case, etc), però sí operadors ternaris, invocacions, mètodes encadenats, etc.
- Disposem d'una **llibreria de components bàsiques** corresponent als **tags bàsics** d'hmtl: \<p>, \<button>, ..., que accepten gairebé els mateixos atributs que els seus corresponents html, amb les següents consideracions:

  - L'atribut 'class' esdevé 'className' per la col·lisió amb una paraula reservada de JS.
  - Molts atributs que portarien guió (la família data-\*, per exemple) admeten també (o únicament, depèn del cas) la versió en camelCase.
  - Algunes propietats aprofiten el fet que tinguem JS a l'abast per permetre formes més agradables de compondre-les. Així, 'style' passa a acceptar un objecte de JS enlloc d'un text parsejat separat per punt-i-coma.

  El següent fragment de JSX és legítim, per exemple:

  ```JSX
  <section className={class}>
    <h2 className="title-class">This is a big title</h2>
    <p style={{color:"red",fontSize:"24px"}}>{text}</p>
    <input name="myInput" disabled/>
  </section>
  ```

  Noteu la injecció del contingut de la variable classe a la classe d'html de section, i del contingut de la variable text al cos del paràgraf.

  Noteu també la doble clau a style: qualsevol valor que no sigui numèric, text o true implícit (com al disabled de l'input) s'haurà d'injectar com a js, d'ací la clau exterior que envolta l'objecte (amb la clau interior) que descriu l'estil amb parells key-value.

- Tenim mecanismes (de fet, dos: anomenats funcional i component-classe) per definir **components addicionals**, que podem utilitzar dintre el JSX com a tags sempre i quan el seu nom comenci en majúscula. Així, si hem definit (i inclòs al mòdul actual) la component MyComponent, un JSX vàlid seria

  ```JSX
  <section>
    <MyComponent scaleFactor=0.75 rules={rules}/>
    {concluding_text}
  </section>
  ```

- Un fragment de JSX ha d'estar format per una sola entitat, però de tipus molt flexible:

  ```mermaid
  flowchart LR
    M[React.ReactNode]
    M --> |Array of keyed| M
    M --> A["Sense contingut: undefined, null, false, {}"]
    M --> B[Contingut directe: true, string, number]
    M --> C[React.ReactElement]
    C --> |children prop| M
    C --> |other props| E["almost arbitrary types"]
  ```

  Algunes opcions que permet aquesta flexibilitat de tipus a l'hora de definir fragments són:

  - Incloure una component de forma condicional a la pàgina
  - Generar components a partir d'un array

  Vegem-ne exemples:

  ```JSX
  <section>
    {title?<h1>{title}</h1>:null}
    {subtitle && <h2>{subtitle}</h2>}
    {comment ?? <p>Comment missing</p>}
    {['a','b','c'].map((_letter,index)=>{
      return <p key={_letter}>{`${_letter} is the ${index+1}th letter in the alphabet`}</p>
    }))}
  </section>
  ```

- A diferència del cas HTML, no forcem algunes components a ser auto-clausurants i altres a tenir contingut entre un tag d'obertura i un tag de tancament, sinó que qualsevol component es pot fer servir d'ambdues maneres. El contingut entre el tag d'obertura i de clausura s'assimilarà a l'atribut 'children'.

  Quan utilitzem tag d'obertura i clausura, podem incloure diferents nodes al contingut tal com faríem en HTML, ja que el propi JSX els transforma a Array<React.ReactNode>.

  Noteu que no podem fer el mateix per l'entitat principal, per això React ens dóna una component "buida", el React Fragment, que podem escriure en JSX com a <> </>, amb el contingut que convingui a dins.

  Les següents dues verions de JSX són equivalents:

  ```JSX
  const JSX1 = <p>This is <b>important</b></p>
  const JSX2 = <p children={<>This is <b>important</b></>}/>
  ```

  ***

  <aside>
  <b>NOTA</b>:
  <i> 
  Molta gent abusa dels React Fragments. A menys que hi hagi un motiu molt fort pel que el contingut d'un node s'hagi de mesclar amb el de fora, és convenient que les coses que pertanyen a un mateix bloc conceptual tinguin algun tipus de tag amb la semàntica adient agrupant-los.
  </i>
  </aside>

  ***

Sabent JSX, només ens queden 2 passos per poder utilitzar React:

- Saber acoblar JSX a un punt concret del DOM inicial
- Saber definir components addicionals, amb els seus callbacks (inclosos efectes post-render)

## Acoblar React a la pàgina

En les versions més modernes de React, utilitzem la llibreria 'react-dom', responsable de vincular el mecanisme de React a les parts de la pàgina que ho necessiten, per generar una instància de React així:

```JSX
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

const node = document.getElementById('nodeThatDeservesReact')
const JSXToInject = (
  <React.StrictMode>
    <App/>
  </React.StrictMode>
) //Strict mode is not essential, but highly recommended
ReactDOM.createRoot(node, JSXToInject)
```

## Definició de components addicionals: notació funcional

Com hem avançat, hi ha dues maneres (que poden coexistir) de definir components addicionals en React: una de funcional i una de component-classe. Ens centrarem en la primera, utilitzada a partir de React 16 de forma quasi exclusiva, delegant la segona a futures complecions d'aquest manual.

Recordem del tema anterior que per definir una component havíem de fer saber dues qüestions:

- Com pot React generar el DOM virtual d'una component a partir de l'estat que li arriba als atributs (i la part d'estat que gestioni internament)
- Quins callbacks actualitzen els estats coordinats per React i de quina manera, per tal que es pugui generar nous cicles de Render quan convingui (inclosos callbacks d'efectes post-render)

En l'anomenada **sintaxi funcional**, resolem la primera part de la qüestió de la forma més senzilla possible: definim la component com una funció que transforma un objecte d'atributs rebuts en JSX. Tota la resta, és a dir: a) declaració d'estats associats a la component, b) funcions per actualitzar l'estat que necessiten els callbacks, i c) les subscripcions de callbacks als efectes post-render es fan a través de funcions especials anomenades **Hooks** que s'invoquen al cos de la funció definitòria, sempre al nivell arrel i mai de forma condicional.

Els hooks són considerablement complicats i els discutirem amb profunditat més endavant. Per ara, vegem uns exemples senzills:

### Component sense estat:

L'exemple més bàsic de component de React que podem considerar és

```JS
const HelloWorld = ()=> <p>Hello, world</p>
```

### Component amb gestió d'estat

Un dels hooks que poden fer saber a React que volem gestionar un estat persistent entre els diferents Renders d'una component s'anomena **useState**. Aquesta funció de tipus hook, que pren com a argument l'estat inicial, retorna un array amb 2 elements que, a cada render, prenen el valor de 0-> l'estat actual, i 1-> la funció per actualitzar l'estat d'una manera que React pugui controlar. Més endavant en donarem més detalls.

Podem, doncs, fer un comptador així:

```JS
const SimpleCounter = ()=>{
  const [val, setVal] = useState(0)
  const handleClick = ()=>{
    setVal(val+1)
  }
  return <button onClick={handleClick}> Count up from {val} </button>
}
```

### Component amb efecte post-render

Per indicar que volem activar un callback en finalitzar un Render, el podem passar a la funció de tipus hook **useEffect**. Més endavant discutirem diverses subtileses sobre el seu ús

```JS
const NotifyRender = ()=>{
  useEffect(()=>{
    console.log('The component rendered successfully')
  })
  return <p> This is the component </p>
}
```

Podríem combinar les components d'exemple definides més amunt en una altra component definida simplement com

```JS
const CompositeComponent = ({title="default title"})=>{
  return (
    <main>
      <h1>{title}</h1>
      <Helloworld/>
      <SimpleCounter/>
      <NotifyRender/>
    </main>
  )
}
```

I que al seu torn es podria utilitzar en la definició d'una altra component,

```JS
const PassingAttributes = ()=>{
  return <CompositeComponent title="Use this title instead"/>
}
```

Això sí noteu com els atributs esperats per una component i els que els passem encaixen (en aquest cas podem passar title perquè CompositeComponent sap què fer-ne, tot i que si l'ometésim no donaria problemes gràcies al default definit).

## Podem "espiar" el comportament de React?

Les **React devtools** són una extensió de Chrome molt recomanable per a tothom que treballi amb React. Inclouen:

- Components: Permeten consultar l'estat actual del DOM Virtual, veure quins atributs rep cada component, quins hooks hi persisteixen estats i amb quins valors, o quins hi programen efectes post-render (els hooks van numerats, és convenient saber quin és quin quan es fa debugging), etc
- Profiler: Permeten enregistrar els processos de Render de (parts de) la pàgina, i fins i tot saber quin canvi d'estat o de propietat ha disparat un procés de Render per cada component.

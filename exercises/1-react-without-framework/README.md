# Exercici 1:

- Projecte: React fundamentals
- Autors: Genís Torrents
- Última edició: 2023-12-11
- Status: Draft

## Preparació:

En aquesta carpeta hi trobeu un projecte molt senzill: l'única dependència instal·lada, srr, ens permet servir [l'html preparat](./index.html) d'una manera que es vagi actualitzant a mesura que fem canvis al [fitxer jsx](index.jsx) que aquest importa.

---

<aside>
<b>NOTA</b>:

<i>

Per tal de poder treballar amb JSX de manera coherent, s'ha importat React, ReactDOM i Babel directament a l'html, a partir de versions de desenvolupament servides des de la xarxa.

Això permet treballar a index.jsx sense problemes (usant les variables globals de React i ReactDOM ja carregades), però et donarà problemes si vols utilitzar imports/requires d'altre jsx dintre index.jsx.

Aquest tipus de problemes no te'ls trobaràs als projectes habituals en React, en què tot està gestionat pels bundlers. Pots utilitzar aquest projecte com a punt de partida en experiments de React sense bundler o amb bundlers casolans.
</i>

</aside>

---

Per treballar-hi, obre un terminal en aquesta carpeta i utilitza:

1- La instrucció següent per instal·lar la dependència (només cal fer-ho una vegada):

> > npm i

2- La instrucció següent per posar el servidor a servir els documents de la carpeta a localhost (normalment localhost:8080)

> > npm run dev

(nota que això executa l'script 'dev' configurat al package.json, que fa aquesta operació a través de srr)

Si navegues a localhost:8080 (o el que pertoqui) veuràs una pàgina amb l'enunciat principal de l'exercici, que copiem a continuació:

## Enunciat

<section class="enunciat">
  <p>
    Partint de la configuració actual i tocant només l'arxiu "index.jsx",
  </p>
  <ol>
    <li>
      Verifica que pots servir l'aplicació a localhost i que el hot reload
      actua quan fas canvis
    </li>
    <li>Injecta la component de React 'example1' al div #target1</li>
    <li>
      Injecta la component de React 'example2' al div #target2 com una
      instància de React independent
    </li>
    <li>
      Explora les conseqüències de tenir múltiples instàncies de React a les
      devtools de React
    </li>
  </ol>
  <p>Opcionalment, explora els següents exercicis que requereixen manipular la configuració de treball</p>
  </ul>
    <li>(Avançat) fes els canvis convenients per elevar el js a ts</li>
    <li>
      (Avançadíssim) busca una manera de treballar amb React, ReactDom i
      Babel instal·lats a npm, però sense un bundler
    </li>
  </ul>
</section>

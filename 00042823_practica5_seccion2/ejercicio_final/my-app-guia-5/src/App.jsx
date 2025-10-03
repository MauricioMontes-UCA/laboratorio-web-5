import { Card } from './Card.jsx'
import './App.css'

const Scientists = [
  {
    name: "Maria Curie",
    image: '/Marie_Curie.jpg',
    details: {
      profesion: "física y química",
      awards: [
        "Premio Nobel de Física",
        "Premio Nobel de Química",
        "Medalla Davy",
        "Medalla Matteucci"
      ],
      findings: "radio y polonio (elementos químicos)"
    }
  },
  {
    name: "Katsuko Saruhashi",
    image: '/Katsuko_Saruhashi.jpg',
    details: {
      profesion: "geoquímica",
      awards: [
        "Premio Miyake de Geoquímica",
        "Premio Tanaka",
      ],
      findings: "un método para medir el dióxido de carbono en el agua del mar"
    }
  }
]

function App() {

  return (
    <>
      <div>
        <h1>Científicos notables</h1>
        {Scientists.map((s, i) => (
          <Card key={i} scientists={s} />
        ))}
      </div>
      
    </>
  )
}

export default App

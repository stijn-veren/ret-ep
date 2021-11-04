import './App.css'

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{ textAlign: 'left' }}>
        {props.dishes.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  'Macaroni and Cheese',
  'Salmon',
  'Tofu with Vegetables',
  'Minestrone',
]

function App() {
  return (
    <div className="App">
      <Header name="Candy" />
      <Main adjective={<b>delicious</b>} dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  )
}

export default App

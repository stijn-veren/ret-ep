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

const dishes = ['Macaroni and Cheese', 'Salmon', 'Tofu with Vegetables']
dishes.map((dish) => console.log(dish))

function App() {
  return (
    <div className="App">
      <Header name="Candy" />
      <Main adjective={<b>delicious</b>} />
      <Footer year={new Date().getFullYear()} />
    </div>
  )
}

export default App

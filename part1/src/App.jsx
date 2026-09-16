const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by Eugenio
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 20
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="George" age={26+10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

export default App
import Directory from '../../components/directory/Directory'
import './Homepage.sass'

function Homepage() {
  return (
    <main className="homepage page">
      <h1 className="visually-hidden">Homepage - Browse Categories</h1>
      <Directory />
    </main>
  )
}

export default Homepage

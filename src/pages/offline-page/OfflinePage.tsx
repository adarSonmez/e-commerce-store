import LOGO_URL from '../../assets/logo2.png'
import './OfflinePage.sass'

function OfflinePage() {
  return (
    <main className="offline-page" role="alert">
      <header className="header">
        <div className="logo-container">
          <img src={LOGO_URL} alt="My Boutique - Offline Page" />
          <span>My Boutique</span>
        </div>
      </header>
      <section className="offline-message">
        <h1>Offline Mode</h1>
        <h3>
          You are currently offline. Please check your internet connection and
          try again.
        </h3>
      </section>
    </main>
  )
}

export default OfflinePage

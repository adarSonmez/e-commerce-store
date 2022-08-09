import LOGO_URL from '../../assets/logo2.png'
import './OfflinePage.sass'

function OfflinePage() {
  return (
    <div className="offline-page">
      <div className="header">
        <div className="user-name">{}</div>
        <div className="logo-container">
          <img src={LOGO_URL} alt="My Boutique Logo" />
          <span>My Boutique</span>
        </div>
      </div>
      <div className="offline-message">
        <h1>You are offline</h1>
        <h3>
          You are currently offline. Please check your internet connection and
          try again.
        </h3>
      </div>
    </div>
  )
}

export default OfflinePage

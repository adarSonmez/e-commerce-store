import { Section } from '../../store/features/directory/directory.slice'
import { useNavigate } from 'react-router-dom'
import './MenuItem.sass'

// Create clickable menu item component.
function MenuItem({ title, imageUrl, size, linkUrl }: Section) {
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(linkUrl)

  return (
    <button
      className={`${size} menu-item`}
      onClick={onNavigateHandler}
      aria-label={`Navigate to ${title}`}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        role="presentation"
      />
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
      </div>
    </button>
  )
}

export default MenuItem

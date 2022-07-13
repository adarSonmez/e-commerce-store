import { Section } from '../../store/features/directory/directory.slice'
import { useNavigate } from 'react-router-dom'
import './MenuItem.sass'

// Create clickable (navigate to corresponding page) menu item component.
function MenuItem({ title, imageUrl, size, linkUrl }: Section) {
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(linkUrl)

  return (
    <div className={`${size} menu-item`} onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
      </div>
    </div>
  )
}

export default MenuItem

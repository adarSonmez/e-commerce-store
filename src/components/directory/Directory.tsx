import MenuItem from '../menu-item/MenuItem'
import { selectDirectorySections } from '../../store/features/directory/directory.selectors'
import './Directory.sass'
import { useAppSelector } from '../../store/hooks'

function Directory() {
  const sections = useAppSelector(selectDirectorySections)

  return (
    <nav className="directory-menu" aria-label="Main directory navigation">
      <h2 className="visually-hidden">Browse Categories</h2>
      {sections.length === 0 ? (
        <p role="alert" className="empty-directory">No sections available</p>
      ) : (
        sections.map((section) => <MenuItem key={section.id} {...section} />)
      )}
    </nav>
  )
}

export default Directory

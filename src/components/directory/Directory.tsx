import MenuItem from '../menu-item/MenuItem';
import { selectDirectorySections } from '../../store/features/directory/directory.selectors';
import './Directory.scss';
import { useAppSelector } from '../../store/hooks';

// Display each menu item (Iterate through sections).
const Directory = () => {
  const sections = useAppSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;

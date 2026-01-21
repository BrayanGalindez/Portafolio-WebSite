import PropTypes from 'prop-types'
import { getTechnologyIcon } from '../../utils/technologyIcons'

/**
 * Technology icon component
 */
const TechnologyIcon = ({ technology, className = 'text-4xl text-black dark:text-white' }) => {
  const IconComponent = getTechnologyIcon(technology)

  if (!IconComponent) {
    return null
  }

  return (
    <li className={className} aria-label={technology}>
      <IconComponent aria-hidden="true" />
    </li>
  )
}

TechnologyIcon.propTypes = {
  technology: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default TechnologyIcon

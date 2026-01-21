import PropTypes from 'prop-types'

/**
 * Reusable Section component with semantic HTML
 */
const Section = ({
  id,
  children,
  className = '',
  title,
  titleClassName = '',
  ...props
}) => {
  return (
    <section
      id={id}
      className={`py-10 ${className}`}
      {...props}
    >
      <div className="max-w-5xl mx-auto px-4">
        {title && (
          <h2 className={`text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight ${titleClassName}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">
              {title}
            </span>
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string
}

export default Section

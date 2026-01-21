import PropTypes from 'prop-types'

/**
 * Reusable Button component
 */
const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  ariaLabel,
  ...props
}) => {
  const baseClasses = 'font-bold px-4 py-2 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-cyan-500 text-white hover:bg-cyan-400 shadow-md shadow-cyan-500/30 focus:ring-cyan-500',
    secondary: 'bg-slate-700 text-white hover:bg-slate-600 focus:ring-slate-500',
    success: 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-md shadow-emerald-500/30 focus:ring-emerald-500'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string
}

export default Button

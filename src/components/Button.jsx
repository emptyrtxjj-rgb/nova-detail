function Button({ children, href = '#contact' }) {
  return (
    <a href={href} className="primary-button">
      {children}
      <span>↗</span>
    </a>
  )
}

export default Button
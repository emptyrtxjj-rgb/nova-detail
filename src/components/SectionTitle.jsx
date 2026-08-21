function SectionTitle({ number, label, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-number">
        {number}
      </div>

      <div>
        <span className="section-label">
          {label}
        </span>

        <h2>{title}</h2>

        {description && (
          <p>{description}</p>
        )}
      </div>
    </div>
  )
}

export default SectionTitle
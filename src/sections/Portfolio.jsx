import SectionTitle from '../components/SectionTitle'

const projects = [
  {
    number: '01',
    title: 'BMW M4',
    category: 'FULL DETAILING',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=85'
  },
  {
    number: '02',
    title: 'Porsche 911',
    category: 'CERAMIC COATING',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85'
  },
  {
    number: '03',
    title: 'Mercedes AMG',
    category: 'PAINT CORRECTION',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=85'
  }
]

function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <SectionTitle
          number="05"
          label="SELECTED WORK"
          title="Наши работы"
          description="Несколько проектов, которыми мы особенно гордимся."
        />

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="portfolio-card" key={project.number}>
              <div
                className="portfolio-image"
                style={{
                  backgroundImage: `url(${project.image})`
                }}
              />

              <div className="portfolio-info">
                <div>
                  <span>{project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>

                <span className="portfolio-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
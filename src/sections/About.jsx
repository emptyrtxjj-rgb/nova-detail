import SectionTitle from '../components/SectionTitle'

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionTitle
          number="03"
          label="ABOUT NOVA"
          title="Детали создают разницу."
          description="Мы считаем, что качественный детейлинг — это не просто чистый автомобиль. Это внимание к каждой поверхности, линии и детали."
        />

        <div className="about-grid">
          <div className="about-image">
            <div className="image-overlay">
              <span>NOVA DETAIL</span>
              <strong>01</strong>
            </div>
          </div>

          <div className="about-content">
            <p className="large-text">
              Мы объединяем профессиональную
              технологию, качественные материалы
              и внимательную работу мастеров.
            </p>

            <div className="stats">
              <div>
                <strong>5+</strong>
                <span>лет опыта</span>
              </div>

              <div>
                <strong>800+</strong>
                <span>автомобилей</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>внимания к деталям</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
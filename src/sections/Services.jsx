import SectionTitle from '../components/SectionTitle'

const services = [
  {
    number: '01',
    title: 'Premium Detailing',
    text: 'Комплексный уход за экстерьером и интерьером автомобиля.'
  },
  {
    number: '02',
    title: 'Paint Correction',
    text: 'Профессиональная полировка и восстановление лакокрасочного покрытия.'
  },
  {
    number: '03',
    title: 'Ceramic Coating',
    text: 'Керамическая защита кузова с глубоким блеском и гидрофобным эффектом.'
  },
  {
    number: '04',
    title: 'PPF Protection',
    text: 'Защитная плёнка для сохранения кузова от мелких повреждений.'
  }
]

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionTitle
          number="02"
          label="WHAT WE DO"
          title="Услуги"
          description="Создаём безупречный внешний вид автомобиля и защищаем результат надолго."
        />

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>

              <div className="card-arrow">↗</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
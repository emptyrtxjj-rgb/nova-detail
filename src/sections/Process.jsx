import SectionTitle from '../components/SectionTitle'

const steps = [
  {
    number: '01',
    title: 'Осмотр',
    text: 'Определяем состояние автомобиля и подбираем необходимые процедуры.'
  },
  {
    number: '02',
    title: 'Подготовка',
    text: 'Тщательно подготавливаем поверхности перед основной работой.'
  },
  {
    number: '03',
    title: 'Детейлинг',
    text: 'Выполняем выбранный комплекс процедур с контролем каждого этапа.'
  },
  {
    number: '04',
    title: 'Результат',
    text: 'Проверяем автомобиль и передаём его владельцу полностью готовым.'
  }
]

function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionTitle
          number="04"
          label="HOW IT WORKS"
          title="Процесс"
          description="Простой и понятный путь от первого осмотра до идеального результата."
        />

        <div className="process-list">
          {steps.map((step) => (
            <div className="process-item" key={step.number}>
              <span className="process-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              <span className="process-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
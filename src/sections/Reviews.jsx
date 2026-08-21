import SectionTitle from '../components/SectionTitle'

const reviews = [
  {
    text: 'Машина после детейейлинга выглядит совершенно иначе. Отдельно понравилось внимание к каждой детали.',
    name: 'Александр К.',
    car: 'BMW M4'
  },
  {
    text: 'Очень аккуратная работа и отличный результат. Особенно понравился глубокий блеск после покрытия.',
    name: 'Данияр С.',
    car: 'Porsche 911'
  },
  {
    text: 'Получил именно тот результат, который хотел. Команда подробно объяснила каждый этап работы.',
    name: 'Марат А.',
    car: 'Mercedes AMG'
  }
]

function Reviews() {
  return (
    <section className="section reviews">
      <div className="container">
        <SectionTitle
          number="06"
          label="CLIENT EXPERIENCE"
          title="Отзывы"
          description="Нам важно не только качество работы, но и впечатление клиента."
        />

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article className="review-card" key={index}>
              <div className="stars">★★★★★</div>

              <p>“{review.text}”</p>

              <div className="review-author">
                <strong>{review.name}</strong>
                <span>{review.car}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
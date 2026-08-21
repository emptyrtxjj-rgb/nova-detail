import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionTitle
          number="07"
          label="GET IN TOUCH"
          title="Готовы преобразить ваш автомобиль?"
          description="Свяжитесь с нами, расскажите о вашем автомобиле и получите индивидуальную консультацию."
        />

        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <span>PHONE</span>
              <a href="tel:+77000000000">
                +7 700 000 00 00
              </a>
            </div>

            <div>
              <span>INSTAGRAM</span>
              <a href="#contact">
                @novadetail
              </a>
            </div>

            <div>
              <span>LOCATION</span>
              <p>Шымкент, Казахстан</p>
            </div>
          </div>

          {submitted ? (
            <div className="form-success">
              <span>✓</span>

              <h3>Заявка отправлена</h3>

              <p>
                Спасибо! Мы свяжемся с вами
                для уточнения деталей.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Отправить ещё раз
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <label>
                Ваше имя

                <input
                  type="text"
                  placeholder="Введите имя"
                  required
                />
              </label>

              <label>
                Телефон

                <input
                  type="tel"
                  placeholder="+7 ___ ___ __ __"
                  required
                />
              </label>

              <label>
                Услуга

                <select
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Выберите услугу
                  </option>

                  <option>
                    Детейлинг
                  </option>

                  <option>
                    Полировка
                  </option>

                  <option>
                    Керамическое покрытие
                  </option>

                  <option>
                    Защитная плёнка
                  </option>
                </select>
              </label>

              <button type="submit">
                Отправить заявку

                <span>↗</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
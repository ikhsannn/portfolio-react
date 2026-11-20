import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { testimonials } from '../data/site.js'

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionTitle eyebrow="Testimonials" title="What clients say" center />
      <Reveal delay={100}>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          speed={600}
          autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
            1700: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <i className="bi bi-quote text-4xl leading-none text-accent" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                  />
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.title}</p>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </Section>
  )
}

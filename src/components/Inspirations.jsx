
import ins1 from '../assets/Inspiratons/Inspiration1.png'
import ins2 from '../assets/Inspiratons/Inspiration2.png'
import ins3 from '../assets/Inspiratons/Inspiration3.png'

const slides = [ins1, ins2, ins3]

const Inspirations = () => {
  return (
    <section className='bg-stone section-y'>
      <div className='container-x grid items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16'>
        <div>
          <p className='eyebrow'>Inspiration</p>
          <h2 className='section-title mt-3'>50+ Beautiful rooms inspiration</h2>
          <p className='mt-5 max-w-md text-sm sm:text-base leading-relaxed text-muted'>
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <button className='btn-primary mt-8'>Explore More</button>
        </div>

        <div>
          {/* Horizontal swipe on phones, three columns from tablet up */}
          <div className='-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0'>
            {slides.map((src, i) => (
              <div key={i} className='w-[70%] shrink-0 snap-center overflow-hidden sm:w-auto'>
                <img
                  src={src}
                  alt={`Room inspiration ${i + 1}`}
                  className='aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105'
                />
              </div>
            ))}
          </div>
          <div className='mt-6 flex items-end justify-between'>
            <div>
              <p className='text-xs uppercase tracking-luxe text-muted'>01 — Bed Room</p>
              <p className='mt-1 font-serif text-2xl'>Inner Peace</p>
            </div>
            <div className='flex gap-2' aria-hidden='true'>
              <span className='h-1.5 w-6 bg-primary' />
              <span className='h-1.5 w-1.5 bg-line' />
              <span className='h-1.5 w-1.5 bg-line' />
              <span className='h-1.5 w-1.5 bg-line' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inspirations

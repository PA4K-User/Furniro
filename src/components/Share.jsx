import share1 from '../assets/Share/share1.png'
import share2 from '../assets/Share/share2.png'
import share3 from '../assets/Share/share3.png'
import share4 from '../assets/Share/share4.png'
import share5 from '../assets/Share/share5.png'
import share6 from '../assets/Share/share6.png'
import share7 from '../assets/Share/share7.png'
import share8 from '../assets/Share/share8.png'
import share9 from '../assets/Share/share9.png'

const images = [share1, share2, share3, share4, share5, share6, share7, share8, share9]

const Share = () => {
  return (
    <section className='container-x section-y text-center'>
      <p className='eyebrow'>Share your setup with</p>
      <h2 className='section-title mt-3'>#FuniroFurniture</h2>
      <div className='mx-auto mt-12 grid max-w-5xl grid-cols-3 gap-2 sm:gap-4'>
        {images.map((src, i) => (
          <div key={i} className='aspect-square overflow-hidden bg-stone'>
            <img
              src={src}
              alt={`Customer setup ${i + 1}`}
              className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Share

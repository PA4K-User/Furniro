import dining from '../assets/BrowseTheRange/Dining.png'
import living from '../assets/BrowseTheRange/Living.png'
import bedroom from '../assets/BrowseTheRange/Bedroom.png'

const rooms = [
  { name: 'Dining', img: dining },
  { name: 'Living', img: living },
  { name: 'Bedroom', img: bedroom },
]

const BrowseTheRange = () => {
  return (
    <section className='container-x section-y'>
      <div className='mx-auto max-w-xl text-center'>
        <p className='eyebrow'>Collections</p>
        <h2 className='section-title mt-3'>Browse The Range</h2>
        <p className='mt-4 text-sm sm:text-base text-muted'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-16 lg:gap-8'>
        {rooms.map((room) => (
          <figure key={room.name} className='group'>
            <div className='aspect-[4/5] overflow-hidden bg-stone'>
              <img
                src={room.img}
                alt={room.name}
                className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
              />
            </div>
            <figcaption className='mt-5 text-center font-serif text-2xl'>{room.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default BrowseTheRange

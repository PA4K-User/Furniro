import interiorBg from '../assets/banner/interiorBg.png'

const Banner = () => {
  return (
    <section className='relative'>
      <img
        src={interiorBg}
        alt='Interior living room'
        className='h-[60vh] min-h-[380px] w-full object-cover lg:h-[88vh]'
      />
      {/* Card overlaps the photo on phones/tablets, floats on the right on desktop */}
      <div className='relative -mt-16 mx-5 sm:mx-8 bg-ivory p-8 sm:p-12 lg:absolute lg:right-12 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[520px] lg:-translate-y-1/2 xl:right-24'>
        <p className='eyebrow'>New Arrival</p>
        <h1 className='mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]'>
          Discover Our <br /> New Collection
        </h1>
        <p className='mt-6 max-w-md text-sm sm:text-base leading-relaxed text-muted'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam.
        </p>
        <button className='btn-primary mt-8'>Buy Now</button>
      </div>
    </section>
  )
}

export default Banner

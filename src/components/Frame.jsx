import support from '../assets/Frame/customer-support.svg'
import guarantee from '../assets/Frame/guarantee.svg'
import shipping from '../assets/Frame/shipping.svg'
import trophy from '../assets/Frame/trophy.svg'

const features = [
  { icon: trophy, title: 'High Quality', text: 'Crafted from top materials' },
  { icon: guarantee, title: 'Warranty Protection', text: 'Over 2 years' },
  { icon: shipping, title: 'Free Shipping', text: 'Order over 150 $' },
  { icon: support, title: '24 / 7 Support', text: 'Dedicated support' },
]

const Frame = () => {
  return (
    <section className='border-y border-line bg-stone'>
      <div className='container-x grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16'>
        {features.map((f) => (
          <div key={f.title} className='flex items-center gap-4'>
            <img src={f.icon} alt='' className='h-9 w-9 shrink-0' />
            <div>
              <h3 className='font-serif text-xl'>{f.title}</h3>
              <p className='text-sm text-muted'>{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Frame

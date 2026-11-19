
import syltherine from '../assets/OurProducts/Syltherine.png'
import leviosa from '../assets/OurProducts/Leviosa.png'
import lolito from '../assets/OurProducts/Lolito.png'
import respira from '../assets/OurProducts/Respira.png'
import grifo from '../assets/OurProducts/Grifo.png'
import muggo from '../assets/OurProducts/Muggo.png'
import pingky from '../assets/OurProducts/Pingky.png'
import potty from '../assets/OurProducts/Potty.png'

const products = [
  { name: 'Syltherine', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', badge: '-30%', img: syltherine },
  { name: 'Leviosa', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', img: leviosa },
  { name: 'Lolito', desc: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', badge: '-30%', img: lolito },
  { name: 'Respira', desc: 'Outdoor bar table and stool', price: 'Rp 500.000', badge: 'New', img: respira },
  { name: 'Grifo', desc: 'Night lamp', price: 'Rp 1.500.000', badge: '-30%', img: grifo },
  { name: 'Muggo', desc: 'Small mug', price: 'Rp 150.000', oldPrice: 'Rp 3.500.000', badge: 'New', img: muggo },
  { name: 'Pingky', desc: 'Cute bed set', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', badge: '-30%', img: pingky },
  { name: 'Potty', desc: 'Minimalist flower pot', price: 'Rp 500.000', badge: 'New', img: potty },
]

const ProductCard = ({ product }) => (
  <article className='group'>
    <div className='relative aspect-[3/4] overflow-hidden bg-stone'>
      <img
        src={product.img}
        alt={product.name}
        className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
      />
      {product.badge && (
        <span className='absolute left-3 top-3 bg-ivory px-3 py-1 text-[10px] font-medium uppercase tracking-widest'>
          {product.badge}
        </span>
      )}
      {/* Always visible on touch screens, revealed on hover for desktop */}
      <div className='absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-ivory/95 p-3 transition-all duration-300 lg:translate-y-full lg:group-hover:translate-y-0'>
        <button className='btn-primary w-full py-2.5!'>Add to cart</button>
        <div className='flex justify-between text-[11px] uppercase tracking-widest text-muted'>
          <button className='hover:text-ink'>Share</button>
          <button className='hover:text-ink'>Compare</button>
          <button className='hover:text-ink'>Like</button>
        </div>
      </div>
    </div>
    <div className='mt-4'>
      <h3 className='font-serif text-xl'>{product.name}</h3>
      <p className='mt-1 text-sm text-muted'>{product.desc}</p>
      <p className='mt-2 text-sm font-medium'>
        {product.price}
        {product.oldPrice && <span className='ml-2 font-light text-muted line-through'>{product.oldPrice}</span>}
      </p>
    </div>
  </article>
)

const OurProducts = () => {
  return (
    <section className='container-x pb-16 sm:pb-20 lg:pb-28'>
      <div className='text-center'>
        <p className='eyebrow'>Shop</p>
        <h2 className='section-title mt-3'>Our Products</h2>
      </div>
      <div className='mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14'>
        {products.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
      <div className='mt-14 flex justify-center'>
        <button className='btn-outline'>Show More</button>
      </div>
    </section>
  )
}

export default OurProducts

import { useState, useEffect } from 'react'

const DATA_URL = 'https://raw.githubusercontent.com/kongvut/thai-province-data/master'

const BillingDetails = () => {
  const [provinces, setProvinces] = useState([])
  const [amphures, setAmphures] = useState([])
  const [tambons, setTambons] = useState([])

  const [country, setCountry] = useState('')
  const [provinceId, setProvinceID] = useState(0)
  const [amphureId, setAmphureID] = useState(0)
  const [, setTambonID] = useState(0)

  useEffect(() => {
    fetch(`${DATA_URL}/api_province.json`).then((r) => r.json()).then(setProvinces)
    fetch(`${DATA_URL}/api_amphure.json`).then((r) => r.json()).then(setAmphures)
    fetch(`${DATA_URL}/api_tambon.json`).then((r) => r.json()).then(setTambons)
  }, [])

  const label = (item) => `${item.name_th} - ${item.name_en}`

  return (
    <section className='container-x section-y'>
      <div className='grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20'>
        {/* Billing form */}
        <div>
          <h2 className='text-3xl sm:text-4xl'>Billing details</h2>
          <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <div>
              <label htmlFor='first-name' className='field-label'>First Name</label>
              <input id='first-name' type='text' className='field' />
            </div>
            <div>
              <label htmlFor='last-name' className='field-label'>Last Name</label>
              <input id='last-name' type='text' className='field' />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='company' className='field-label'>Company Name (Optional)</label>
              <input id='company' type='text' className='field' />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='country' className='field-label'>Country</label>
              <select id='country' className='field' onChange={(e) => setCountry(e.target.value)}>
                <option value=''>Choose Country</option>
                <option value='US'>United States</option>
                <option value='TH'>Thailand</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='province' className='field-label'>Province</label>
              <select id='province' className='field' onChange={(e) => setProvinceID(e.target.value)}>
                <option value=''>Choose Province</option>
                {country === 'TH' &&
                  provinces.map((item) => (
                    <option key={item.id} value={item.id}>{label(item)}</option>
                  ))}
              </select>
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='district' className='field-label'>District</label>
              <select id='district' className='field' onChange={(e) => setAmphureID(e.target.value)}>
                <option value=''>Choose District</option>
                {amphures
                  .filter((item) => item.province_id == provinceId)
                  .map((item) => (
                    <option key={item.id} value={item.id}>{label(item)}</option>
                  ))}
              </select>
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='sub-district' className='field-label'>Sub-District</label>
              <select id='sub-district' className='field' onChange={(e) => setTambonID(e.target.value)}>
                <option value=''>Choose Sub-District</option>
                {tambons
                  .filter((item) => item.amphure_id == amphureId)
                  .map((item) => (
                    <option key={item.id} value={item.id}>{label(item)}</option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor='zip' className='field-label'>ZIP code</label>
              <input id='zip' type='text' className='field' />
            </div>
            <div>
              <label htmlFor='phone' className='field-label'>Phone</label>
              <input id='phone' type='tel' className='field' />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='email' className='field-label'>Email address</label>
              <input id='email' type='email' className='field' />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='additional' className='field-label'>Additional Information</label>
              <input id='additional' type='text' className='field' />
            </div>
          </div>
        </div>

        {/* Order summary */}
        <aside className='h-fit border border-line bg-stone p-6 sm:p-10 lg:sticky lg:top-28'>
          <h2 className='text-3xl sm:text-4xl'>Your order</h2>
          <dl className='mt-8 grid grid-cols-[1fr_auto] gap-y-4 text-sm'>
            <dt className='text-xs uppercase tracking-widest text-muted'>Product</dt>
            <dd className='text-right text-xs uppercase tracking-widest text-muted'>Subtotal</dd>
            <dt><span className='text-muted'>Asgaard sofa</span> × 1</dt>
            <dd className='text-right'>Rs. 250,000.00</dd>
            <dt>Subtotal</dt>
            <dd className='text-right'>Rs. 250,000.00</dd>
            <dt className='border-t border-line pt-4 font-medium'>Total</dt>
            <dd className='border-t border-line pt-4 text-right font-serif text-2xl font-semibold text-primary'>
              Rs. 250,000.00
            </dd>
          </dl>

          <fieldset className='mt-8 flex flex-col gap-3 border-t border-line pt-8 text-sm'>
            <legend className='sr-only'>Payment method</legend>
            {['Direct Bank Transfer', 'Direct Bank Transfer', 'Cash On Delivery'].map((method, i) => (
              <label key={i} className='flex cursor-pointer items-center gap-3 text-muted hover:text-ink'>
                <input type='radio' name='payment' defaultChecked={i === 0} className='accent-primary' />
                {method}
              </label>
            ))}
          </fieldset>

          <p className='mt-8 text-xs leading-relaxed text-muted'>
            Your personal data will be used to support your experience throughout this website, to manage
            access to your account, and for other purposes described in our{' '}
            <span className='font-medium text-ink'>privacy policy.</span>
          </p>
          <button className='btn-primary mt-8 w-full'>Place order</button>
        </aside>
      </div>
    </section>
  )
}

export default BillingDetails

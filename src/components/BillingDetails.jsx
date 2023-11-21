import React,{useState, useEffect} from 'react'

const BillingDetails = () => {

  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);

  const [provinceId, setProvinceID] = useState(0);
  const [amphureId, setAmphureID] = useState(0);
  const [tambonId, setTambolID] = useState(0);  

  useEffect(() => {
    (() => {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json"
      )
        .then((response) => response.json())
        .then((result) => {
          setProvinces(result);
        });
    })();
  }, []);

  useEffect(() => {
    (() => {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json"
      )
        .then((response) => response.json())
        .then((result) => {
          setAmphures(result);
        });
    })();
  }, []);

  useEffect(() => {
    (() => {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json"
      )
        .then((response) => response.json())
        .then((result) => {
          setTambons(result);
        });
    })();
  }, []);
  
  useEffect(() => {
    if(provinceId && amphureId && tambonId){
        console.log(provinceId + "" + amphureId + "" + tambonId)
    }
    console.log(provinceId);    
  },[provinceId])
    
  return (
    <>
        <div className='w-full max-w-[1960px] mx-auto h-auto mt-10'>
            <h1 className='text-3xl font-bold mb-4'>Billing details</h1>            
            <div className='grid xl:grid-cols-2'>
                <div className='grid grid-cols gap-24 font-bold pb-16'>
                    <div className='flex justify-start gap-12'>
                        <div>
                            <label htmlFor="">First Name</label> <br />
                            <input type="text" className='bg-white rounded-[10px] border border-[#9F9F9F] mt-4 h-16' size={26} />
                        </div>
                        <div>
                            <label htmlFor="">Last Name</label> <br />
                            <input type="text" className='bg-white rounded-[10px] border border-[#9F9F9F] mt-4 h-16' size={26} />
                        </div>                                        
                    </div>
                    <div>
                        <label htmlFor="">Company Name (Optional)</label> <br />
                        <input type="text" className='bg-white rounded-[10px] border border-[#9F9F9F] mt-4 h-16' size={65} />                        
                    </div>
                    <div>
                        <label htmlFor="">Country</label> <br />
                        <select className='bg-white text-left text-gray-400 rounded-[10px] border border-[#9F9F9F] pl-4 mt-4 h-16 w-[54%]' >
                            <option label='Choose Country'></option>
                            <option value="US">United States</option>
                            <option value="TH">Thailand</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>                       
                    </div>
                    <div>
                        <label htmlFor="">Province</label> <br />
                        <select onChange={(e) => setProvinceID(e.target.value)} className='bg-white text-left text-gray-400 rounded-[10px] border border-[#9F9F9F] pl-4 mt-4 h-16 w-[54%]'>
                            <option label='Choose Province'></option>
                            {
                                provinces.map((item)=> {
                                    return (
                                        <option
                                            key={item.id}
                                            value={item.id}
                                            label={`${item.name_th} - ${item.name_en}`}                                            
                                        />
                                    )
                                })
                                
                            }
                        </select>                                               
                    </div>
                    <div>
                        <label htmlFor="">District</label> <br />
                        <select onChange={(e) => setAmphureID(e.target.value)} className='bg-white text-left text-gray-400 rounded-[10px] border border-[#9F9F9F] pl-4 mt-4 h-16 w-[54%]'>
                            <option label='Choose District'></option>
                            {
                                amphures.map((item) => {                                                                         
                                    return(
                                        <option
                                            key={item.id}
                                            value={item.id}
                                            label={`${item.name_th} - ${item.name_en}`}                                            
                                        />
                                    )                     
                                })
                            }
                        </select>                                               
                    </div>
                    <div>
                        <label htmlFor="">Sub-District</label> <br />
                        <select onChange={(e) => setTambolID(e.target.value)} className='bg-white text-left text-gray-400 rounded-[10px] border border-[#9F9F9F] pl-4 mt-4 h-16 w-[54%]'>
                            <option label='Choose Sub-District'>Choose Sub-District</option>
                            {
                                tambons.map((item) => {
                                    return(
                                        <option
                                            key={item.id}
                                            value={item.id}
                                            label={`${item.name_th} - ${item.name_en}`}                                            
                                        />
                                    )
                                })
                            }
                        </select>                                               
                    </div>
                    <div>
                        <label htmlFor="">ZIP code</label> <br />
                        <input type="text" className='bg-white rounded-[10px] border border-[#9F9F9F] mt-4 h-16' size={65} />                        
                    </div>
                    <div>
                        <label htmlFor="">Phone</label> <br />
                        <input type="text" className='bg-white rounded-[10px] border border-[#9F9F9F] mt-4 h-16' size={65} />                        
                    </div>
                    <div>
                        <label htmlFor="">Email address</label> <br />
                        <input type="text" className='bg-white rounded-[10px] border border-[#9F9F9F] mt-4 h-16' size={65} />                        
                    </div>
                    <div>                        
                        <input type="text" placeholder='Additional Information' className='bg-white text-left text-gray-400 rounded-[10px] border border-[#9F9F9F] pl-4 mt-4 h-16' size={63} />                        
                    </div>
                </div>
                <div className='w-[608px] h-[789px] mx-auto px-10 text-2xl'>
                    <div className='flex justify-between '>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-bold text-4xl'>Product</h2>
                            <p><span className='text-gray-400'>Asgaard sofa</span> x 1</p>
                            <p>Subtotal</p>
                            <p>total</p>
                        </div>
                        <div className='flex flex-col items-end gap-4'>
                            <h2 className='font-bold text-4xl'>Subtotal</h2>
                            <p>Rs. 250,000.00</p>
                            <p>Rs. 250,000.00</p>
                            <p className='text-primary font-bold text-4xl'>Rs. 250,000.00</p>
                        </div>
                    </div>
                    <hr className='my-10'/>
                    <div className='mb-10'>
                        <ul className='text-gray-400 list-disc flex flex-col gap-4'>
                            <li className='hover:text-black'>Direct Bank Transfer</li>
                            <li className='hover:text-black'>Direct Bank Transfer</li>
                            <li className='hover:text-black'>Cash On Delivery</li>
                        </ul>
                    </div>
                    <p>Your personal data will be used to support your experience <br />
                    throughout this website to manage access to your account, and <br />
                    for other purposes described in out <span className='text-black font-bold'>privacy policy.</span>
                    </p>
                    <div className='flex justify-center mt-8'>
                        <button className='text-center text-black border border-black px-14 py-2 rounded-xl'>Place order</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


export default BillingDetails
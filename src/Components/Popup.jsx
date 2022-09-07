import React from 'react'
import Dropdown from './Dropdown';
import Input from './Input';
import './Popup.css';
import Delete from './Delete';
import Warning from './Warning';
import Button from './Button';
import { useState } from 'react';
const Popup = ({handleShow}) => {

  const [price,setPrice] = useState(150);
  const [price2,setPrice2] = useState("9,00,000");
  const [show,setShow] = useState(true);
  const [discount,setDiscount] = useState("67,500")
  
  const [total,setTotal] = useState("64,38,274")
  const handleClick=()=>{
   handleShow()
  }
  const handlePrice = ()=>{
    price ==150?setPrice(1000):setPrice(150);
    price == 150?setPrice2("60,00,000"):setPrice2("9,00,000");
    price==150?setDiscount("67,500"):setDiscount("47,5000");
    price==150?setTotal("64,38,274"):setTotal("4,38,274");
  }
  const handleDelete=()=>{
      setPrice(0);
      setPrice2("0.00");
      setShow(false)
  }

  const handleInput=()=>{
    setPrice(150);
    setPrice2("9,00,000");
    setShow(true)
  }
  return (
    <div>
        <div className='container'>
          <div>
            <div className='heading'>
              <span>Add Discount for Garrick's query</span>
              <span onClick={handleClick} className='crossign'>&#10006;</span>
            </div>
            <div className='heading1'>Choose the discount you want to aplly for this query. You will see the final cost reflectd on <br /> the Summary being shoed taking into account the discount you enter.</div>
            <div className='innercontainer'>
              <div className='inner1'>
                <h3 className='h3'>Enter Discount</h3>
                <p className='p1'>Select from one of the available Discounting Modes</p>
                <p className='mode'>Discount Mode</p>
                <Dropdown />
                <p className='mode2'>Discount Amount</p>
                <Input handleInput={handleInput} price={price}/>
                <Warning show={show} handlePrice={handlePrice} price={price}/>
               <Delete show={show} handleDelete={handleDelete}/>
              {price ==150 &&<p className='warn1' >Discount Ammount Seems bit high</p>} 
               {price ==1000&&<p className='warn2'>You can't give that high discounts, contact Adnin</p>}
               <p className='mode3'>Net Applicable Amount</p>
                <Input  price={price2} color={'#ECEFF1'}/>
              <p  className='p12'>  By clicking Apply Discount you are makeing updates to the cost sheet <br /> that the user can view. Confirm discount on the Summary on the night <br />before clicking on Apply Discount</p>
              <Button price={price}/>
              <p className='p123'>Download Cost Sheet</p>
              </div>
              <div className='inner2'>
              <h3 className='h31' >Summary</h3>
                <p className='p15'>Select from one of the available Units to proceed</p>
                <div className='spanall'> <span className='span1'>Unit number</span><span className='span2'>Gardenia, B 505</span></div>
                <div className='spanall'><span className='span1'>Super Built up Area</span><span className='span21'>1058.7 Sq.Ft</span></div>
                <div className='spanall'><span className='span1'>Base Price Per Sqft</span><span className='span22'>&#8377;5,747</span></div>
                <div className='spanall'><span className='span1'>Total value of Property</span><span className='span23'>&#8377;59,47,382</span></div>
                <div className='spanall'><span className='span1'>GST</span><span className='span24'>&#8377;2,97,369</span></div>
                <div className='spanall'><span className='span1'>Agreement Value</span><span className='span25'>&#8377;62,44,751</span></div>
                <div className='spanall'><span className='span1'>Additional & Deposits</span><span className='span26'>&#8377;1,93,523</span></div>
                
                <div className='spanall'><span className='span1'>Discount Per Sqft</span><span className='span27'>-&#8377;{price}</span></div>
                <div className='spanall'><span className='span1'>Net Discount</span><span className='span28'>-&#8377;{price2}</span></div>
                <div className='spanall'><span className='span1'>Discount GSS</span><span className='span29'>-&#8377;{discount}</span></div>
                <div className='lastdiv'>
                  <div className='lastdiv1'><h4>All Inclusive Total</h4>
                  <p className='lastp'>10% Lower than Before</p></div>
                  <div className='lastdiv2'>&#8377;{total}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Popup
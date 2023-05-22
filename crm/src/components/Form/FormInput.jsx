import React, { useMemo, useState } from 'react'
import "./form.scss"
import hide from "../../images/icons/hide.png"
import eye from "../../images/icons/eye.png"

const FormInput = ({name, type, typePassword,placeholder, change, hideShow }) => {
  
  const [show, setShow] = useState(false)


  
  return (
    <div className='form__input_input'>
        <input name={name} type={show?type:typePassword} placeholder={placeholder} onChange={change} autoComplete='new-password'/>
        <i></i>
        {
          hideShow && <button  onClick={(e) => {
            e.target.style.backgroundImage = show ? `url(${hide})` : `url(${eye})`
            setShow(!show)
          }} ></button>
        }
    </div>
  )
}

export  {FormInput}


const SearchForm = () => {
  const categories = [
    {
      name:"electronic",
      title:"Electronic"
    }, {
      name:"fashion",
      title:"Fashion",

    },{
      name:"appliance",
      title:"Appliances"
    },{
      name:"babyStore",
      title:"Baby Store"
    }, {
      name:"winmart",
      title:"Win Mart",
    }, {
      name:"automotive",
      title:"Automotive"
    }, {
      name:"homeLifestyle",
      title:"Home & Lifestyle",
    }
  ]


  return (
    <div className='search'>
          <select>
            <option >All categories</option>
            {
              categories?categories.map((category, index)=>(
                <option value={category.name} key={index}>{category.title}</option>
              )):null
            }
          </select>
          <input name='searchTitle' type='text' className='search_input'/>
          <button className='search_button'></button>
    </div>
  )
}

export {SearchForm}
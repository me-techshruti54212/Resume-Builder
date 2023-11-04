import React from 'react'
import './temp1.css';
import AddBtn from './AddBtn';

function Temp1() {
  return (
      
          <div className='box'>
          <h3>FIRSTNAME LASTNAME</h3>
          <p>address | email</p>
         
          <h5>Chemical Engineer</h5>
          <p>
          Whether you need a portfolio website, an online store, or a personal blog, you can use Squarespace's customizable and responsive website templates to get started.

          </p>
          <h5>Work Exprerience</h5>
          
          
              <li>Policy manager | Lexramax inc</li>   <AddBtn/>
          
          <h5>Skills</h5>
          <li>d1</li>  <AddBtn/>
          <h5>Education</h5>
          <p>Macs process Engineering | dandition</p>
          <AddBtn/>
          <h4>Interests</h4>
          <li>d1</li> 
          <AddBtn/>
          <h5>Awards</h5>
          <li>d1</li>  <AddBtn/>
        </div>

    
  )
}

export default Temp1

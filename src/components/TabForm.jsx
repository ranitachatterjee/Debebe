import React from 'react'
import Baby from './Baby'
import Girls from './Girls'
import Boys from './Boys'

const TabForm = () => {
    const tabs = [
        {
            name: 'Baby',
            component: Baby
        },

              {
                name: 'Girls',
                component: Girls
        },

              {
                name: 'Boys',
                component: Boys
        },
    ]
  return (
    <div>
        <div className='Faves'>
            <h3>Our Faves</h3>
        </div>
        <div className="bestseller">
            <h1>Best sellers</h1>
        </div>
      <div className='heading-container'>
        {
            tabs.map((t)=>{
                return (
                    <div className='heading'>{t.name}</div>
                )
            })
        }
      </div>
      <div>
        <h3>View All</h3>
      </div>
    </div>
  )
}

export default TabForm

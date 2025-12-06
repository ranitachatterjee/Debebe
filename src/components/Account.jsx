import React, { useState } from 'react'
import Register from './Register'
import SignIn from './SignIn'

const Account = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleGoToSignIn = () => setActiveTab(0) // 👈 navigate back to Sign In

  const tabs = [
    { name: 'Sign In', component: SignIn },
    // { name: 'Register', component: Register }
    { name: 'Register', component: () => <Register onGoToSignIn={handleGoToSignIn} /> }
  ]
  

  const ActiveTabComponent = tabs[activeTab].component

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold text-center">My Account</h1>

      <div className="flex justify-center mt-6 gap-4">
        {tabs.map((t, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              px-10 py-3 cursor-pointer rounded-lg shadow-md transition
              ${activeTab === index 
                ? 'bg-amber-200 text-white font-semibold shadow-lg' // ACTIVE TAB STYLE
                : 'bg-white text-gray-700 hover:bg-gray-100'}
            `}
          >
            {t.name}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <ActiveTabComponent />
      </div>
    </div>
  )
}

export default Account


import Header from '@/components/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Header/>
        <main className='max-w-[1440] mx-auto px-7 '>
            {children}
        </main>
    </div>
  )
}

export default layout
import * as React from 'react'
import CustomHeader from './header';

const Layout = ({ children }) => {
  
    return (
    <div className="d-flex h-100 w-100 text-white">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <CustomHeader></CustomHeader>
        {children}
      </div>
    </div>
  )
}

export default Layout
import React, { useState, useEffect } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <div className="footer">
      <h5>© {currentYear} - Therapie Calderone</h5>
    </div>
  )
}

export default Footer

import React from 'react'
import Resume from '../../assets/DogukanSoftwareResume.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'> Download Resume</a>
        <a href='#contact' className='btn btn-primary-purple'> Contact</a>
    </div>
  )
}

export default CTA


import React from 'react';
import '../../Scss/Contact/_contactmap.scss';

const ContactMap = () => {
  return (
   <div className='contactmap'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.154839934632!2d72.85061842562443!3d19.223147621860196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d50b47086b%3A0x35e8622b76b9ff5b!2sPurva%20Plaza%2C%20Shimpoli%20Rd%2C%20OPP%2C%20Meghdoot%2C%20Vivekanand%20Nagar%2C%20Borivali%20West%2C%20Mumbai%2C%20Maharashtra%20400092!5e0!3m2!1smr!2sin!4v1701520562444!5m2!1smr!2sin" className='map'  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
  )
}

export default ContactMap
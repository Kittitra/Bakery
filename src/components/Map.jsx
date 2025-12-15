import React from 'react'

function Map() {

  return (
      <iframe 
        className=' rounded-2xl opacity-85'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6058.317475294325!2d-122.42697262453467!3d37.80655228507789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e156ef0851%3A0xa7bd52699cdd8084!2sCafe%20de%20Casa!5e1!3m2!1sth!2sth!4v1755774387371!5m2!1sth!2sth"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerpolicy="no-referrer-when-downgrade">
       </iframe>
  )
}

export default Map
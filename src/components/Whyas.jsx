import React, {useEffect, useState} from 'react'

const whyas = () => {

  const [apidata, setApiData] = useState()

  useEffect(() =>{
    fetch('http://localhost:8000/whyus.json')
    .then(res => res.json())
    .then(data => setApiData(data))
  }, [])

  return (
    <section id= 'whyas'>
      <div className="wrapper">
        <h2>Why choose Easybank?</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quas nostrum nam quam perferendis, ab quos.</p>

        <div className='cards'>
          { apidata ? apidata.map((data,idx) => <WhyasCards key = {idx}{...data}/>): <></> }
        </div>
      </div>

    </section>
  )
}

const WhyasCards = (props) => {
  return(
    <div className='card'>
      <div className='icon'></div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}
export default whyas
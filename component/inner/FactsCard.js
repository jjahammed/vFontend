import React from 'react'

const FactsCard = ({factItem}) => {
  return (
    <>
    {
      factItem.map((item, i)=>{
        return(
          <div className="facts-card-item facts-card-item-reverse" key={i}>
          <p>{item.names}</p> 
          <div className="fact-icon">
            <img src={item.image} alt="" />
          </div>
        </div>
        )
      })
    }  
    </>
  )
}

export default FactsCard;


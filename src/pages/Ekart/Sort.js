import React from 'react'

export default function Sort(props) {
    console.log(props.cartData);
  return (
    <div className='sort-block'>
      { props.cartData.map((data)=>(
        <p>{data.title}</p>
      )) }
    </div>
  )
}

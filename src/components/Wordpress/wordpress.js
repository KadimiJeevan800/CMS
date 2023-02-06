import React from 'react'
import record from './record.json'
export default function wordpress() {


  return (
    <div>
      <h4 className='bg-dark'>WordPress </h4>
      <table className="table table-hover">
        <thead className="table-secondary">
          <tr>
            <th>Sno</th>
            <th>Title</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
      
          {/*Printing Wordpress json reocrd here  */}
          {
          record.map(record=>{
            return(
              <tr>
              <td>{record.ID}</td>
              <td>{record.title}</td>
              <td ><a className='btn btn-success ' href='https://www.tutorialspoint.com/wordpress/index.htm' target={'_blank'}>link</a></td>
              </tr>
            );
          })
          }    
        </tbody>
      </table>
      
    </div>
  )
}

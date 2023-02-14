import React from 'react'
import record from './record.json'
import AddLinkIcon from '@mui/icons-material/AddLink';
export default function wordpress(props) {


  return (
    <div className='text-center container'>
      <h4 className='bg-light text-dark'>WordPress </h4>
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
          props.record.map(record=>{
            return(
              <tr key={record.ID}>
              <td>{record.ID}</td>
              <td>{record.title}</td>
              <td ><a className='btn btn-success text-white ' href='https://www.tutorialspoint.com/wordpress/index.htm' target={'_blank'}>link <AddLinkIcon/> </a></td>
              </tr>
            );
          })
          }    
        </tbody>
      </table>
      
    </div>
  )
}

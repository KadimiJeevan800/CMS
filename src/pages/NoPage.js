import React from 'react'
import { Link } from 'react-router-dom';
import '../components/content/content.css';
import AddLinkIcon from '@mui/icons-material/AddLink';
function NoPage() {
  return (
    <div className='full-width text-center'>
      <h1>404 Error</h1>
      <h1>Page Not Found Error....</h1>
      {/* <h1>Go to Homepage <a href='/'><AddLinkIcon/></a></h1> */}
      <Link className="hov " to="/"> Go To Home <AddLinkIcon/></Link>
      
    </div>
  )
}

NoPage.propTypes = {

}

export default NoPage


import React,{useState,useEffect} from 'react'
 import Chart, {
  ArgumentAxis,
  Series,
  Legend
} from 'devextreme-react/chart';
import Button from 'devextreme-react/button';
export default function Magento(props) {
  const expandedRowKeys = [1];
  const [count,setCount]=useState(0);
  const [width,setWidth]=useState(window.screen.width);
  const allowedPageSizes = [5, 10];
 const csw=()=>
 {
  setWidth(()=>window.innerWidth);
 }
  useEffect(()=>
  {
    window.addEventListener("resize",csw);
    return()=>
    {
      window.removeEventListener("resize",csw);
    }
  },[width]);
const data = [{
    arg: 1990,
    val: 500
}, {
    arg: 2000,
    val: 600
}, {
    arg: 2010,
    val: 690
}, {
   arg:2020,
   val:630
}];

const sayhello=()=>
{
  alert("Why did you clicked..");
};

  return (
    <div>
      Magento Works!
      <h3><span class="material-symbols-outlined">right_panel_open</span> The Window Screen Size is {width}  <span class="material-symbols-outlined">right_panel_close</span></h3>
    <div className='container flexer'>
    <div><button onClick={()=>(count===0)?setCount(0) :setCount(count-1)} className="btn btn-danger">Dec</button></div>
      <h1>{count}</h1>
    <div><button onClick={()=>setCount(count+1)} className="btn btn-success">Inc</button></div> 
    <div><button onClick={()=>setCount(0)} className="btn btn-warning text-white">Reset</button></div> 

    </div>
    <Button text="Click me" onClick={sayhello} />
    <Chart dataSource={data}>
                <ArgumentAxis tickInterval={3} />
                <Series type="bar" />
                <Legend visible={false} />
            </Chart>

            

           
    </div>
  )


}

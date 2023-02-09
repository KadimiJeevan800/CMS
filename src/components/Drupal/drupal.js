import React from 'react'
import record from './record.json'
import { TreeList, Column,Sorting,Scrolling, Paging, Pager,SearchPanel,HeaderFilter } from 'devextreme-react/tree-list';

export default function drupal(props) {
  const expandedRowKeys = [1];
  const allowedPageSizes = [10, 15];

  return (
    <div  className='text-center container' >
      <h4 className='bg-info text-dark'>Drupal</h4>

    {/* <table className="table table-hover" >
      <thead className="table-primary">
        <tr>
          <th>Sno</th>
          <th>Title</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
    
     
        {
        record.map(record=>{
          return(
            <tr>
            <td>{record.ID}</td>
            <td>{record.title}</td>
            <td ><a className='btn btn-success  text-white' href={record.Link} target={'_blank'}>link</a></td>
            </tr>
          );
        })
        }    
      </tbody>
    </table> */}
        <TreeList
        id="employees"
        dataSource={props.record}
        rootValue={-1}
        defaultExpandedRowKeys={expandedRowKeys}
        showRowLines={true}
        showBorders={true}
        columnAutoWidth={true}
        keyExpr="ID"
        parentIdExpr="Head_ID"
      >
         <Sorting
          mode="multiple" />
            <SearchPanel visible={true} />
            <HeaderFilter visible={true} />
           <Scrolling
          mode="standard" />
        <Paging
          enabled={true}
          defaultPageSize={10} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={allowedPageSizes}
          showInfo={true} />
        <Column
          dataField="ID"
          caption="ID" />
      
        <Column
          dataField="title" caption="Topic" />
          <Column
          dataField="session" /> 
        <Column
          dataField="Link" />  
     
      </TreeList>  
    
  </div>
  )
}

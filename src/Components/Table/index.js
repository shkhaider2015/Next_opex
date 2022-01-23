import React, { useEffect, useState } from "react";
import Link from 'next/link'
import styled from 'styled-components';
import { OpexButton } from "../Button";
import { MAIN_COLORS } from "../../Assets/Constant";

const OpexTable = ({tableData}) => {
  const [selectedRow, setSelectedRow] = useState(-1);
  const [rowsPerPage, setRowsPerPage] = useState("5");
  const [pageNo, setPageNo] = useState(1);
  const [startInd, setStartInd] = useState(0)
  const [endInd, setEndInd] = useState(parseInt(rowsPerPage));

  const handlePageNumber = (val) => {
    if(tableData?.data?.length <= 0) return
    let totalPages = tableData?.data?.length / parseInt(rowsPerPage)
    if(val === "next")
    {
      if(tableData?.data?.length <= 5) return
      if(pageNo === totalPages) return;

      setPageNo(pageNo + 1);
      setStartInd(startInd + parseInt(rowsPerPage));
      setEndInd(endInd + parseInt(rowsPerPage))
    }

    if(val === "back")
    {
      if(pageNo === 1) return

      setPageNo(pageNo - 1)
      setStartInd(startInd - parseInt(rowsPerPage));
      setEndInd(endInd - parseInt(rowsPerPage) )
    }
  }

  useEffect(
    () => {
      setEndInd(parseInt(rowsPerPage))
    }, [rowsPerPage]
  )

  return (
    <OpexTableWrapper>
  {/* <caption>Statement Summary</caption> */}
  <thead>
    <tr>
      {
        tableData?.headers?.map(item => <th scope="col" >{item}</th> )
      }
    </tr>
  </thead>
  <tbody>
    {
      tableData.data.map(item => <tr>
        {
          item.map((itemY, indexY) => 
            indexY === 0
            ? <td scope="row">{itemY}</td>
            : indexY === item.length - 1
              ? <td> <div style={{ width: '100%', padding: '2%' }} > <OpexButton text={itemY} backgroundColor={MAIN_COLORS.PRIMARY_COLOR} textColor={MAIN_COLORS.WHITE} /> </div> </td>
              : <td>{itemY}</td>
          )
        }
      </tr> )
    }
  </tbody>
</OpexTableWrapper>
  );
};


const OpexTableWrapper = styled.table`

  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;


 caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

 tr {
  background-color: ${MAIN_COLORS.WHITE};
  border: 1px solid #ddd;
  padding: .35em;
}

 th,
 td {
  padding: .625em;
  text-align: center;
}

 th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
    border: 0;

   caption {
    font-size: 1.3em;
  }
  
   thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
   tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
   td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
   td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
   td:last-child {
    border-bottom: 0;
  }
}


`;

export default OpexTable;

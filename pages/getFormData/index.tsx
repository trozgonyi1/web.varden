import React, { useState } from 'react';
import { useTable } from "react-table";

type params = {
    columns:any, 
    data:any
};

const DisplayData = async ({ columns, data }:params) => {
    const [ dataLoaded, setDataLoaded ] = useState<Boolean>(false);

    const {
        getTableProps, // Sends the needed props to your table.
        getTableBodyProps, // Sends needed props to your table body
        headerGroups, // Returns normalized header groups
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row in order to be displayed.
      } = useTable({
        columns,
        data
      });

    return (
        <div>

        </div>
    )
}

export default DisplayData;
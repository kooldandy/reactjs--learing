import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

interface IAgGrifExampleProp{

}

const AgGridExample: React.FC<IAgGrifExampleProp> = () => {
  const gridRef = React.useRef<AgGridReact>(null);
  const columnConfig = [
    {headerName: "Make", field: "make", sortable: true, filter: true},
    {headerName: "Model", field: "model", sortable: true, filter: true},
    {headerName: "Price", field: "price", sortable: true, filter: true}

  ];
  const gridData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ];

  const initialGridState = {
    columnDefs: columnConfig,
    rowData: gridData,
  }
  const [gridState, setGridState] = React.useState(initialGridState);

  React.useEffect(() =>{
    //gridRef.current?.columnApi.getColumnState()
  }, [])

  console.log(gridRef.current?.columnApi.getColumnState());

  return (
    <>
      <div
				className="ag-theme-balham"
				style={{
					height: '500px',
					width: '600px'
				}}
			>
				<AgGridReact
          ref={gridRef}
					columnDefs={gridState.columnDefs}
					rowData={gridState.rowData}>
				</AgGridReact>
			</div>
    </>
			
		);
}

export default AgGridExample;
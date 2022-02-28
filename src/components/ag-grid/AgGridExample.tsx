import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

interface IAgGrifExampleProp{

}

interface IAgGrifExampleState{}

const AgGridExample: React.FC<IAgGrifExampleProp> = () => {
  const initialGridState = {
    columnDefs: [
      {headerName: "Make", field: "make"},
      {headerName: "Model", field: "model"},
      {headerName: "Price", field: "price"}

    ],
    rowData: [
      {make: "Toyota", model: "Celica", price: 35000},
      {make: "Ford", model: "Mondeo", price: 32000},
      {make: "Porsche", model: "Boxter", price: 72000}
    ]
  }
  const [gridState, setGridState] = React.useState(initialGridState);

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
					columnDefs={gridState.columnDefs}
					rowData={gridState.rowData}>
				</AgGridReact>
			</div>
    </>
			
		);
}

export default AgGridExample;
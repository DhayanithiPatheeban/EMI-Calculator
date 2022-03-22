import React from "react";
import './App.css';
import './weather.css';

import { Table, TableCell,TableRow, TableHead } from "@material-ui/core";

export default function TableDetails(props){
    return (
        <div>
            <Table style = {{width:'100%',border:'2px solid #ccc'}}>
                <TableHead>
                    <TableRow>
                        <TableCell className="EtableCellText">Loan Amount</TableCell>
                        <TableCell  className="ETableCellVal"><strong>₹</strong>{props.pAmount}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="EtableCellText">Interest %</TableCell>
                        <TableCell  className="ETableCellVal"><strong>₹ </strong>{props.Interest}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="EtableCellText">Tenure (Months)</TableCell>
                        <TableCell  className="ETableCellVal"><strong>₹</strong>{props.Duration}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="EtableCellText">EMI (Monthly)</TableCell>
                        <TableCell  className="ETableCellVal"><strong>₹</strong>{props.emi}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="EtableCellText">Total Interest</TableCell>
                        <TableCell  className="ETableCellVal"><strong>₹</strong>{props.TotalAmountofInterest}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="EtableCellText" style={{color:"purple"}}><strong>Total Payment <br/> (Loan Amount + Intrerest)</strong></TableCell>
                        <TableCell  className="ETableCellVal"><strong>₹</strong>{props.totalAmt}</TableCell>
                    </TableRow>
                    
                </TableHead>
            </Table>
        </div>
    )
}
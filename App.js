import React,{ useState } from "react";
import './App.css';
import './weather.css';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import  { Typography }  from "@material-ui/core";
import { Table , TableCell , TableRow } from '@material-ui/core';
import TableDetails from "./TableDetails";
import Chart from "./Chart";


const PrettoSlider = withStyles({
   root: {color: 'purple', height: 10},
   thumb: { height:25,width:25,
    background:'white',
    border:'3px solid purple',
    marginTop: -9, marginLeft: -9},
   track: {
     height:10,
     borderRadius:4
   },
   rail: {
     height:10 ,
     borderRadius: 4
   },
  })(Slider);


function App() {

  const [pAmount, setpAmount] = useState(2755000);
  const [Interest, setInterest] = useState(7);
  const [Duration, setDuration] = useState(147);
  const maxValue = 6000000;
  const intMax = 20;
  const maxDuration = 360;

  const intr = Interest / 1200;
  const emi = Duration ? Math.round(pAmount * intr / (1 - (Math.pow(1/(1 + intr), Duration)))) : 0;
  const totalAmt = Duration * emi;
  var TotalAmoutofCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr),(-Duration))));
  const TotalAmountofInterest = Math.round(totalAmt - TotalAmoutofCredit);

  return (
    <div className="weather">
      <center><h1>EMI CALCULATOR</h1></center>
      <div>
        <Typography gutterBotttom>Loan Amount</Typography>
        <PrettoSlider value={pAmount} 
         onChange={(event,vAmt) => {setpAmount(vAmt);}}
         defaultValue={pAmount} 
         max={maxValue}></PrettoSlider>
      </div>
      <div>
        <Typography gutterBotttom>Interest Rate%</Typography>
        <PrettoSlider value={Interest} 
        onChange={(event,vInt) => {setInterest(vInt);}} 
        defaultValue={Interest} 
        max={intMax}></PrettoSlider>
      </div>
      <div>
        <Typography gutterBotttom>Tenure (Months)</Typography>
        <PrettoSlider value={Duration}
         onChange={(event,vDur) => {setDuration(vDur);}} 
         defaultValue={Duration}
         max={maxDuration}></PrettoSlider>
      </div>
      <div className="row">
        <Table>
          <TableRow>
            <TableCell>
              <TableDetails pAmount={pAmount} totalAmt={totalAmt} Interest={Interest} Duration={Duration} emi={emi} TotalAmountofInterest={TotalAmountofInterest}></TableDetails>
            </TableCell>
            <TableCell>
               <Chart />
            </TableCell>
          </TableRow>
        </Table>
      </div>
    </div>
  );
}

export default App;

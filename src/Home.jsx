import { useState } from "react"
import dollar from './assets/icon-dollar.svg'
import person from './assets/icon-person.svg'
import Input from './Input'
import PeopleInput from "./people-input"

import Result from "./Result"


export default function Home(){
  
    const [bill, setBill] = useState({amount: ""})

    const [people, setPeople] = useState({number: ""})
    
    const [tip, setTip]=useState(0)

    const [customTip, setCustomTip]= useState({custom:""})


    function reset(){
        setBill(bill=>{
            return {...bill, amount:""}
        })

        setPeople(person=>{
            return {...person, number:""}
        })

        setTip(0)

        setCustomTip(tip=>{
            return{...tip, custom:""}
        })
    }

    function handleBill(e){
        setBill(bill=>{
            return{...bill, [e.target.name]:e.target.value}
        })
    }

    function handleNoOfPeople(e){
        setPeople(no=>{
            return{...no, [e.target.name]:e.target.value}
        })
    }


    function addTip(t){
        if(customTip.custom){

            setTip(0)
        }
        else if(tip==t*bill.amount/100){

        setTip(0)
        } 
        else {
            setTip(t*bill.amount/100)
        }
       

    }

  function custom(e){

   

        {tip==0 && setCustomTip(tip=>{return{...tip, [e.target.name]:e.target.value}})}
   
    
  }

  console.log(people.number)

    return (


        <div className="home">
            <div className="bill-tip-people-div" >

                    <Input src={dollar} text="Bill" warningText="" placeholder="Enter Bill Amount" 
                                        function={handleBill}
                                        value={bill.amount}
                                        name="amount"
                    />

                    <div className="tip-div">
                        <p className="select-tip">Select Tip %</p>
                            <div className="tip-middle-div">
                                <div className="tip-middle-btn-div">
                                   <button onClick={()=>addTip(5)} className={`green-bg-btn btn ${tip==0.05*bill.amount  && tip!=0 ? "change-color" : ""}`}>5%</button>
                                   <button onClick={()=>addTip(15)}  className={`green-bg-btn btn ${tip==0.15*bill.amount  && tip!=0 ? "change-color" : ""}`}>15%</button>
                                   <button onClick={()=>addTip(50)} className={`green-bg-btn btn ${tip==0.5*bill.amount && tip!=0  ? "change-color" : ""}`}>50%</button>

                                </div>
                                <div className="tip-middle-btn-div">
                                    <button onClick={()=>addTip(10)} className={`green-bg-btn btn ${tip==0.1*bill.amount  && tip!=0 ? "change-color" : ""}`}>10%</button>
                                    <button onClick={()=>addTip(25)} className={`green-bg-btn btn ${tip==0.25*bill.amount  && tip!=0 ? "change-color" : ""}`}>25%</button>
                                    <input placeholder="Custom" type="text" className="custom-input" 
                                                                name="custom"
                                                                onChange={custom}
                                                                value={customTip.custom}

                                                                
                                    />

                                </div>

                            </div>
                    </div> 
                    
                    <PeopleInput src={person} text="Number of People" warningText="Can't be zero" placeholder="Enter no of People" 
                                        function={handleNoOfPeople}
                                        value={people.number}
                                        name="number"

                    />

            </div>


            {(tip>0 || Number(customTip.custom)) >0 & Number(bill.amount)>0 & Number(people.number)>0 ? 
            <Result reset={reset} amount= {tip>0 ? (tip/people.number).toFixed(2) : (Number(customTip.custom)/people.number).toFixed(2)} 
            total={tip>0 ? ((Number(bill.amount)+tip)/Number(people.number)).toFixed(2) : ((Number(bill.amount)+Number(customTip.custom))/Number(people.number)).toFixed(2)} /> : 
            <Result reset={reset} />}
              
            
            

        </div>
    )
}

/*
<button  className="custom-btn btn">Custom</button> 

 {(tip>0 || Number(customTip.custom)) >0 & Number(bill.amount)>0 & Number(people.number)>0 ? 
            <Result reset={reset} amount= {tip>0 ? (tip/people.number).toFixed(2) : (Number(customTip.custom)/people.number).toFixed(2)} 
            total={tip>0 ? ((Number(bill.amount)+tip)/Number(people.number)).toFixed(2) : ((Number(bill.amount)+Number(customTip.custom))/Number(people.number)).toFixed(2)} /> : 
            <Result reset={reset} />}


*/

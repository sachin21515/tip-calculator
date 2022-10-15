export default function Result(props){

    return (

        <div className="result-div">
            
                    <div className="result-tip-total-div">
                        <div className="result-slash-person-div">
                            <h4 className="result-h4">Tip Amount</h4>
                            <p className="slash-person">/ person</p>
                        </div>
                        <p className="total-amount-p">${props.amount}</p>
                    </div>

                    <div className="result-tip-total-div">
                        <div className="result-slash-person-div">
                            <h4 className="result-h4">Total</h4>
                            <p className="slash-person">/ person</p>
                        </div>
                            <p className="total-amount-p">${props.total}</p>
                        
                    </div>
           
            <button onClick={props.reset} className="reset-btn">RESET</button>
             
        </div>
    )
}
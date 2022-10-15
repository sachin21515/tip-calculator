

export default function PeopleInput(props){
    return (

        <div className="input-div" >
        <div className="text-div">
            <p className="text">{props.text}</p>
           {props.value==0 && props.value!=""? <p className="warning-text">{props.warningText}</p> :""}
            </div>
            <div className={`input-icon-div ${props.value==0 && props.value!=""? "warning-color" : ""}`}> 
                    <div className="icon-div">
                        <img className="icon" src={props.src} />
                    </div>
                <input className="input" type="text" placeholder={props.placeholder}
                                          onChange={props.function}
                                          value={props.value}  
                                          name={props.name}

                                          

                />
            </div>
    </div>

    )

}
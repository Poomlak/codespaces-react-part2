import { useRef,useState } from "react";

const BmiText=({bmi})=>{
    if(bmi<18.5)
        return(<h1>UnderWeight🤨</h1>)
    if(bmi>30)
        return(<h1>OverWeight😐</h1>)
    return(<h1>Normal😄</h1>)
}

export default function Bmi(){
    const W_input = useRef(null)
    const H_input= useRef(null)
    const [Bmi,setBmi] = useState(0);
    
    
    function handleClick(){
        let weight=W_input.current.value;
        let height=H_input.current.value/100;
        setBmi(weight/Math.pow(height,2));
        
    }
    return(<>
            Weight: <input  ref={W_input}/>kg.
            <br/>
            Height: <input  ref={H_input}/>cm.
            <br/>
            <button onClick={handleClick}>Calculate!</button><br/>
            <br/>
            Bmi value: {Bmi.toFixed(2)}
            <br/>
            <BmiText bmi={Bmi}/>
           
    
    
    
    
    
    </>);
}
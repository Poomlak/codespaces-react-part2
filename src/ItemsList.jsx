import { useState,useEffect } from "react";
function Item({name,isPacked=false}){
        return(<li >
            {name} {isPacked &&'️✅'||!isPacked&&'️❎'}
        </li>)
}
export default function ItemsList(){
    const [search,setSearch]=useState("");
    useEffect(()=>{
        console.log("this component is loaded!")

        return ()=>{
            alert("component unloaded!!!")
        }
    },[]);
    const items=[{name:"Sunglass",isPacked:true},
        {name:"Sunblock",isPacked:true},
        {name:"Swimming suit",isPacked:false},
        {name:"Towel",isPacked:true},
        {name:"Powerbank",isPacked:false}];
        
    
    const filterList=items.filter(i=>i.name.toLowerCase().includes(search.toLowerCase()))
    const itemsList=filterList.map(i=><Item key={i}  
        name={i.name} isPacked={i.isPacked}/>)

    
    return(<>
        Search:
        <input
        type="text" value={search} onChange={e=>setSearch(e.target.value)}/>
        
        
        <ul>
        {itemsList}
        </ul>
        
        
    </>)
}
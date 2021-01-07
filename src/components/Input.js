import React from 'react'

function Input(props) {
    const onChange = (e) => {
        props.filterNames(e.target.value)
    }
    
    return (
        <div className="inputBox">
            <input name="text" onChange={onChange} type="text" placeholder="Enter your favourite name..."/>
            <button onClick={()=> props.select('all')} id="all">All</button>
            <button onClick={()=> props.select('f')} id="f" className="f">F</button>
            <button onClick={()=> props.select('m')} id="m" className="m">M</button>
        </div>
    )
}
export default Input
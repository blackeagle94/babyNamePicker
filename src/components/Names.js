import React from 'react'

function Names(props) {

    return (
        <div className="names">
            {props.names.map(name => (
                <button onClick={(e)=>{props.addFav(e.target.id)}} id={name.id} key={name.id} className={name.sex}>{name.name}</button>
            ))}
        </div>
    )
}
export default Names
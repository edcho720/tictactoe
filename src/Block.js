import React from 'react'

function Block(props) {

    // const value = props.count % 2 === 0 ? "O" : "X";
    const value = props.isX ? "X" : "O"
    const styles = props.isHeld ? "cube-held" : "cube"



  return (
    <div className={styles} onClick={props.handleClick} >
        <div>{props.isHeld ? value : ""}</div>
    </div>
  )
}

export default Block
import React from 'react'
import Block from "./Block"
import BoxData from "./BoxData"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

function App() {
  const [squares, setSquares] = React.useState(BoxData);
  // const [count, setCount] = React.useState(0)
  const [win, setWin] = React.useState(false);
  const [allHeld, setAllHeld] = React.useState(false);


  React.useEffect(()=> {
    
    const oneTwoThree = squares.filter( box => box.key === 1 || box.key === 2 || box.key === 3);
    const oneFiveNine = squares.filter( box => box.key === 1 || box.key === 5 || box.key === 9);
    const oneFourSeven = squares.filter( box => box.key === 1 || box.key === 4 || box.key === 7);
    const twoFiveEight = squares.filter( box => box.key === 2 || box.key === 5 || box.key === 8);
    const threeFiveSeven = squares.filter( box => box.key === 3 || box.key === 5 || box.key === 7);
    const threeSixNine = squares.filter( box => box.key === 3 || box.key === 6 || box.key === 9);
    const fourFiveSix = squares.filter( box => box.key === 4 || box.key === 5 || box.key === 6);
    const sevenEightNine = squares.filter( box => box.key === 7 || box.key === 8 || box.key === 9);

    const allTrue = oneTwoThree.every(box => box.isHeld && box.isX);
      if(allTrue) {
        setWin(true);
        oneTwoThree.map( box =>  ({...box, isLit: !box.isLit } )) // trying to turn winning boxes green!
      };
    const allTrue1 = oneFiveNine.every(box => box.isHeld && box.isX);
      if(allTrue1) {
        setWin(true)
      };
    const allTrue2 = oneFourSeven.every(box => box.isHeld && box.isX);
      if(allTrue2) {
        setWin(true)
      };
    const allTrue3 = twoFiveEight.every(box => box.isHeld && box.isX);
      if(allTrue3) {
        setWin(true)
      };
    const allTrue4 = threeFiveSeven.every(box => box.isHeld && box.isX);
      if(allTrue4) {
        setWin(true)
      };
    const allTrue5 = threeSixNine.every(box => box.isHeld && box.isX);
      if(allTrue5) {
        setWin(true)
      };
    const allTrue6 = fourFiveSix.every(box => box.isHeld && box.isX);
      if(allTrue6) {
        setWin(true)
      };
    const allTrue7 = sevenEightNine.every(box => box.isHeld && box.isX);
      if(allTrue7) {
        setWin(true)
      };
    
    const allTrueA = oneTwoThree.every(box => box.isHeld && !box.isX);
      if(allTrueA) {
        setWin(true)
      };
    const allTrueB = oneFiveNine.every(box => box.isHeld && !box.isX);
      if(allTrueB) {
        setWin(true)
      };
    const allTrueC = oneFourSeven.every(box => box.isHeld && !box.isX);
      if(allTrueC) {
        setWin(true)
      };
    const allTrueD = twoFiveEight.every(box => box.isHeld && !box.isX);
      if(allTrueD) {
        setWin(true)
      };
    const allTrueE = threeFiveSeven.every(box => box.isHeld && !box.isX);
      if(allTrueE) {
        setWin(true)
      };
    const allTrueF = threeSixNine.every(box => box.isHeld && !box.isX);
      if(allTrueF) {
        setWin(true)
      };
    const allTrueG = fourFiveSix.every(box => box.isHeld && !box.isX);
      if(allTrueG) {
        setWin(true)
      };
    const allTrueH = sevenEightNine.every(box => box.isHeld && !box.isX);
      if(allTrueH) {
        setWin(true)
      };
      



      const allHeld = squares.every(box => box.isHeld);

    if(allHeld && win) {
      setAllHeld(false)
    };
    if(allHeld && !win) {
      setAllHeld(true)
    };

  }, [squares, win, allHeld])

  


  function toggle(id, key){
    console.log(id, key)
    setSquares(prevSquares => {
      const newArray = [];
      for(let i = 0; i < prevSquares.length; i++) {
        if(prevSquares[i].id === id) {newArray.push({...prevSquares[i], isHeld: !prevSquares[i].isHeld})}
        if(prevSquares[i].id !== id && !prevSquares[i].isHeld ) {newArray.push({...prevSquares[i], isX: !prevSquares[i].isX})}
        if(prevSquares[i].id !== id && prevSquares[i].isHeld) {newArray.push(prevSquares[i])}
      }
      return newArray;
    })
    // setCount(prevCount => prevCount + 1)
  }

  const blocks = squares.map( square => {
    return <Block 
      // count={count}
      key={square.key}
      id={square.id} 
      isX={square.isX}
      isHeld={square.isHeld}
      handleClick={()=> toggle(square.id, square.key)}
      itsLit={square.isLit} // trying to use this to turn winning cubes green
    />
  })

  function playAgain() {
    setSquares(BoxData);
    setWin(false);
    setAllHeld(false);
  }


  return (
    <>
      <div className="main">
        {win && <Confetti />}
        <div className="display">
          {blocks}
        </div>
      </div>
      <br />
      {win && <div className="winner">Winner!</div>}
      {allHeld && <button onClick={playAgain} className="play-again-button">Play Again!</button>}
      {win && <button onClick={playAgain} className="play-again-button">Play Again!</button>}
    </>
  );
}

export default App;
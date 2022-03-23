import React from "react"
import "./App.css"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti";
export default function App()
{

    const [dice,setDice] = React.useState(()=>newDiceArray())
    const [gameEnd,setGameEnd] = React.useState(false)


    function newDiceArray(){
        const dice = [];

        for(let i = 0 ; i <= 9 ; i++){
            dice.push(newDice())
        }
        return dice;
    }

    function newDice()
    {
        return {id: nanoid() , value: Math.ceil(Math.random() * 6), isHeld: false};
    }

    const diceElements = dice.map(die => {
        return <Die key= {die.id} id={die.id} value={die.value} isHeld={die.isHeld} toggle={toggleDie}/>
    })

    function rollDice()
    {
        if (gameEnd){
            setDice(newDiceArray())
            setGameEnd(false)
        }else{
            setDice(prevDice => {
                return prevDice.map(oldDice => {
                    return oldDice.isHeld ? oldDice : newDice()
                })
            })
        }
    }
    function toggleDie(id)
    {
        setDice(dice.map(die => {
            return die.id === id ? {...die,isHeld: !die.isHeld} : die
        }))
    }

    React.useEffect(()=>{
        let comparableValue = dice[0].value;
        let result = dice.every((die)=> die.isHeld) && dice.every((die)=> die.value === comparableValue)
        if (result){
            setGameEnd(true)
        }
    },[dice])

    return (
        <main>
            {gameEnd ? <Confetti /> : ""}
            <h2 className="title">Tenzies</h2>
            <p className="description">
                Roll until all dice are the same.
                Click each die to freeze it at its current value between rolls.
            </p>
            <section className="dice">
                {diceElements}
            </section>
            <button className="roll--btn" onClick={rollDice}>
                {gameEnd ? "New Game" : "roll"}
            </button>
        </main>
    )
}
import React from "react"
import "./App.css"
import Die from "./components/Die"
import {nanoid} from "nanoid"
export default function App()
{

    const [dice,setDice] = React.useState(()=>newDiceArray())


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
        setDice(prevDice => {
            return prevDice.map(oldDice => {
                return oldDice.isHeld ? oldDice : newDice()
            })
        })
    }
    function toggleDie(id)
    {
        setDice(dice.map(die => {
            return die.id === id ? {...die,isHeld: !die.isHeld} : die
        }))
    }


    return (
        <main>
            <h2 className="title">Tenzies</h2>
            <p className="description">
                Roll until all dice are the same.
                Click each die to freeze it at its current value between rolls.
            </p>
            <section className="dice">
                {diceElements}
            </section>
            <button className="roll--btn" onClick={rollDice}>roll</button>
        </main>
    )
}
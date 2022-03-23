import React from "react"
import "./App.css"
import Die from "./components/Die"
import {nanoid} from "nanoid"
export default function App()
{

    const [dice,setDice] = React.useState(()=>newDice())


    function newDice(){
        const dice = [];

        for(let i = 0 ; i <= 9 ; i++){
            dice.push({id: nanoid() , value: Math.ceil(Math.random() * 6), isHeld: false})
        }
        return dice;
    }

    const diceElements = dice.map(die => {
        return <Die key= {die.id} id={die.id} value={die.value} isHeld={die.isHeld} hold={hold}/>
    })

    function rollDice()
    {
        setDice(newDice)
    }
    function hold(id)
    {
        setDice(dice.map(die => {
            return die.id === id ? {...die,isHeld: true} : die
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
import React from "react"
import "./App.css"
import Die from "./components/Die"
export default function App()
{

    const [dice,setDice] = React.useState(()=>newDice())


    function newDice(){
        const dice = [];

        for(let i = 0 ; i <= 9 ; i++){
            dice.push(Math.ceil(Math.random() * 6))
        }
        return dice;
    }





    const diceElements = dice.map((number,index) => {
        return <Die key= {index} value={number} />
    })


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
            <button className="roll--btn">roll</button>
        </main>
    )
}
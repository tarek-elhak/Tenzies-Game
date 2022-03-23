import "./Die.css"

export default function Die({id,value,isHeld,hold})
{
    function holdDie()
    {
        hold(id)
    }

    return (
        <div className={isHeld ? "die held" : "die"} onClick={holdDie}>
            {value}
        </div>
    )
}
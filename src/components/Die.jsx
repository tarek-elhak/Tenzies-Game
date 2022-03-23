import "./Die.css"

export default function Die({id,value,isHeld,toggle})
{
    function toggleDie()
    {
        toggle(id)
    }

    return (
        <div className={isHeld ? "die held" : "die"} onClick={toggleDie}>
            {value}
        </div>
    )
}
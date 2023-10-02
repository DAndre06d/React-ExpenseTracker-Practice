import { useState } from "react";
import NewExpense from "./NewExpense";
import './NewExpense.css';

const NewExpenseForm =(props)=>{
    const [click, setClick] =useState(false)
    const handleClick = ()=>{
        setClick(true)
    }
    const onCancelHandler = () =>{
        setClick(false)
    }
    return <div className='new-expense'>
    {!click && <button onClick={handleClick}> Add new Expense</button>}
    {click && <NewExpense onAddExpense= {props.onAddExpense} onCancel={onCancelHandler}/>}
        
    </div>
}
export default NewExpenseForm
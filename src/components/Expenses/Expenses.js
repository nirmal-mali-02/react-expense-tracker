import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.items.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </Card>
    );
}

export default Expenses;
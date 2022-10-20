import React from 'react'
import { Stack, Button, Card, ProgressBar } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

export default function BudgetCard({name, amount, mx, gray}) {
    
    const classNames = []
    
    if(amount > mx){
        classNames.push("bg-danger", "bg-opacity-10")
    }else if (gray){
        classNames.push("bg-light")
    }
    
    function getProgressVariant(amount,mx){
        const ratio = amount/mx;
        if(ratio < 0.5) return "primary"
        if(ratio < 0.75) return "warning"
    
        return "danger"
    }



  return (
    <div>
        <Card className = {classNames.join(" ")}>
            <Card.Body>
                <Card.Title className = "d-flex justify-content-between align-items-baseline fw-normal mb-3">
                    <div className = "me-2">{name}</div>
                    <div className = "d-flex align-items-baseline">{currencyFormatter.format(amount)} 
                    / 
                    <span className = "text-muted fs-6">{currencyFormatter.format(mx)}</span>
                    </div>
                </Card.Title>
                <ProgressBar className = "rounded-pill" variant = {getProgressVariant(amount, mx)} min = {0} max = {mx} now = {amount}/>
                <Stack direction = "horizontal" gap = "2" className = "mt-4">
                    <Button variant = "outline-primary" className = "ms-auto">Add Expense</Button>
                    <Button variant = "outline-secondary">View Expense</Button>
                </Stack>
            </Card.Body>
        </Card>
    </div>
  )
}

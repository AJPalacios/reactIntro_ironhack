import React, {Component} from 'react'
import FormDisplay from './FormDisplay'

class FormContainer extends Component{

    state = {
        form:{},
        products:[]
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {form, products} = this.state
        products.push(form)
        this.setState({products}, ()=>{
            console.log(this.state)
        })
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {form} = this.state
        form[field] = value
        this.setState({form})
     }

    render(){
        console.log(this.state.form)
        return(
            <div>
                <FormDisplay
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}

export default FormContainer
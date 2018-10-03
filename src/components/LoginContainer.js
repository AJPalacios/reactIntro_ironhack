import React, {Component} from 'react'
import LoginDisplay from './LoginDisplay';

class LoginContainer extends Component{

    state = {
        error:null,
        clase:null,
        type:"password",
        user:{}
    }

    componentWillMount(){
        const user = localStorage.getItem('user')
        if(user) this.props.history.push('/')
    }

    onSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('user', JSON.stringify(this.state.user))
        this.props.history.push('/')
    }

    onChange = (e) => {
        //1.- comprobar en tiempo real que el email es correcto
        const {value, name} = e.target
        if(!value.includes('@')){
            const clase = "error"
            const error = "Esto no tiene forma de correo"
            this.setState({error, clase})
        }else if(value !== "bliss@ironhack.com"){
            const clase = "warning"
            const error = "esto no es tu correo"
            this.setState({error, clase})
        }else{
            this.setState({error:null, clase:"success"})  
        }
        const {user} = this.state
        user[name] = value
        this.setState({user})
    }

    changeType = (e) => {
        if(e.target.checked){
            const type = "text"
            this.setState({type})
        }else{
            const type = "password"
            this.setState({type})
        }
    }

    render(){
        const {error, clase, type} = this.state
        return(
            <div>
                <LoginDisplay
                    //2.- pasarle el error al display
                    clase={clase}
                    error={error}
                    type={type}
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    changeType={this.changeType}
                />
            </div>
        )
    }
}

export default LoginContainer
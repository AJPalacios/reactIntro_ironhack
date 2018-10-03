import React, {Component} from 'react'

class ProductDetail extends Component{

    componentWillMount(){
        console.log(this.props)
    }

    render(){
        return(
            <div>Soy el detalle de este id: {this.props.match.params.id}</div>
        )
    }
}

export default ProductDetail

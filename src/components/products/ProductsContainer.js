import React, {Component} from 'react'
import ProductsDisplay from './ProductsDisplay';

class ProductsContainer extends Component{

    state = {
        products:[
            {
                id:1,
                name:"didlo",
                price: 123,
                colors:["red", "blue", "white"]
            },
            {
                id:2,
                name:"perro",
                price: 123,
                pic:'link',
                colors:["red", "blue", "white"]
            },
            {
                id:3,
                name:"pollo",
                price: 123,
                pic:'link',
                colors:["red", "blue", "white"]
            },
            {
                id:4,
                name:"cellPhone",
                price: 123,
                pic:'link'
            },

        ]
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) this.props.history.push('/login')
    }

    showProduct = (product, index) => {
        return <ProductsDisplay key={index} {...product}/>
    }

    render(){
        const{products} = this.state
        return(
            <div className="flex-papa">
                {products.map(this.showProduct)}
            </div>
        )
    }
}

export default ProductsContainer
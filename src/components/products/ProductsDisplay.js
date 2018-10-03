import React from 'react'
import lupe from '../../assets/lupe.jpg'
import {Card, Button} from 'antd'

//const img = "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"

const ProductsDisplay = ({colors=[], name, price, pic=lupe, loading}) => {
    return(
        <Card
            title={"Pollollon"}
        >
            <img width="50" src={pic} alt={name} />
            <h2>{name}</h2>
            <p>${price}.00MXN</p>
            <div style={{display:"flex", margin:"23px"}}>
                {colors.map((c,i)=><div key={i} style={{backgroundColor:c}} className="colorsin" ></div>)}
            </div>
            <Button primary loading={loading} >Boton</Button>
        </Card>
    )
}

export default ProductsDisplay
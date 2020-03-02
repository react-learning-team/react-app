import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardBody, CardText,CardTitle } from 'reactstrap'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
          slectedDish: null
        }
    }

    onDishSelect(dish){
        this.setState({slectedDish:dish})
    }

    checkup(){
        Console.log("This is a new cheking for learning git braches")
    }

    renderDish(dish){
        if(dish != null){
        return(
            <Card>
                 <CardImg width="100%" src={dish.image} alt={dish.name} />
                 <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText> {dish.description}</CardText>
                 </CardBody>
            </Card>
        )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }
    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12, col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                          
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                       
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
        
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                       {menu}
                </div>
                <div className="row">
                     {this.renderDish(this.state.slectedDish)}
                </div>

            </div>
        )
    }
}

export default Menu
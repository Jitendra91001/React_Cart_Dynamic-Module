import React from "react";
import '../styles/cart.css';
import Product from './Product.jsx'
export default class Cart extends React.Component{
    state={
        products: [
            { name: "Product1", description: "this  is a best product", qty: 0, src: "1.jpeg", price:"250" },
            { name: "Product2", description: "this  is a best product", qty: 0, src: "6.jpeg", price:"250" },
            { name: "Product3", description: "this  is a best product", qty: 0, src: "3.jpeg", price:"250" },
            { name: "Product4", description: "this  is a best product", qty: 0, src: "4.jpeg", price:"250" },
            { name: "Product5", description: "this  is a best product", qty: 0, src: "5.jpeg", price:"250" },
        ],
        Pmax:10,
        Pmin:1
    }

    render() {
        return (
            <React.Fragment>
                <div className="outer">
                    <div className="header">Cart({this.state.products.length})</div>
                    <Product products={this.state.products}
                    updateqty={this.incrementQty}
                    updateqty2={this.decrementQty}
                    deletedata={this.deleteItem}
                    />
                </div>
           </React.Fragment>
        );
    }

    incrementQty=(index)=>{
		//Clone the Object
		var newProducts = [...this.state.products];
		if(newProducts[index].qty >= this.state.Pmax){
		
		window.alert("You cannot Buy more 10 Products at a time");
			
		}else{
			
			newProducts[index].qty++;
			this.setState({
				products:newProducts
			});
		}

    }

    decrementQty=(index)=>{
		//Clone the Object
	var newProducts = [...this.state.products];
	if(newProducts[index].qty < this.state.Pmin){
		
		window.alert("You should Buy At least One Product");
			
		}else{
			
			newProducts[index].qty--;
			this.setState({
				products:newProducts
			});
		}
	}

    deleteItem = (index) => {
		
		if(window.confirm("Are You sure ? To Delete")){
			
			var newProducts = [...this.state.products];	
		
			//console.log("delete product of",index);
			newProducts.splice(index,1);
		
			// newProducts[index].qty--;
		
			this.setState({
				products:newProducts
			});
		}
		
		
	}
		
}
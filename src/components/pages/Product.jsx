import React from "react";

export default class product extends React.Component{
    render(){
        return (
         <>
            {this.dynamicproducts()}
         </>
        );
    }

    dynamicproducts(){
        let products=this.props.products;
        let path="./images/"
        return products.map((item,index)=>{
            return(
                <div className="footer">
                        <div className="left">
                            <img src={path+item.src}  alt="..." height="250px" />
                        </div>
                        <div className="right">
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <b>{item.price}</b><br /><br />
                            <i>{item.qty}  </i>
                            <button style={{ width: '35px', height: '35px' }} onClick={()=>{this.props.updateqty(index)}}> + </button>  <button style={{ width: '35px', height: '35px' }} onClick={()=>{this.props.updateqty2(index)}}> - </button>  <button style={{ width: '50px', height: '35px' }} onClick={()=>{this.props.deletedata(index)}}>Delete</button>
                        </div>
                    </div>
            );
        })
    }
}
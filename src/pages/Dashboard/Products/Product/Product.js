import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Product.css"

const Product = ({id,model,company,price,detail1,detail2,detail3,detail4,image}) => {
    const navigate = useNavigate()
    const addNewProduct=()=>{
        navigate("/dashboard/addNewProduct")
    }
    return (
        <div className='col-md-3 g-2'>
              <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{model}</Card.Title>
            <h6>{price} Tk</h6>
            <Card.Text>
             
             <li>{detail1}</li>
             <li>{detail4}</li>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className="remove">Remove</button>
            <button className="update">Update</button>
            <button onClick={addNewProduct} className="add">Add New</button>

          </Card.Footer>
        </Card>
        </div>
    );
};

export default Product;
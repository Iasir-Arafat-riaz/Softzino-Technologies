import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({
  _id,
  id,
  model,
  company,
  price,
  detail1,
  detail2,
  detail3,
  detail4,
  image,
}) => {
  const navigate = useNavigate();

  //add new product
  const addNewProduct = () => {
    navigate("/dashboard/addNewProduct");
  };

  //update product
  const updateProduct=()=>{
      navigate(`/updateProduct/${_id}`)
  }

  

  //remove product from db
  const removeProduct = () => {
    const confirm = window.confirm("Are you sure...Delete this product ");
    if (confirm) {
      fetch(`https://protected-anchorage-52714.herokuapp.com/products/${_id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            window.location.reload();
          }
        });
    }
  };

  return (
    <div className="col-md-3 g-2">
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
          <button onClick={removeProduct} className="remove">
            Remove
          </button>
          <button onClick={updateProduct} className="update">Update</button>
          <button onClick={addNewProduct} className="add">
            Add New
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [update, setUpdate] = useState({});

  const { idx } = useParams();
  useEffect(() => {
    fetch(`https://protected-anchorage-52714.herokuapp.com/products/${idx}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdate(data);
      });
  }, []);
  const {id,model,company,price,detail1,detail4,image}=update;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(image);
    console.log(data);

    fetch(`https://protected-anchorage-52714.herokuapp.com/products/${idx}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

  };
  return (
    <div>
      <h1>UpdateProduct</h1>
      {id ? <div className="add-product pt-5">
        {/* <h1 className="text-danger">AddProduct</h1> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
          
            required
            placeholder="enter product ID"
            type="number"
            {...register("id")}
            value={id}
          />
          <input
          
            required
            placeholder="enter Product Model"
            {...register("model")}
            value={model}
          />
          <input
          
            required
            placeholder="enter company name"
            {...register("company")}
            value={company}
          />
          <input
          
            required
            placeholder="enter exact price of customize Motorbike"
            type="number"
            {...register("price")}
            value={price}
          />
          <textarea
        
            required
            placeholder="add list description 1 "
            {...register("detail1")}
            value={detail1}
          />
          <textarea
          
            required
            placeholder="add list description 2"
            {...register("detail4")}
            value={detail4}
          />

          <input
         
            required
            placeholder="you can submit photo, must need product url  "
            {...register("image")}
            value={image}
          />

          <input className="bg-success" type="submit" value="Update" />
        </form>
      </div>:""}
    </div>
  );
};

export default UpdateProduct;

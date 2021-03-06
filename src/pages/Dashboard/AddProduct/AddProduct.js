import React from 'react';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddProduct.css"
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(image);
    console.log(data);
   

    axios
      .post("https://protected-anchorage-52714.herokuapp.com/products", data)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire("New Product successfully added");
          reset();
        }
      });
  };
    return (
        <div id="add" className="add-product pt-5">
            {/* <h1 className="text-danger">AddProduct</h1> */}
            <form onSubmit={handleSubmit(onSubmit)}>
        <input
          required
          placeholder="enter product ID"
          type="number"
          {...register("id")}
        />
        <input
          required
          placeholder="enter Product Model"
          {...register("model")}
        />
        <input
          required
          placeholder="enter company name"
          {...register("company")}
        />
        <input
          required
          placeholder="enter exact price of customize Motorbike"
          type="number"
          {...register("price")}
        />
        <textarea
          required
          placeholder="add list description 1 "
          {...register("detail1")}
        />
        <textarea
          required
          placeholder="add list description 2"
          {...register("detail4")}
        />

        
        <input
          required
          placeholder="you can submit photo, must need product url  "
          {...register("image")}
        />

        <input className="bg-success" type="submit" value="ADD" />
      </form>
        </div>
    );
};

export default AddProduct;
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createProduct } from "../api";
import { useNavigate } from "react-router";

const ProductForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      manufacturer: "",
      manufacturingDate: "",
      price: "",
      quantity: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      description: Yup.string().required("Description is required"),
      manufacturer: Yup.string().required("Manufacturer is required"),
      manufacturingDate: Yup.date()
        .required("Manufacturing Date is required")
        .max(new Date(), "Date cannot be in the future"),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be greater than 0"),
      quantity: Yup.number()
        .required("Quantity is required")
        .min(0, "Quantity cannot be negative"),
    }),
    onSubmit: async (values) => {
      await createProduct(values);
      navigate("/products");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name && (
        <p style={{ color: "red" }}>{formik.errors.name}</p>
      )}

      <input
        name="description"
        placeholder="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.description && formik.errors.description && (
        <p style={{ color: "red" }}>{formik.errors.description}</p>
      )}

      <input
        name="manufacturer"
        placeholder="Manufacturer"
        value={formik.values.manufacturer}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.manufacturer && formik.errors.manufacturer && (
        <p style={{ color: "red" }}>{formik.errors.manufacturer}</p>
      )}

      <input
        type="date"
        name="manufacturingDate"
        value={formik.values.manufacturingDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.manufacturingDate && formik.errors.manufacturingDate && (
        <p style={{ color: "red" }}>{formik.errors.manufacturingDate}</p>
      )}

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.price && formik.errors.price && (
        <p style={{ color: "red" }}>{formik.errors.price}</p>
      )}

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formik.values.quantity}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.quantity && formik.errors.quantity && (
        <p style={{ color: "red" }}>{formik.errors.quantity}</p>
      )}

      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;

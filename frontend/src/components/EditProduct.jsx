import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateProduct, getProduct } from "../api";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await getProduct(id);
        const product = res.data;
        setInitialValues({
          name: product.name || "",
          description: product.description || "",
          manufacturer: product.manufacturer || "",
          manufacturingDate: product.manufacturingDate
            ? product.manufacturingDate.slice(0, 10)
            : "",
          price: product.price || "",
          quantity: product.quantity || "",
        });
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    }
    fetchProduct();
  }, [id]);

  const validationSchema = Yup.object({
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
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues || {
      name: "",
      description: "",
      manufacturer: "",
      manufacturingDate: "",
      price: "",
      quantity: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await updateProduct(id, values);
      navigate("/products");
    },
  });

  if (!initialValues) return <p>Loading...</p>;

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

      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;

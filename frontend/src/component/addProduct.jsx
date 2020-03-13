import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ModalBody
} from "reactstrap";
import { getAllProductCategory, addProductAction } from "../redux/actions/";

const AddProduct = () => {
  //localstate
  const [addData, setaddData] = useState({});
  const [addImage, setaddImage] = useState(undefined);

  //Set dispatch
  const dispatch = useDispatch();

  // Component did mount
  // useEffect(() => {
  //   dispatch(getAllProductCategory());
  // }, []);

  //Get data from reducers
  const { productCategory } = useSelector(state => state.addProductReducers);

  // Render Product Category
  // const renderProductCategory = () => {
  //   return productCategory.map((val, index) => {
  //     // console.log(val.idproductCategory);
  //     return (
  //       <option value={val.idproductCategory} key={index}>
  //         {val.productCategory}
  //       </option>
  //     );
  //   });
  // };
  //handleinputdata
  const handleInputData = e => {
    const { name, value } = e.target;
    setaddData({ ...addData, [name]: value });
  };

  //handleimagedata
  const handleImageData = e => {
    const file = e.target.files[0];
    if (file) {
      setaddImage(file);
    } else {
      setaddImage(undefined);
    }
  };

  //function add data
  const addProduct = () => {
    const formData = new FormData();
    // console.log(addImage[0]);
    // Add image
    console.log("img", addImage);

    // if (addImage) {
    const options = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    // const switchCategoryId = kategori => {
    //   switch (kategori) {
    //     case "Arabica Specialty":
    //       return "1";
    //     case "Arabica Peaberry":
    //       return "2";
    //     case "Arabica Longberry":
    //       return "3";
    //     case "Arabica Wine":
    //       return "4";
    //     case "Arabica Yellow Catura":
    //       return "5";
    //     case "Arabica Luwak":
    //       return "6";
    //     case "Robusta Gayo":
    //       return "7";
    //     default:
    //       break;
    //   }
    // };

    //state for product
    const newproduct = {
      namaproduct: addData.namaproduct,
      jenisproduct: addData.jenisproduct,
      hargaproduct: addData.hargaproduct,
      deskripsiproduct: addData.deskripsiproduct,
      categoryproductId: addData.idproductCategory
    };
    console.log("data", newproduct);

    formData.append("image", addImage);
    formData.append("data", JSON.stringify(newproduct));
    dispatch(addProductAction(formData, options));
    // }
  };
  console.log(addData);
  return (
    <div
    // style={{
    //   backgroundColor: "black",
    //   width: "100%",
    //   height: "100%",
    //   backgroundAttachment: "fixed",
    //   backgroundSize: "100%"
    // }}
    >
      <h1 style={{ textAlign: "center" }}>Add Product</h1>
      <div style={{ textAlign: "center" }}>
        <Form>
          <FormGroup className="padprod">
            <Label className="mr-sm-2">Nama</Label>
            <input
              name="namaproduct"
              style={{ paddingLeft: "100px", borderRadius: "10px" }}
              type="text"
              placeholder="Input Name"
              onChange={handleInputData}
            />
          </FormGroup>
          <FormGroup className="padprod">
            <Label className="mr-sm-2">Harga</Label>
            <input
              name="hargaproduct"
              style={{ paddingLeft: "100px", borderRadius: "10px" }}
              type="number"
              placeholder="Input Price"
              onChange={handleInputData}
            />
          </FormGroup>
          <FormGroup className="padprod">
            <Label className="mr-sm-2 ">Deskripsi</Label>
            <textarea
              name="deskripsiproduct"
              style={{ paddingLeft: "80px", borderRadius: "10px" }}
              type="text"
              placeholder="Describe the Product "
              onChange={handleInputData}
            />
          </FormGroup>
          <FormGroup className="padprod">
            <Label className="mr-sm-2">Jenis Kopi</Label>
            <select onChange={handleInputData} name="jenisproduct">
              <option
                hidden
                style={{ paddingLeft: "100px", borderRadius: "10px" }}
              >
                Pilih Jenis Kopi{" "}
              </option>

              <option>Arabica Specialty</option>
              <option>Arabica Peaberyy</option>
              <option>Arabica Longberry</option>
              <option>Arabica Wine</option>
              <option>Arabica Yellow Catura</option>
              <option>Arabica Luwak</option>
              <option>Robusta Gayo</option>
            </select>
          </FormGroup>
          <FormGroup style={{ paddingLeft: "160px" }}>
            <Label className="mr-sm-2">Tambah Foto</Label>
            <input
              type="file"
              name="gambarproduct"
              multiple
              onChange={handleImageData}
            />
            <FormText color="muted">
              Format foto harus dalam bentuk PNG
            </FormText>
          </FormGroup>
        </Form>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={addProduct}
          style={{ backgroundColor: "dark", color: "black" }}
        >
          Add Product
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;

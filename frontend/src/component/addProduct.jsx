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
  const [addImage, setaddImage] = useState([]);

  //Set dispatch
  const dispatch = useDispatch();

  // Component did mount
  useEffect(() => {
    dispatch(getAllProductCategory());
  }, []);

  //Get data from reducers
  const { productCategory } = useSelector(state => state.addProductReducers);

  // Render Product Category
  const renderProductCategory = () => {
    return productCategory.map((val, index) => {
      // console.log(val);
      return (
        <option value={val.productCategory} key={index}>
          {val.productCategory}
        </option>
      );
    });
  };
  //handleinputdata
  const handleInputData = e => {
    const { name, value } = e.target;
    setaddData({ ...addData, [name]: value });
  };

  //handleimagedata
  const handleImageData = e => {
    const { files } = e.target;
    setaddImage({ ...addImage, ...files });
  };

  //function add data
  const addProduct = () => {
    // console.log(addImage[0]);
    // Add image
    if (addImage) {
      const formData = new FormData();
      const options = {
        headers: {
          "Content-type": "multipart/form-data"
        }
      };
      formData.append("image", addImage);
      formData.append("data", addData);
      dispatch(addProductAction(formData, options));
    }
  };

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
              style={{ paddingLeft: "100px" }}
              type="text"
              placeholder="Input Name"
              onChange={handleInputData}
            />
          </FormGroup>
          <FormGroup className="padprod">
            <Label className="mr-sm-2">Harga</Label>
            <input
              name="hargaproduct"
              style={{ paddingLeft: "100px" }}
              type="number"
              placeholder="Input Price"
              onChange={handleInputData}
            />
          </FormGroup>
          <FormGroup className="padprod">
            <Label className="mr-sm-2 paddescrip">Deskripsi</Label>
            <textarea
              name="deskripsiproduct"
              style={{ paddingLeft: "80px" }}
              type="text"
              placeholder="Describe the Product "
              onChange={handleInputData}
            />
          </FormGroup>
          <FormGroup className="padprod">
            <Label className="mr-sm-2">Jenis Kopi</Label>
            <select onChange={handleInputData} name="jenisproduct">
              <option style={{ paddingLeft: "100px" }}>
                Pilih Jenis Kopi{" "}
              </option>
              {renderProductCategory()}
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
        <Button onClick={addProduct}>Add Product</Button>
      </div>
    </div>
  );
};

export default AddProduct;

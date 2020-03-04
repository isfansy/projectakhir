import React, { useEffect } from "react";
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
import { getAllProductCategory } from "../redux/actions/";

const AddProduct = () => {
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
      console.log(val);

      return (
        <option value={val.productCategory} key={index}>
          {val.productCategory}
        </option>
      );
    });
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
              style={{ paddingLeft: "100px" }}
              type="text"
              placeholder="Input Name"
            />
          </FormGroup>
          <FormGroup className="padprod">
            <Label className="mr-sm-2">Harga</Label>
            <input
              style={{ paddingLeft: "100px" }}
              type="number"
              placeholder="Input Price"
            />
          </FormGroup>
          <FormGroup className="padprod">
            <Label className="mr-sm-2 paddescrip">Deskripsi</Label>
            <textarea
              style={{ paddingLeft: "80px" }}
              type="text"
              placeholder="Describe the Product "
            />
          </FormGroup>
          <FormGroup className="padprod">
            <Label className="mr-sm-2">Jenis Kopi</Label>
            <select>
              <option style={{ paddingLeft: "100px" }}>Pilih Jenis Kopi</option>
              {renderProductCategory()}
            </select>
          </FormGroup>
          <FormGroup style={{ paddingLeft: "160px" }}>
            <Label className="mr-sm-2">Tambah Foto</Label>
            <input type="file" name="file" />
            <FormText color="muted">
              Format foto harus dalam bentuk PNG
            </FormText>
          </FormGroup>
        </Form>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button>Add Product</Button>
      </div>
    </div>
  );
};

export default AddProduct;

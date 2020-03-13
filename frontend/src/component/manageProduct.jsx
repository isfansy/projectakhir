import React, { Component, useState } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  CustomInput,
  Label
} from "reactstrap";
import Axios from "axios";
import { Url, Urlimage } from "../helper/apiurl";

export class ManageProduct extends Component {
  state = {
    isiData: [],
    editData: [],
    editGambarProduct: null,
    modaledit: false
  };
  componentDidMount() {
    Axios.get(`${Url}product/product`)
      .then(res => {
        // console.log(res.data);
        this.setState({ isiData: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onDeleteClick = index => {
    console.log("delete data", this.state.isiData);
    var deleteData = this.state.isiData;
    var selectedId = deleteData[index].idproduct;
    // console.log(deleteData);

    console.log(selectedId);
    Axios.delete(`${Url}product/deleteproduct/${selectedId}`)
      .then(res => {
        console.log("berhasil", res.data);
        this.setState({ isiData: res.data.dataProduct });
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  onEditClick = index => {
    let isiData = this.state.isiData;
    this.setState({ modaledit: true, dataedit: isiData[index] });
    console.log("ini ditamong gam", this.state.dataedit);
    console.log("index");
  };

  onSaveEditClick = () => {
    var editId = this.state.editData.id;
    var formdata = new FormData();
    var productNama = this.refs.editProductName.value;
    var desc = this.refs.editDescriptionName.value;
    var gambar = this.state.editGambarProduct;
    console.log("gambar");
    var editData = {
      productNama,
      desc,
      gambar
    };

    var Headers = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    formdata.append("image", gambar);
    formdata.append("data", JSON.stringify(editData));

    Axios.put(`${Url}/editproduct/selectedIdEdit/${editId}`, formdata, Headers)
      .then(res => {
        this.setState({ modaledit: false, isiData: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onImageEditClick = event => {
    var file = event.target.files[0];
    console.log("image", file);
    if (file) {
      this.setState({ editGambarProduct: event.target.files[0] });
      console.log(this.state.editGambarProduct);
    } else {
      alert("upload foto");
    }
  };

  renderTab = () => {
    var tab = this.state.isiData;
    if (tab.length) {
      return tab.map((val, index) => {
        return (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{val.namaproduct}</td>
              <td>{val.jenisproduct}</td>
              <td>{val.hargaproduct}</td>
              <td>
                <img
                  style={{ width: "200px" }}
                  src={`${Urlimage + val.gambarproduct}`}
                />
              </td>
              <td>{val.deskripsiproduct}</td>
              <td>
                <button
                  onClick={() => this.onEditClick(index)}
                  style={{ borderRadius: "10px" }}
                  className="btn btn-warning"
                >
                  Edit
                </button>
                <button
                  onClick={() => this.onDeleteClick(index)}
                  style={{ borderRadius: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <Table style={{ marginLeft: "20px" }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Product</th>
              <th>Jenis Product</th>
              <th>Harga Product</th>
              <th>Gambar Product</th>
              <th>Deskripsi Product</th>
              <th>Action</th>
            </tr>
          </thead>
          {this.renderTab()}
        </Table>

        <div>
          <Modal
            isOpen={this.state.modaledit}
            toggle={() => this.setState({ modaledit: false })}
          >
            <ModalHeader>Edit Product</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <input
                    class="form-control"
                    type="text"
                    ref="editProductName"
                    placeholder="Nama Product"
                    defaultValue={this.state.editData.productNama}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <Label>Jenis Kopi</Label> */}
                  <select name="jenisproduct">
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
                <FormGroup>
                  <CustomInput
                    type="file"
                    name="file"
                    label="Pilih Gambar"
                    onChange={this.onChangeImgEdit}
                  />
                </FormGroup>
                <FormGroup>
                  <textarea
                    className="form-control"
                    type="text"
                    placeholder="deskripsiproduct"
                    ref="editdesc"
                    // defaultValue={this.state.dataedit.deskripsi}
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button>Save</Button>
              <Button>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ManageProduct;

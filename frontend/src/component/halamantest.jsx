import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import Axios from "axios";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  FormText,
  CustomInput,
  Button
} from "reactstrap";
import { APIURL, APIURLIMG } from "../../support/url";

export class Admin extends Component {
  state = {
    modaledit: false,
    modalprofil: false,
    editImageFile: null,
    cardKelas: [],
    dataedit: [],
    kategori: []
  };

  componentDidMount() {
    Axios.get(`${APIURL}kelas/getkelas`)
      .then(res1 => {
        this.setState({ cardKelas: res1.data });
        // console.log('get kelas', res1.data)
        console.log(this.state.cardKelas);
      })
      .catch(err => {
        console.log(err);
      });
    Axios.get(`${APIURL}kelas/getkategori`)
      .then(res1 => {
        this.setState({ kategori: res1.data });
        // console.log('get kelas', res1.data)
        console.log(this.state.kategori);
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderCard = () => {
    var card = this.state.cardKelas;
    if (card.length) {
      return card.map((val, index) => {
        return (
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              marginLeft: "-30rem"
            }}
          >
            <div>
              <div
                className="card"
                style={{
                  width: "20rem",
                  borderRadius: "2rem",
                  height: "26rem"
                }}
              >
                <img
                  className="card-img-top"
                  style={{
                    borderRadius: "2rem",
                    borderBottomLeftRadius: "0rem",
                    borderBottomRightRadius: "0rem",
                    height: "11rem"
                  }}
                  src={`${APIURLIMG + val.cover}`}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#8B8B8B",
                      textAlign: "left"
                    }}
                  >
                    {val.namakategori}
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "25px",
                      textAlign: "left",
                      color: "#222E35"
                    }}
                  >
                    {val.judul}
                  </p>
                  <div className="d-flex">
                    <div
                      className="outerijo"
                      onClick={() => this.onEditClick(index)}
                    >
                      {" "}
                      <MdEdit color="#58b800" size={32} />{" "}
                    </div>
                    <div
                      className="outermerah"
                      onClick={() => this.onDeleteClick(index)}
                    >
                      {" "}
                      <IoMdTrash color="grey" size={32} />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div> loading </div>;
    }
  };

  onDeleteClick = index => {
    console.log("delete data", this.state.cardKelas);
    var deletekelas = this.state.cardKelas;
    var selectedId = deletekelas[index].id;
    console.log(selectedId);
    Axios.delete(`${APIURL}kelas/deletekelas/${selectedId}`)
      .then(res => {
        console.log("berhasil", res.data);
        this.setState({ cardKelas: res.data.dataProduct });
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  onEditClick = index => {
    let cardKelas = this.state.cardKelas;
    this.setState({ modaledit: true, dataedit: cardKelas[index] });
    console.log(this.state.dataedit);
  };

  onSaveEditClick = () => {
    var idEdit = this.state.dataedit.id;
    var formdata = new FormData();
    var judul = this.refs.editnamaKelas.value;
    var deskripsi = this.refs.editdeskripsi.value;
    var cover = this.state.editImageFile;
    var idkategori = this.state.editkategori;
    var materi = this.refs.editmateri.value;
    var bab = this.refs.editbabPelajaran.value;
    console.log(cover);
    var dataedit = {
      bab,
      materi,
      cover,
      judul,
      deskripsi,
      idkategori
    };

    var Headers = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    formdata.append("image", cover);
    formdata.append("data", JSON.stringify(dataedit));

    Axios.put(`${APIURL}kelas/editkelas/${idEdit}`, formdata, Headers)
      .then(res => {
        this.setState({ modaledit: false, cardKelas: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangeImgEdit = event => {
    var file = event.target.files[0];
    console.log("img", file);
    if (file) {
      this.setState({ editImageFile: event.target.files[0] });
      console.log(this.state.editImageFile);
    } else {
      alert("Masukkan foto");
    }
  };

  renderSelect = () => {
    var namakategori = this.state.kategori;
    if (namakategori) {
      return namakategori.map((val, index) => {
        console.log(val.namakategori);
        return (
          <option value={val.id} key={index}>
            {val.namakategori}
          </option>
        );
      });
    } else {
      return <h1>loading ...</h1>;
    }
  };

  onChangeKategori = e => {
    const { value } = e.target;
    this.setState({ idkategori: value });
  };

  render() {
    return (
      <div className="login1-admin">
        <Modal
          isOpen={this.state.modaledit}
          toggle={() => this.setState({ modaledit: false })}
        >
          <ModalHeader>Edit Kelas</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <input
                  class="form-control"
                  type="text"
                  ref="editnamaKelas"
                  placeholder="Nama Kelas"
                  defaultValue={this.state.dataedit.judul}
                />
              </FormGroup>
              <FormGroup>
                <label style={{ width: "33.5rem" }}>
                  <select className="form-control">
                    <option selected hidden>
                      {" "}
                      --Ganti Kategori--{" "}
                    </option>
                    {this.renderSelect()}
                  </select>
                </label>
              </FormGroup>
              <FormGroup>
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Deskripsi"
                  ref="editdeskripsi"
                  defaultValue={this.state.dataedit.deskripsi}
                />
              </FormGroup>
              <FormGroup>
                <CustomInput
                  type="file"
                  name="file"
                  label="Pilih Cover Kelas"
                  onChange={this.onChangeImgEdit}
                />
              </FormGroup>
              <FormGroup>
                <input
                  class="form-control"
                  type="text"
                  ref="editbabPelajaran"
                  placeholder="Judul Bab"
                  defaultValue={this.state.dataedit.bab}
                />
              </FormGroup>
              <FormGroup>
                <input
                  class="form-control"
                  type="text"
                  ref="editmateri"
                  placeholder="Materi Kelas"
                  defaultValue={this.state.dataedit.materi}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button variant="dark" onClick={this.onSaveEditClick}>
              Simpan
            </Button>
            <Button
              variant="dark"
              onClick={() => this.setState({ modaledit: false })}
            >
              Batal
            </Button>
          </ModalFooter>
        </Modal>

        <div
          class="container white topBotomBordersOut"
          style={{ marginLeft: "-6.7cm", marginTop: "-3cm" }}
        >
          <Link a to="/kursus" style={{ color: "black" }}>
            KURSUS
          </Link>
          <Link a to="/performa" style={{ color: "black" }}>
            PERFORMA
          </Link>
          <Link a to="/transaksi" style={{ color: "black" }}>
            TRANSAKSI
          </Link>
          <Link a to="/admingaleri" style={{ color: "black" }}>
            KELOLA GALERI
          </Link>
          <div>
            <FaUserAlt
              size={30}
              style={{
                marginTop: "-1.5cm",
                marginLeft: "38cm",
                color: "#4b4b4b"
              }}
            />
          </div>
        </div>
        <div className="kecuali">
          <div className="box1">
            <Link to="/tambahkelas">
              <div
                className="tambahkelas"
                style={{ textDecoration: "none", marginTop: "0.8cm" }}
              >
                Tambah Kelas
              </div>
            </Link>
            <div
              className="bebas1"
              style={{
                fontSize: "32px",
                color: "#4e4e4e",
                fontWeight: "bolder",
                marginLeft: "-14cm"
              }}
            >
              Mulai Unggah Kelasmu
            </div>
          </div>
          <div className="kelasloop">{this.renderCard()}</div>
        </div>
      </div>
    );
  }
}

export default Admin;

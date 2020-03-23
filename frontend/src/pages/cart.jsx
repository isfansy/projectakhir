import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Spinner,
  Col,
  Row,
  Table,
  Form
} from "reactstrap";
import Headernofix from "../component/headernofix";

const Cart = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Headernofix />
      <div style={{ paddingTop: "50px" }}>
        <Table style={{ paddingTop: "100px" }}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Produk</th>
              <th>Tanggal Pembelian</th>
              <th>Jumlah</th>
              <th>Harga</th>
              <th>Total Harga</th>
              <th>Action</th>
            </tr>
          </thead>
        </Table>
        <div>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>Add Receipt</ModalHeader>
            <ModalBody>
              <Form>
                <input type="file" name="gambarreceipt" />
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
      <div>
        <Button
          style={{
            color: "black",
            backgroundColor: "transparent",
            borderRadius: "100px"
          }}
        >
          Check Out
        </Button>
      </div>
    </div>
  );
};

export default Cart;

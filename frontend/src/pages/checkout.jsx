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

const Checkout = () => {
  return (
    <div>
      <Headernofix />
      <div className="" style={{ paddingTop: "50px" }}>
        <Table>
          <thead>
            <th>Status</th>
            <th>Tanggal Pembelian</th>
            <th>No transaksi</th>
            <th>Harga</th>
            <th>Action</th>
          </thead>
        </Table>
        <div>
          <Button
            style={{
              backgroundColor: "transparent",
              color: "black",
              borderRadius: "100px"
            }}
          >
            Pay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

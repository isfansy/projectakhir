// import React from "react";
// import { Table, Button } from "reactstrap";

// const Admin = props => {
//   return (
//     <div>
//       <br />
//       <div style={{ textAlign: "center" }}>
//         <Button>Add Product</Button>
//       </div>
//       <br />
//       <Table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Nama Produk</th>
//             <th>Jenis Kopi</th>
//             <th>Roast</th>
//             <th>Berat Bersih(gr)</th>
//             <th>Deskripsi</th>
//             <th>Grind</th>
//             <th>Gambar</th>
//             <th>Harga</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>
//               <Button>Edit</Button>
//               <br />
//               <Button>Delete</Button>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>
//               <Button>Edit</Button>
//               <br />
//               <Button>Delete</Button>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>@mdo</td>
//             <td>
//               <Button>Edit</Button>
//               <br />
//               <Button>Delete</Button>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Admin;

import React, { Component } from "react";
// import { render } from "react-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import AddProduct from "../component/addProduct";
import ManageProduct from "../component/manageProduct";

class Admin extends Component {
  render() {
    return (
      <Tabs defaultTab="vertical-tab-one" vertical>
        <TabList>
          <Tab tabFor="vertical-tab-one">Add Product</Tab>
          <Tab tabFor="vertical-tab-two">Manage Product</Tab>
          <Tab tabFor="vertical-tab-three">Manage User</Tab>
        </TabList>
        <TabPanel tabId="vertical-tab-one">
          <AddProduct />
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
          <ManageProduct />
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
          <p>Tab 3 content</p>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Admin;

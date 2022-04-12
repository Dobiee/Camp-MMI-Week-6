import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

// components
import MyButton from "./components/button";
import MyTable from "./components/table";

function App() {
  const [counter, setCounter] = useState(0);

  const [buttonName, setButtonName] = useState("Button from State");

  const [data, setData] = useState([
    { id: 1, name: "Coba 1", age: 22, job: "Pelajar" },
    { id: 2, name: "Coba 2", age: 23, job: "PNS" },
    { id: 3, name: "Coba 3", age: 21, job: "Pedagang" },
  ]);

  const data2 = [
    { name: "Coba 1", age: 22, job: "Pelajar" },
    { name: "Coba 2", age: 23, job: "PNS" },
    { name: "Coba 3", age: 21, job: "Pedagang" },
  ];

  const handleCounter = (num) => {
    setCounter(counter + num);
  };

  const handleDelete = (idParam) => {
    setData(data.filter(val => val.id != idParam))
  }

  useEffect(() => {
    // menjalankan suatu function saat web belum benar2 muncul
    // contoh: get data from API
    // willmount
    console.log("use effect run");
  }, [counter]);

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama</th>
          <th scope="col">Umur</th>
          <th scope="col">Pekerjaan</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => {
          return (
            <>
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.job}</td>
                <td><button class="btn btn-link" onClick={() => handleDelete(data.id)}>Delete</button></td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;

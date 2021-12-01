import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const getToken = () => {
  let localT = localStorage.getItem("tok");
  if (localT) {
    return JSON.parse(localStorage.getItem("tok"));
  } else {
    return "error";
  }
};

const PagoAceptado = () => {
  const [token, setToken] = useState(getToken());
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getStatus = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:4000/api/vtubers/status/${token}`
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  console.log(status);

  return (
    <Wrapper>
      <h1>Pago aceptado</h1>
      <p>Estado: {data.status}</p>
      <p>Monto: {data.amount}</p>
    </Wrapper>
  );
};

export default PagoAceptado;

const Wrapper = styled.div`
  height: 100vh;
  h1 {
    color: #fff;
    font-size: 5rem;
    text-align: center;
  }
`;

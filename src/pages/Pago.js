import axios from "axios";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const Pago = () => {
  const [data, setData] = useState({
    token: "",
    url: "",
  });

  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const getPayment = async (e) => {
    setLoading(true);
    try {
      const res = await axios("http://localhost:4000/api/vtubers/payment");

      setData({
        ...data,
        token: res.data.response.token,
        url: res.data.response.url,
      });
      localStorage.setItem("tok", JSON.stringify(res.data.response.token));

      formRef.current.submit();

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPayment();
  };

  return (
    <Wrapper>
      Pago
      <form
        name="brouterForm"
        id="brouterForm"
        method="POST"
        onSubmit={handleSubmit}
        action={data.url}
        ref={formRef}
      >
        <input type="hidden" name="token_ws" value={data.token} />
        <p>{data.url}</p>
        <p>{data.token}</p>
        <input type="submit" value={`${loading ? "loading" : "submit"} `} />
      </form>
    </Wrapper>
  );
};

export default Pago;

const Wrapper = styled.div`
  text-align: center;
  color: #fff;
  height: 100vh;
  padding-top: 10rem;
`;

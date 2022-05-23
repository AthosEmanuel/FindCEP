import React, { useState } from "react";
import { CepProps, getAddress } from "../../service/address";

const Home: React.FC = () => {
  const [address, setAddress] = useState<Array<CepProps | undefined>>([]);
  const [cep, setCep] = useState(0);

  const getFullAddress = async () => {
    const data = await getAddress(cep);
    console.log(typeof data);
    console.log(data);
    setAddress(data);
  };

  const addCEP = (event: any) => {
    setCep(event.target.value);
  };
  return (
    <>
      <h1>Home</h1>
      <label>Digite o CEP</label>
      <input onChange={addCEP}></input>
      <button onClick={getFullAddress}>Achar CEP</button>
      {address ? (
        address.map((row) =>
          row ? (
            <div>
              <label>
                {row.logradouro},{row.cep}
              </label>
              <label>
                {row?.localidade},{row.uf}
              </label>
            </div>
          ) : (
            <></>
          )
        )
      ) : (
        <></>
      )}
      q
    </>
  );
};

export default Home;

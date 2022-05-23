const axios = require("axios");

const url = "https://viacep.com.br/ws/";

export interface CepProps {
  logradouro: string;
  cep: string;
  localidade: string;
  uf: string;
}

const getAddress = async (CEP: number) => {
  try {
    const { data } = await axios.get(`${url}${CEP}/json/`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getAddress };

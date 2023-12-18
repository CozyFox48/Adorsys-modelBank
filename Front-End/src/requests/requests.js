import axios from "axios";
import config from "./../config";
const API_URL = config.backend;

export async function loginBank(id, pin) {
  // const data = {
  //   Login: "GB_RKLT_DecoupledSca-2",
  //   Pin: "12345",
  // };

  let respond = {};
  const data = {
    Login: id,
    Pin: pin,
  };

  await axios
    .post(`${API_URL}/loginBank`, data)
    .then((response) => {
      respond = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return respond;
}

export async function getEachBankAccount(access_token, cookie, accountId) {
  const data = {
    access_token: access_token,
    cookie: cookie,
    accountId: accountId,
  };

  let respond = {};

  await axios
    .post(`${API_URL}/getEachBankAccount`, data)
    .then((response) => {
      respond = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return respond;
}

export async function deleteTransaction(access_token, cookie, accountId) {
  const data = {
    access_token: access_token,
    cookie: cookie,
    accountId: accountId,
  };

  let respond = {};

  await axios
    .post(`${API_URL}/deleteTransaction`, data)
    .then((response) => {
      respond = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return respond;
}

export async function deposit(access_token, cookie, accountId, amount, currency) {
  const data = {
    access_token: access_token,
    cookie: cookie,
    accountId: accountId,
    amount: amount,
    currency: currency,
  };

  let respond = {};

  await axios
    .post(`${API_URL}/deposit`, data)
    .then((response) => {
      respond = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return respond;
}

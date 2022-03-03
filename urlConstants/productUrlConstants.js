const url = "https://fakestoreapi.com";

const endpoint = `${url}/products`;

export const getAllProducts = `${endpoint}`;
export const getSingleProduct = (id) => `${endpoint}/${id}`;

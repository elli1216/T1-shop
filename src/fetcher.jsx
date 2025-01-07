const BASE_URL = 'http://localhost:3001';

export const fetcher = async (url) => {
  let responseObject = {errorMessage: '', data: []};

  try {
    const response = await fetch(BASE_URL + url);
    const responseData = await response.json();
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    responseObject.errorMessage = '';
    responseObject.data = responseData;
  } catch (error) {
    responseObject.errorMessage = error.message;
  }
  return responseObject;
}

export const getCategories = () => {
  return fetcher("/categories");
}

export const getProducts = (categoryId) => {
  return fetcher("/products?categoryId=" + categoryId);
}

export const getProductById = (productId) => {
  return fetcher("/products/" + productId);
}

export const getProductsByQuery = query => {
  return fetcher("/products?q=" + query);
}
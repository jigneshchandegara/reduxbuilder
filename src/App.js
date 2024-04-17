import { useDispatch } from 'react-redux';
import Product from './componet/Product';
import { useEffect } from 'react';
import { GET_PRODUCT_PENDING } from './redux-saga/user/action/action';

function App() {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PENDING });
  }, []);
  return (
    <>
      <Product />
    </>

  );
}

export default App;

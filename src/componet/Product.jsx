import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PENDING, POST_PRODUCT_PENDING, PUT_PRODUCT_PENDING } from '../redux-saga/user/action/action';

const Product = () => {

    let name = useRef();
    let price = useRef();

    let [view, setview] = useState();

    let user = useSelector((state) => state.userReducer);
    console.log(user, "final data");

    let dispatch = useDispatch();
    //add data
    let Addproduct = () => {
        let product = {
            name: name.current.value,
            price: price.current.value,
            productImage: "https://www.researchgate.net/publication/316608199/figure/fig1/AS:613809668497409@1523355037519/llustrative-examples-of-product-image-Product-images-with-various-viewpoints-top.png",
        }
        console.log(product);

        dispatch({ type: POST_PRODUCT_PENDING, payload: product });
    };

    //delete data
    let deletedata = (id) => {
        console.log(id);
        dispatch({ type: DELETE_PRODUCT_PENDING, payload: id })
    };

    //updata data

    let handleupdata = (e) => {
        setview({ ...view, [e.target.name]: e.target.value });
    }

    let Updata = () => {
        dispatch({ type: PUT_PRODUCT_PENDING, payload: view })
        console.log(view , "final view");
    }


    return (
        <>
            <div >
                <div class="form-box mx-auto" style={{ width: "18rem" }}>
                    <h3 class="text-center">PRODUCT NAME</h3>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input class="form-control" id="name" type="text" name="Name" ref={name} />
                    </div>
                    <div class="form-group">
                        <label for="email">Price</label>
                        <input class="form-control" id="email" type="number" name="price" ref={price} />
                    </div>
                    <button class="btn btn-primary" type="submit" onClick={Addproduct}>submit</button>
                </div >
            </div >


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="text-center">PRODUCT NAME</h3>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input class="form-control" type="text" name="name" value={view?.name} onChange={handleupdata} />
                            </div>
                            <div class="form-group">
                                <label for="email">Price</label>
                                <input class="form-control" type="number" name="price" value={view?.price} onChange={handleupdata} />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={Updata}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* data map */}
            <div class="d-flex justify-content-between flex-wrap">
                {
                    user.user.map((value, index) => {
                        return (
                            <>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img src={value.productImage} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <h5 class="card-title">${value.price}/-</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button class="btn btn-danger m-2" onClick={() => deletedata(value.id)}>Delete</button>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setview(value)}>Updata</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Product
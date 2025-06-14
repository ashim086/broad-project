import { Product } from "../model/product.model";
import { Purchase } from "../model/purchaseHistory.model";
import asyncHandler from "../util/asyncHandler";
import customError from "../util/customError";
import successMsG from "../util/responseHandler";

export const purchase = asyncHandler(async (req, res, next) => {

    console.log("request came here")
    const purchaseData = req.body
    const { _id } = req.user
    const { productID } = req.params

    const product = await Product.findById({ _id: productID.toString() })
    if (!product) {
        new customError(404, "Product not found")
    }

    const buyRequest = new Purchase({
        ...purchaseData,
        product: productID,
        user: _id
    })

    await buyRequest.save()

    successMsG(201, buyRequest, res, "Your purchase request hase been made")

})
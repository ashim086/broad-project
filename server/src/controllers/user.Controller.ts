import { NextFunction, Request, Response } from "express"
import customError from "../util/customError"
import successMsG from "../util/responseHandler"
import asyncHandler from "../util/asyncHandler"

export const routeTest = (req: Request, res: Response) => {

    const data = [
        {
            id: 1,
            name: 'ashim'
        },
        {
            id: 1,
            name: 'ashim'
        },
        {
            id: 1,
            name: 'ashim'
        },
    ]


    if (true) {

        throw new customError(200, "globalerror test")


        successMsG(201, data, res)

    }
}


export const asycntest = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const exp = 2
})
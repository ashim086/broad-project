import { Response } from "express"

const successMsG = (statusCode: number, data: any, res: Response, ms?: string) => {

    let code = statusCode || 200
    let message = ms ?? 'opertaion succesfull'

    const msg = {
        message,
        status: 'success',
        data,
        success: true
    }
    res.status(code).json(msg)
}

export default successMsG
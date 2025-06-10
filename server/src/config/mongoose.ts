import mongoose from 'mongoose'

export const dbConnect = async (URI: string) => {


    try {

        await mongoose.connect(URI)
            .then(() =>
                console.log('database connected successfully')
            )
    } catch (error) {

        if (error) {

            throw new Error
        }

    }

}
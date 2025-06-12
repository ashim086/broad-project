import * as yup from 'yup';

export const ProductSchema = yup.object({
    name: yup.string().required('Enter Product Name'),
    price: yup.string().required('Enter Product price'),
    description: yup.string().required('Enter Product description'),
    flavour: yup.string().required('Enter Product flavour'),
    product: yup
        .mixed()
        .test('required', 'Product image is required', (value) => {
            if (!value) return false;

            if (Array.isArray(value)) {
                return value.length > 0;
            }

            return true;
        }),
});

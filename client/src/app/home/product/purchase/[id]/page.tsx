import CheckoutPage from "@/components/home/product/chekcout";

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    return (
        <main className="w-full h-full">
            <CheckoutPage id={id} />
        </main>
    );
}

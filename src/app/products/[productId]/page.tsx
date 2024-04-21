export default function ProductId({params}: any
){
    console.log(params)
    return (
        <>
            <h1>Product {params.productId}</h1>
        </>
    )
}
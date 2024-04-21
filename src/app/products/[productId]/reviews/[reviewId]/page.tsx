export default function ReviewId({params}: any){
    return (
        <>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </>
    )
}
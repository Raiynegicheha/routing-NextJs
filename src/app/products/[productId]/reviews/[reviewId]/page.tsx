import { notFound } from "next/navigation"

export default function ReviewId({params}: any){
    if (parseInt(params.reviewId) > 1000 ){
        notFound();
    }
    return (
        <>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </>
    )
}
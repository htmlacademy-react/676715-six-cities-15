import { TReviews } from "../../types/review";
import ReviewItem from "../review-item/review-item";

type TReviewListmProps = {
  reviews: TReviews
};

export default function ReviewsList({reviews}: TReviewListmProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews.map((review) =><ReviewItem key={review.id} review={review}/>)
      }
    </ul>
  )
}

import StarRatings from "react-star-ratings";
import { calcDate } from "../../utils/date";
import Avatar from 'react-avatar';

const Comment = ({ comments }) => {
  return (
    <>
      {comments?.map((comment) => {
        const {day, month, year, dayOfWeek} = calcDate(comment.updatedAt)
        const fullName =  `${comment.user.name} ${comment.user.surname}`
        return (
          <div className="flex gap-10 py-10 border-b-2">
            <Avatar name={fullName} round={true} size="60px"/>
            <div className="w-1/2">
              <div className="flex items-end mb-5">
                <StarRatings
                  rating={comment.rating}
                  starRatedColor="red"
                  numberOfStars={5}
                  name="rating"
                  starDimension="18px"
                  starSpacing="0"
                />
                <p className="text-sm text-gray-700 ml-3">
                  {`${day} ${month} ${year} ${dayOfWeek} | ${fullName}`}
                </p>
              </div>
              <div className="bg-gray-300 rounded-md p-4 break-all">
                <p className="text-sm">{comment.comment}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comment;

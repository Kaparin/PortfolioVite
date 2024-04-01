import {Icon} from "./icons/Icon.tsx";

type StarRatingProps = {
    rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({rating}) => {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => {
                return <Icon key={star} iconId="Star" width={`18`} height={`18`} fill={star <= rating ? 'gold' : 'grey'}/>
            })}
        </div>
    );
}

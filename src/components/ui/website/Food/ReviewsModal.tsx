import React from 'react';
import { Modal, Rate, Progress } from 'antd';
// import { Star } from 'lucide-react'; 

interface Review {
  author: string;
  rating: number;
  comment?: string;
}

interface ReviewsModalProps {
    open: boolean;
  onClose: () => void;
  
}

const reviews: Review[] = [
  { author: 'Hans Müller', rating: 4 },
  { author: 'Klara Schmidt', rating: 5, comment: 'The burgers tasted good, but the service was a bit slow during peak hours. The restaurant could have been cleaner. Overall, an okay experience.' },
  { author: 'Jonas Schmidt', rating: 5, comment: 'Great experience overall. The quality of work was top-notch, and they made sure everything was perfect. I\'ll definitely be back again.' },
  { author: 'Lena Müller', rating: 5, comment: 'Excellent Service' },
  { author: 'Lukas Weber', rating: 4 },
  { author: 'Emma Fischer', rating: 5 }
];

const ratingStats = {
  5: 66.1,
  4: 19.1,
  3: 6.6,
  2: 3.1,
  1: 5.1,
};

const averageRating = 4.2;

const ReviewsModal: React.FC<ReviewsModalProps> = ({ open, onClose }) => {
    return (
        <Modal
        open={open}
        onCancel={onClose}
        footer={null} 
        centered
        title={
          <div className="flex-col items-center mt-3 ">
            <h3 className="text-lg font-semibold">Reviews</h3>
            <p className="text-sm text-gray-500">Burger King- Vienna</p>
          </div>
        }
        width={550}
      >
        <div className="py-4">
          {/* Overall Rating Section */}
          <div className="flex lg:flex-row flex-col items-center gap-6 px-6 py-4 bg-orange-50 rounded-lg mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold">{averageRating}</div>
              <Rate disabled defaultValue={averageRating} className="text-sm" />
              <div className="text-xs text-gray-500 mt-1">Total Rating (165)</div>
            </div>

            <div className="flex-1">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center  gap-2 mb-1">
                  <span className="text-sm w-3">{rating}</span>
                  <Progress 
                    percent={ratingStats[rating as keyof typeof ratingStats]} 
                    size="small"
                    showInfo={false}
                    strokeColor="#f97316"
                  />
                  <span className="text-xs text-gray-500 lg:w-8 w-[270px] text-center">
                    {ratingStats[rating as keyof typeof ratingStats]}%
                  </span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Reviews List */}
          <div className="space-y-6 h-[400px] overflow-auto mt-8">
            {reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{review.author}</h4>
                  <Rate disabled defaultValue={review.rating} className="text-sm" />
                </div>
                {review.comment && (
                  <p className="text-sm text-gray-600">{review.comment}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    );
};

export default ReviewsModal;
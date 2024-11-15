import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { StarRating } from "@/components/ui/rating";
import { StarIcon } from "lucide-react";

const reviews = [
  {
    name: "Emily Selman",
    avatar: "https://placehold.co/40",
    rating: 5,
    comment:
      "This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.",
    createdAt: "2024-10-23",
  },
  {
    name: "Hector Gibbons",
    avatar: "https://placehold.co/40",
    rating: 5,
    comment:
      "Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!",
    createdAt: "2024-10-23",
  },
  {
    name: "Mark Edwards",
    avatar: "https://placehold.co/40",
    rating: 4,
    comment:
      "I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.",
    createdAt: "2024-10-23",
  },
  {
    name: "Emily Selman",
    avatar: "https://placehold.co/40",
    rating: 5,
    comment:
      "This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.",
    createdAt: "2024-10-23",
  },
  {
    name: "Hector Gibbons",
    avatar: "https://placehold.co/40",
    rating: 5,
    comment:
      "Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!",
    createdAt: "2024-10-23",
  },
  {
    name: "Mark Edwards",
    avatar: "https://placehold.co/40",
    rating: 4,
    comment:
      "I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.",
    createdAt: "2024-10-23",
  },
];

const ratingCounts = [63, 10, 6, 12, 9];

const WriteReviewDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Review this product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="rating">Rating</Label>
            <StarRating name="rating" value={0} variant="yellow" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="review">Your Review</Label>
            <Textarea
              id="review"
              placeholder="Write your review here..."
              className="h-32"
            />
          </div>
        </div>
        <Button type="submit">Submit Review</Button>
      </DialogContent>
    </Dialog>
  );
};

export default function CustomerReview() {
  const totalReviews = 1624;
  const averageRating = 3.5;

  return (
    <div className="w-full mx-auto border p-6 rounded-md">
      <div>
        <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:flex gap-2">
            <div>
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              <div className="flex items-center mb-4">
                <span className="flex items-center">
                  {averageRating}
                  <StarIcon className="w-5 h-5 ml-1 text-yellow-400 fill-yellow-400" />
                </span>
                <span className="ml-2 text-sm">
                  Based on {totalReviews} reviews
                </span>
              </div>
              {[5, 4, 3, 2, 1].map((stars, index) => (
                <div
                  key={stars}
                  className="flex items-center mb-2 max-w-[320px]"
                >
                  <div className="grid grid-cols-6 w-full items-center">
                    <div className="flex">
                      <span className="text-sm">{stars} Stars</span>
                    </div>
                    <Progress
                      fill="bg-yellow-400"
                      value={ratingCounts[index]}
                      className="h-2 w-full col-span-4 bg-muted"
                    />
                    <span className="ml-2 text-sm">{ratingCounts[index]}%</span>
                  </div>
                </div>
              ))}
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Share your thoughts</h3>
                <p className="text-sm mb-4">
                  If you&apos;ve used this product, share your thoughts with
                  other customers
                </p>
                <WriteReviewDialog />
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-2">
            {reviews.map((review, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-semibold">{review.name}</h4>
                    <StarRating
                      size={16}
                      variant="yellow"
                      readonly
                      value={review.rating}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {review.createdAt}
                  </span>
                </div>
                <p className="text-sm">{review.comment}</p>
                <Separator className="mt-4" />
              </div>
            ))}
            <div className="flex justify-end">
              <Button>Load More Reviews</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

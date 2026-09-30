// import React from "react";
// import { BiStar } from "react-icons/bi";

// const ReviewsTab = ({ reviews }) => {
//   return (
//     <div className="space-y-6">
//       <h3 className="text-xl font-serif font-bold text-[#4a2e18]">My Reviews & Ratings</h3>
//       <div className="space-y-4">
//         {reviews.map((item) => (
//           <div key={item.id} className="border border-stone-200 p-4 rounded-sm bg-stone-50 space-y-2">
//             <div className="flex justify-between items-center">
//               <h4 className="font-bold text-sm text-[#4a2e18]">{item.productName}</h4>
//               <div className="flex text-amber-500">
//                 {[...Array(item.rating)].map((_, i) => (
//                   <BiStar key={i} className="fill-current text-sm" />
//                 ))}
//               </div>
//             </div>
//             <p className="text-xs text-stone-600">"{item.comment}"</p>
//             <span className="text-[10px] text-stone-400 block">Reviewed on {item.date}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewsTab;

import React from "react";
import { Link } from "react-router-dom";
import { BiStar, BiShoppingBag } from "react-icons/bi";

const ReviewsTab = ({ reviews = [] }) => {
  // ✅ Empty state
  if (reviews.length === 0) {
    return (
      <div className="space-y-6">
        <div className="pb-4 border-b border-stone-200">
          <h3 className="text-xl font-serif font-bold text-[#4a2e18]">
            My Reviews & Ratings
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Manage your product reviews and ratings.
          </p>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-sm p-8 text-center">
          <BiStar className="text-5xl text-stone-300 mx-auto mb-3" />
          <p className="text-sm text-stone-500">
            Aapne abhi tak koi review nahi diya.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-stone-200">
        <h3 className="text-xl font-serif font-bold text-[#4a2e18]">
          My Reviews & Ratings
        </h3>
        <p className="text-xs text-stone-500 mt-1">
          You have submitted <strong>{reviews.length}</strong>{" "}
          {reviews.length === 1 ? "review" : "reviews"}.
        </p>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review, idx) => {
          // ✅ Product data safely nikaalo
          const product = review.targetId || {};
          const productId = product._id || review.targetId;
          const productName =
            product.name || review.productName || "Product";
          const productImage =
            product.image || review.productImage || "";
          const productSlug = product.slug || "";

          // ✅ Date formatted
          const reviewDate = review.createdAt
            ? new Date(review.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : review.date || "N/A";

          return (
            <div
              key={review._id || idx}
              className="bg-white border border-stone-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                {/* ✅ Product Image — clickable */}
                <Link
                  to={
                    productId
                      ? `/product/${productSlug || productId}`
                      : "#"
                  }
                  className="shrink-0"
                >
                  {productImage ? (
                    <img
                      src={productImage}
                      alt={productName}
                      className="w-16 h-16 object-cover rounded-lg border border-stone-200"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-stone-100 rounded-lg border border-stone-200 flex items-center justify-center">
                      <BiShoppingBag className="text-stone-400 text-2xl" />
                    </div>
                  )}
                </Link>

                {/* ✅ Review Content */}
                <div className="flex-1 min-w-0">
                  {/* Product Name — clickable */}
                  <Link
                    to={
                      productId
                        ? `/product/${productSlug || productId}`
                        : "#"
                    }
                    className="hover:text-[#8c0a15] transition-colors"
                  >
                    <h4 className="font-bold text-sm text-[#4a2e18] line-clamp-1">
                      {productName}
                    </h4>
                  </Link>

                  {/* ✅ Rating Stars */}
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <BiStar
                        key={i}
                        className={
                          i < review.rating
                            ? "text-amber-500 fill-current text-sm"
                            : "text-stone-300 text-sm"
                        }
                      />
                    ))}
                    <span className="text-xs text-stone-500 ml-1">
                      {review.rating}/5
                    </span>
                  </div>

                  {/* ✅ Comment */}
                  <p className="text-xs text-stone-700 mt-2">
                    "{review.comment}"
                  </p>

                  {/* ✅ Date + Status */}
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <span className="text-[10px] text-stone-400">
                      Reviewed on {reviewDate}
                    </span>

                    {review.status && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          review.status === "approved"
                            ? "bg-emerald-100 text-emerald-700"
                            : review.status === "rejected"
                            ? "bg-rose-100 text-rose-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {review.status}
                      </span>
                    )}
                  </div>

                  {/* ✅ Admin Reply */}
                  {review.adminReply && (
                    <div className="mt-3 bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                      <p className="text-[10px] font-bold text-blue-700 uppercase mb-1">
                        Admin Reply:
                      </p>
                      <p className="text-xs text-blue-900">
                        {review.adminReply}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewsTab;
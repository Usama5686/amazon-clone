import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const removeItemsFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };
  console.log(id + "id");

  return (
    <div className=" grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <Currency quantity={price} currency="GBP" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://links.papareact.com/fdw"
              loading="lazy"
              className="w-12"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE NEXT-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button mt-auto">
          Add to Basket
        </button>
        <button onClick={removeItemsFromBasket} className="button mt-auto">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

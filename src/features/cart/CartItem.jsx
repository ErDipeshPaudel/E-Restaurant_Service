import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem(item) {
  const { pizzaId, name, quantity, totalPrice } = item.item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name} {pizzaId}
      </p>
      <div className="j flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;

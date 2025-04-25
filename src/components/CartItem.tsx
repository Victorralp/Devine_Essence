import { useCart } from '../context/CartContext';
import { Product } from '../data/products';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

interface CartItemProps {
  item: Product & { quantity: number };
}

export function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600">${item.price} each</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
          disabled={item.quantity <= 1}
        >
          <MinusIcon className="h-4 w-4 text-gray-600" />
        </button>
        
        <span className="w-8 text-center">{item.quantity}</span>
        
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <PlusIcon className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      
      <div className="ml-6 w-20 text-right">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-6 text-gray-400 hover:text-red-500"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
} 
import { useCartStore } from '@/stores/useCartStore';

export function Cart() {
  const { items, total } = useCartStore();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {items.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty</p>
      ) : (
        <p className="text-muted-foreground">Cart items coming soon...</p>
      )}
    </div>
  );
}
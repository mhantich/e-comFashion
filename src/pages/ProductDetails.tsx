import { useParams } from 'react-router-dom';

export function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>
      <p className="text-muted-foreground">Product {id} details coming soon...</p>
    </div>
  );
}
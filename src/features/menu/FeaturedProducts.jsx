import ProductCard from "../products/ProductCard"
import products from './data/products.json'

function FeatureProduct() {
  const handleAddToCart = (product) => {
    console.log('added:', product)
  }

  return (
    <div className="w-full">
      <h3 className="flex items-center gap-2 font-bold text-lg mb-4">
        <span>⭐</span>
        <span>الأكثر طلباً وتميزاً</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products
          .filter((p) => p.featured)
          .map((prod) => (
            <ProductCard key={prod.id} product={prod} onAddToCart={handleAddToCart} />
          ))}
      </div>
    </div>
  )
}
export default FeatureProduct
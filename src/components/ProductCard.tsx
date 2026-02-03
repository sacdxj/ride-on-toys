import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  ageRange: string;
  imageSrc: string;
  badge?: string;
}

const ProductCard = ({ id, name, description, price, ageRange, imageSrc, badge }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {badge && (
          <span className="absolute top-4 right-4 bg-primary-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
            {badge}
          </span>
        )}
        <div className="absolute bottom-4 left-4 bg-primary-blue text-white px-3 py-1 rounded-full text-sm">
          {ageRange}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-orange">¥{price}</span>
          <Link
            href={`/products/${id}`}
            className="bg-primary-blue text-white px-6 py-2 rounded-full hover:bg-primary-purple transition-colors duration-200"
          >
            查看详情
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

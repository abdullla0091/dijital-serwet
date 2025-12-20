import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, ArrowLeft } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  rating: number;
  students?: number;
  duration?: string;
  image: string;
  category: string;
  accessType: "free" | "premium" | "pro";
}

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

const ProductCard = ({ product }: { product: Product }) => (
  <Card className="group hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col">
    <div className="relative aspect-video overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {product.badge && (
        <Badge
          variant={product.badgeVariant || "default"}
          className="absolute top-4 right-4 shadow-md"
        >
          {product.badge}
        </Badge>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <CardHeader className="pb-2 flex-grow">
      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {product.title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-2 mt-2">
        {product.description}
      </p>
    </CardHeader>
    <CardContent className="pb-4">
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Star className="w-4 h-4 text-warning fill-warning" />
          {product.rating}
        </span>
        {product.students !== undefined && (
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {product.students.toLocaleString("ar-IQ")}
          </span>
        )}
        {product.duration && (
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {product.duration}
          </span>
        )}
      </div>
    </CardContent>
    <CardFooter className="pt-0 mt-auto">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
        <Button variant="outline" size="sm" className="group/btn">
          زیاتر ببینە
          <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
        </Button>
      </div>
    </CardFooter>
  </Card>
);

const ProductGrid = ({ products, emptyMessage = "هیچ بەرهەمێک نەدۆزرایەوە" }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{emptyMessage}</h3>
        <p className="text-muted-foreground">
          هەوڵ بدە بە وشەی تر بگەڕێیت یان فلتەرەکان بگۆڕە
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

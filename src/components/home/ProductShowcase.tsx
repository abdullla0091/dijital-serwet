import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Wrench, HeadphonesIcon, Star, Users, Clock } from "lucide-react";

interface Product {
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
}

interface ShowcaseSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  products: Product[];
  viewAllLink: string;
  viewAllLabel: string;
}

const ProductCard = ({ product }: { product: Product }) => (
  <Card className="group hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
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
    <CardHeader className="pb-2">
      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {product.title}
      </h3>
    </CardHeader>
    <CardContent className="pb-4">
      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
        {product.description}
      </p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Star className="w-4 h-4 text-warning fill-warning" />
          {product.rating}
        </span>
        {product.students && (
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {product.students}
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
    <CardFooter className="pt-0">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
          )}
        </div>
        <Button variant="outline" size="sm">
          زیاتر ببینە
        </Button>
      </div>
    </CardFooter>
  </Card>
);

const ShowcaseSection = ({ title, description, icon, products, viewAllLink, viewAllLabel }: ShowcaseSectionProps) => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              {icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-xl">{description}</p>
        </div>
        <Link to={viewAllLink}>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            {viewAllLabel}
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

const ProductShowcase = () => {
  const courses: Product[] = [
    {
      id: "1",
      title: "کۆرسی تەواوی دیزاینی گرافیکی",
      description: "فێربوونی هەموو بنەماکانی دیزاین لە سفرەوە تا ئاستی پێشەکی",
      price: "٤٩,٠٠٠ د.ع",
      originalPrice: "٧٩,٠٠٠ د.ع",
      badge: "پڕفرۆشترین",
      rating: 4.9,
      students: 2450,
      duration: "٢٤ کاتژمێر",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
    },
    {
      id: "2",
      title: "پڕۆگرامسازی وێب لە سفرەوە",
      description: "فێربوونی HTML, CSS, JavaScript و React بۆ دروستکردنی وێبسایت",
      price: "٥٩,٠٠٠ د.ع",
      badge: "نوێ",
      badgeVariant: "secondary",
      rating: 4.8,
      students: 1820,
      duration: "٣٦ کاتژمێر",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
    },
    {
      id: "3",
      title: "مارکێتنگی دیجیتاڵ",
      description: "ستراتیژی و تەکنیکەکانی مارکێتنگ لە تۆڕە کۆمەڵایەتییەکاندا",
      price: "٣٩,٠٠٠ د.ع",
      rating: 4.7,
      students: 3200,
      duration: "١٨ کاتژمێر",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
    },
  ];

  const tools: Product[] = [
    {
      id: "1",
      title: "ئامرازی دەستکاریکردنی وێنە",
      description: "ئامرازێکی بەهێز بۆ دەستکاریکردنی وێنەکان بە شێوەیەکی پیشەیی",
      price: "١٥,٠٠٠ د.ع/مانگ",
      badge: "پڕۆ",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400&fit=crop",
    },
    {
      id: "2",
      title: "بەڕێوەبردنی پڕۆژە",
      description: "سیستەمی تەواو بۆ بەڕێوەبردن و شوێنپێگرتنی پڕۆژەکان",
      price: "بەخۆڕایی",
      badge: "خۆڕایی",
      badgeVariant: "outline",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    },
    {
      id: "3",
      title: "دروستکردنی CV",
      description: "دروستکردنی CVی پیشەیی بە چەندین داڕشتەی جوان",
      price: "٥,٠٠٠ د.ع",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    },
  ];

  const services: Product[] = [
    {
      id: "1",
      title: "ڕاوێژکاری بزنس",
      description: "ڕاوێژکاری تایبەت بۆ گەشەپێدانی بزنسەکەت لەلایەن پسپۆڕانەوە",
      price: "١٠٠,٠٠٠ د.ع/کاتژمێر",
      badge: "VIP",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    },
    {
      id: "2",
      title: "دیزاینی لۆگۆ",
      description: "دیزاینی لۆگۆی تایبەت و پیشەیی بۆ براندەکەت",
      price: "٧٥,٠٠٠ د.ع",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&h=400&fit=crop",
    },
    {
      id: "3",
      title: "SEO و چاکسازی وێب",
      description: "باشترکردنی وێبسایتەکەت بۆ مۆتۆڕەکانی گەڕان",
      price: "٥٠,٠٠٠ د.ع/مانگ",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1571721795195-a2d50c2db5b8?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="bg-background">
      <ShowcaseSection
        title="کۆرسەکان"
        description="باشترین کۆرسەکانی فێرکاری بۆ گەشەپێدانی تواناکانت"
        icon={<BookOpen className="w-6 h-6" />}
        products={courses}
        viewAllLink="/courses"
        viewAllLabel="هەموو کۆرسەکان"
      />

      <div className="bg-muted/30">
        <ShowcaseSection
          title="ئامرازەکان"
          description="ئامرازە دیجیتاڵیەکان بۆ ئاسانکردنی کارەکانت"
          icon={<Wrench className="w-6 h-6" />}
          products={tools}
          viewAllLink="/tools"
          viewAllLabel="هەموو ئامرازەکان"
        />
      </div>

      <ShowcaseSection
        title="خزمەتگوزاریەکان"
        description="خزمەتگوزاری پیشەیی بۆ گەشەپێدانی کارەکەت"
        icon={<HeadphonesIcon className="w-6 h-6" />}
        products={services}
        viewAllLink="/services"
        viewAllLabel="هەموو خزمەتگوزاریەکان"
      />
    </div>
  );
};

export default ProductShowcase;

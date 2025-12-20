import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchFilter from "@/components/products/SearchFilter";
import ProductGrid, { Product } from "@/components/products/ProductGrid";
import { Wrench } from "lucide-react";

const toolsData: Product[] = [
  {
    id: "1",
    title: "ئامرازی دەستکاریکردنی وێنە",
    description: "ئامرازێکی بەهێز بۆ دەستکاریکردنی وێنەکان بە شێوەیەکی پیشەیی",
    price: "١٥,٠٠٠ د.ع/مانگ",
    badge: "پڕۆ",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400&fit=crop",
    category: "design",
    accessType: "pro",
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
    category: "productivity",
    accessType: "free",
  },
  {
    id: "3",
    title: "دروستکردنی CV",
    description: "دروستکردنی CVی پیشەیی بە چەندین داڕشتەی جوان",
    price: "٥,٠٠٠ د.ع",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    category: "productivity",
    accessType: "premium",
  },
  {
    id: "4",
    title: "شیکاری داتا",
    description: "ئامرازی شیکاری داتا بۆ بینینی ڕاپۆرت و ئاماری بزنسەکەت",
    price: "٢٥,٠٠٠ د.ع/مانگ",
    badge: "نوێ",
    badgeVariant: "secondary",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "analytics",
    accessType: "pro",
  },
  {
    id: "5",
    title: "ڕێکخەری کات",
    description: "ئامرازێک بۆ بەڕێوەبردنی کات و ئەرکەکان بە شێوەیەکی کاریگەر",
    price: "بەخۆڕایی",
    badge: "خۆڕایی",
    badgeVariant: "outline",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
    category: "productivity",
    accessType: "free",
  },
  {
    id: "6",
    title: "کۆدی ڕەنگاوڕەنگ",
    description: "ئامرازی دروستکردن و گۆڕینی ڕەنگەکان بۆ دیزاینەرەکان",
    price: "١٠,٠٠٠ د.ع",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=400&fit=crop",
    category: "design",
    accessType: "premium",
  },
];

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    priceRange: "all",
    category: "all",
    accessType: "all",
  });

  const filteredProducts = useMemo(() => {
    return toolsData.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.title.includes(searchQuery) ||
        product.description.includes(searchQuery);

      const matchesCategory =
        filters.category === "all" || product.category === filters.category;

      const matchesAccessType =
        filters.accessType === "all" || product.accessType === filters.accessType;

      return matchesSearch && matchesCategory && matchesAccessType;
    });
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Wrench className="w-6 h-6" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">ئامرازەکان</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              ئامرازە دیجیتاڵیەکان بۆ ئاسانکردنی کارەکانت. لە خۆڕایی تا پڕۆ، بەرهەمی گونجاوت هەڵبژێرە.
            </p>
          </div>

          {/* Search and Filters */}
          <SearchFilter
            productType="tools"
            onSearch={setSearchQuery}
            onFilterChange={setFilters}
          />

          {/* Results Count */}
          <div className="mb-6 text-muted-foreground">
            {filteredProducts.length} ئامراز دۆزرایەوە
          </div>

          {/* Product Grid */}
          <ProductGrid
            products={filteredProducts}
            emptyMessage="هیچ ئامرازێک نەدۆزرایەوە"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;

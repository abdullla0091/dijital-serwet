import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchFilter from "@/components/products/SearchFilter";
import ProductGrid, { Product } from "@/components/products/ProductGrid";
import { BookOpen } from "lucide-react";

const coursesData: Product[] = [
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
    category: "design",
    accessType: "premium",
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
    category: "programming",
    accessType: "premium",
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
    category: "marketing",
    accessType: "premium",
  },
  {
    id: "4",
    title: "فێربوونی فۆتۆشۆپ",
    description: "فێربوونی تەواوی ئەدۆبی فۆتۆشۆپ بۆ دەستکاریکردنی وێنەکان",
    price: "بەخۆڕایی",
    badge: "خۆڕایی",
    badgeVariant: "outline",
    rating: 4.6,
    students: 5600,
    duration: "١٢ کاتژمێر",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=400&fit=crop",
    category: "design",
    accessType: "free",
  },
  {
    id: "5",
    title: "پڕۆگرامسازی پایتۆن",
    description: "فێربوونی زمانی پڕۆگرامسازی پایتۆن لە سفرەوە تا ئاستی پێشەکی",
    price: "٦٥,٠٠٠ د.ع",
    badge: "پڕۆ",
    rating: 4.9,
    students: 1450,
    duration: "٤٠ کاتژمێر",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop",
    category: "programming",
    accessType: "pro",
  },
  {
    id: "6",
    title: "بەڕێوەبردنی بزنس",
    description: "فێربوونی بنەماکانی بەڕێوەبردنی بزنس و سەرکردایەتی",
    price: "٤٥,٠٠٠ د.ع",
    rating: 4.5,
    students: 980,
    duration: "١٥ کاتژمێر",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    category: "business",
    accessType: "premium",
  },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    priceRange: "all",
    category: "all",
    accessType: "all",
  });

  const filteredProducts = useMemo(() => {
    return coursesData.filter((product) => {
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
                <BookOpen className="w-6 h-6" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">کۆرسەکان</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              باشترین کۆرسەکانی فێرکاری بۆ گەشەپێدانی تواناکانت. هەموو کۆرسەکان بە کوالیتی بەرز و لەلایەن پسپۆڕانەوە ئامادەکراون.
            </p>
          </div>

          {/* Search and Filters */}
          <SearchFilter
            productType="courses"
            onSearch={setSearchQuery}
            onFilterChange={setFilters}
          />

          {/* Results Count */}
          <div className="mb-6 text-muted-foreground">
            {filteredProducts.length} کۆرس دۆزرایەوە
          </div>

          {/* Product Grid */}
          <ProductGrid
            products={filteredProducts}
            emptyMessage="هیچ کۆرسێک نەدۆزرایەوە"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;

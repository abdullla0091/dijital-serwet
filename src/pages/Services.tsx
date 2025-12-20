import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchFilter from "@/components/products/SearchFilter";
import ProductGrid, { Product } from "@/components/products/ProductGrid";
import { HeadphonesIcon } from "lucide-react";

const servicesData: Product[] = [
  {
    id: "1",
    title: "ڕاوێژکاری بزنس",
    description: "ڕاوێژکاری تایبەت بۆ گەشەپێدانی بزنسەکەت لەلایەن پسپۆڕانەوە",
    price: "١٠٠,٠٠٠ د.ع/کاتژمێر",
    badge: "VIP",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    category: "consulting",
    accessType: "pro",
  },
  {
    id: "2",
    title: "دیزاینی لۆگۆ",
    description: "دیزاینی لۆگۆی تایبەت و پیشەیی بۆ براندەکەت",
    price: "٧٥,٠٠٠ د.ع",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&h=400&fit=crop",
    category: "design",
    accessType: "premium",
  },
  {
    id: "3",
    title: "SEO و چاکسازی وێب",
    description: "باشترکردنی وێبسایتەکەت بۆ مۆتۆڕەکانی گەڕان",
    price: "٥٠,٠٠٠ د.ع/مانگ",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1571721795195-a2d50c2db5b8?w=600&h=400&fit=crop",
    category: "marketing",
    accessType: "premium",
  },
  {
    id: "4",
    title: "دروستکردنی وێبسایت",
    description: "دروستکردنی وێبسایتی مۆدێرن و ڕیسپۆنسیڤ بۆ بزنسەکەت",
    price: "٢٠٠,٠٠٠ د.ع",
    badge: "پڕفرۆشترین",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "development",
    accessType: "premium",
  },
  {
    id: "5",
    title: "بەڕێوەبردنی تۆڕە کۆمەڵایەتییەکان",
    description: "بەڕێوەبردنی هەژمارەکانت لە تۆڕە کۆمەڵایەتییەکاندا",
    price: "٧٥,٠٠٠ د.ع/مانگ",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    category: "marketing",
    accessType: "premium",
  },
  {
    id: "6",
    title: "دیزاینی ناسنامەی بازرگانی",
    description: "دیزاینی تەواوی ناسنامەی بازرگانی (کارتی بزنس، سەرنامە، و هتد)",
    price: "١٥٠,٠٠٠ د.ع",
    badge: "پڕۆ",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
    category: "design",
    accessType: "pro",
  },
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    priceRange: "all",
    category: "all",
    accessType: "all",
  });

  const filteredProducts = useMemo(() => {
    return servicesData.filter((product) => {
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
                <HeadphonesIcon className="w-6 h-6" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">خزمەتگوزاریەکان</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              خزمەتگوزاری پیشەیی بۆ گەشەپێدانی کارەکەت. تیمی پسپۆڕمان ئامادەن یارمەتیت بدەن.
            </p>
          </div>

          {/* Search and Filters */}
          <SearchFilter
            productType="services"
            onSearch={setSearchQuery}
            onFilterChange={setFilters}
          />

          {/* Results Count */}
          <div className="mb-6 text-muted-foreground">
            {filteredProducts.length} خزمەتگوزاری دۆزرایەوە
          </div>

          {/* Product Grid */}
          <ProductGrid
            products={filteredProducts}
            emptyMessage="هیچ خزمەتگوزارییەک نەدۆزرایەوە"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

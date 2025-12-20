import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: FilterState) => void;
  productType: "courses" | "services" | "tools";
}

interface FilterState {
  priceRange: string;
  category: string;
  accessType: string;
}

const SearchFilter = ({ onSearch, onFilterChange, productType }: SearchFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: "all",
    category: "all",
    accessType: "all",
  });

  const categories = {
    courses: [
      { value: "all", label: "هەموو" },
      { value: "design", label: "دیزاین" },
      { value: "programming", label: "پڕۆگرامسازی" },
      { value: "marketing", label: "مارکێتنگ" },
      { value: "business", label: "بزنس" },
    ],
    services: [
      { value: "all", label: "هەموو" },
      { value: "consulting", label: "ڕاوێژکاری" },
      { value: "design", label: "دیزاین" },
      { value: "development", label: "گەشەپێدان" },
      { value: "marketing", label: "مارکێتنگ" },
    ],
    tools: [
      { value: "all", label: "هەموو" },
      { value: "productivity", label: "بەرهەمداری" },
      { value: "design", label: "دیزاین" },
      { value: "development", label: "گەشەپێدان" },
      { value: "analytics", label: "شیکاری" },
    ],
  };

  const priceRanges = [
    { value: "all", label: "هەموو نرخەکان" },
    { value: "free", label: "خۆڕایی" },
    { value: "under25", label: "ژێر ٢٥,٠٠٠ د.ع" },
    { value: "25to50", label: "٢٥,٠٠٠ - ٥٠,٠٠٠ د.ع" },
    { value: "50to100", label: "٥٠,٠٠٠ - ١٠٠,٠٠٠ د.ع" },
    { value: "over100", label: "سەروو ١٠٠,٠٠٠ د.ع" },
  ];

  const accessTypes = [
    { value: "all", label: "هەموو" },
    { value: "free", label: "خۆڕایی" },
    { value: "premium", label: "پریمیۆم" },
    { value: "pro", label: "پڕۆ" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters = { priceRange: "all", category: "all", accessType: "all" };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== "all");

  return (
    <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-card mb-8">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="گەڕان بۆ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-12 h-12 text-base rounded-xl border-border/50 focus:border-primary"
          />
        </div>
        <Button type="submit" variant="hero" size="lg" className="px-6">
          گەڕان
        </Button>
        <Button
          type="button"
          variant={showFilters ? "default" : "outline"}
          size="lg"
          onClick={() => setShowFilters(!showFilters)}
          className="px-4"
        >
          <SlidersHorizontal className="w-5 h-5" />
        </Button>
      </form>

      {/* Filters */}
      {showFilters && (
        <div className="pt-4 border-t border-border/50 animate-fade-in">
          <div className="flex flex-wrap items-center gap-4">
            {/* Category Filter */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                جۆر
              </label>
              <Select
                value={filters.category}
                onValueChange={(value) => handleFilterChange("category", value)}
              >
                <SelectTrigger className="h-11 rounded-xl">
                  <SelectValue placeholder="هەڵبژاردن" />
                </SelectTrigger>
                <SelectContent>
                  {categories[productType].map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range Filter */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                نرخ
              </label>
              <Select
                value={filters.priceRange}
                onValueChange={(value) => handleFilterChange("priceRange", value)}
              >
                <SelectTrigger className="h-11 rounded-xl">
                  <SelectValue placeholder="هەڵبژاردن" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Access Type Filter */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                جۆری دەستگەیشتن
              </label>
              <Select
                value={filters.accessType}
                onValueChange={(value) => handleFilterChange("accessType", value)}
              >
                <SelectTrigger className="h-11 rounded-xl">
                  <SelectValue placeholder="هەڵبژاردن" />
                </SelectTrigger>
                <SelectContent>
                  {accessTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-destructive mt-6"
              >
                <X className="w-4 h-4 ml-1" />
                پاککردنەوە
              </Button>
            )}
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
              {filters.category !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  {categories[productType].find((c) => c.value === filters.category)?.label}
                  <X
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => handleFilterChange("category", "all")}
                  />
                </Badge>
              )}
              {filters.priceRange !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  {priceRanges.find((p) => p.value === filters.priceRange)?.label}
                  <X
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => handleFilterChange("priceRange", "all")}
                  />
                </Badge>
              )}
              {filters.accessType !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  {accessTypes.find((a) => a.value === filters.accessType)?.label}
                  <X
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => handleFilterChange("accessType", "all")}
                  />
                </Badge>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;

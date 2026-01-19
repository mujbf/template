import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowLeft, ArrowRight } from "lucide-react";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category?: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  enableLightbox?: boolean;
  enableFilter?: boolean;
  className?: string;
}

const Gallery = ({
  items,
  columns = { sm: 1, md: 2, lg: 3 },
  enableLightbox = true,
  enableFilter = true,
  className = "",
}: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", ...new Set(items.map((item) => item.category).filter((cat): cat is string => Boolean(cat)))];
  
  const filteredItems = activeFilter === "All" 
    ? items 
    : items.filter((item) => item.category === activeFilter);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const getGridCols = () => {
    const { sm = 1, md = 2, lg = 3 } = columns;
    return `grid-cols-${sm} md:grid-cols-${md} lg:grid-cols-${lg}`;
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Filter Tabs */}
      {enableFilter && categories.length > 1 && (
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 text-sm font-bold rounded-xl transition-all ${
                activeFilter === category
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <motion.div 
        layout
        className={`grid ${getGridCols()} gap-6`}
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-[2rem] overflow-hidden bg-muted/30 border border-border hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer"
              onClick={() => enableLightbox && setSelectedImage(index)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-shark-950/90 via-shark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title && (
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-sm text-gray-300">
                        {item.description}
                      </p>
                    )}
                  </div>
                  
                  {enableLightbox && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-14 h-14 rounded-2xl bg-primary-500/90 text-white flex items-center justify-center group-hover:scale-100 scale-0 transition-transform duration-300 shadow-2xl">
                        <ZoomIn size={24} />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Category Badge */}
                {item.category && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-500/90 backdrop-blur-sm text-white text-xs font-bold">
                      {item.category}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {enableLightbox && selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-shark-950/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-6 w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
            >
              <ArrowLeft size={24} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
            >
              <ArrowRight size={24} />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].alt}
                className="w-full h-full object-contain rounded-3xl"
              />
              
              {/* Image Info */}
              {(filteredItems[selectedImage].title || filteredItems[selectedImage].description) && (
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-shark-950/90 to-transparent rounded-b-3xl">
                  {filteredItems[selectedImage].title && (
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {filteredItems[selectedImage].title}
                    </h3>
                  )}
                  {filteredItems[selectedImage].description && (
                    <p className="text-gray-300">
                      {filteredItems[selectedImage].description}
                    </p>
                  )}
                </div>
              )}
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-bold">
              {selectedImage + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Example Usage
const GalleryDemo = () => {
  const sampleItems: GalleryItem[] = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      alt: "Digital Marketing Dashboard",
      category: "Marketing",
      title: "Analytics Platform",
      description: "Real-time marketing analytics and insights"
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      alt: "Data Visualization",
      category: "Design",
      title: "Data Dashboard",
      description: "Beautiful data visualization interface"
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      alt: "Mobile App",
      category: "Development",
      title: "Mobile Experience",
      description: "Seamless mobile application design"
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
      alt: "Creative Design",
      category: "Design",
      title: "Brand Identity",
      description: "Modern brand design system"
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      alt: "Team Collaboration",
      category: "Marketing",
      title: "Team Workspace",
      description: "Collaborative project management"
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
      alt: "Development",
      category: "Development",
      title: "Code Editor",
      description: "Advanced development environment"
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold mb-6">
            Our Portfolio
          </span>
          <h2 className="text-5xl font-bold mb-6">
            Recent <span className="text-primary-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our latest work showcasing innovative solutions across design, development, and marketing.
          </p>
        </div>
        
        <Gallery 
          items={sampleItems}
          columns={{ sm: 1, md: 2, lg: 3 }}
          enableLightbox={true}
          enableFilter={true}
        />
      </div>
    </div>
  );
};

export default GalleryDemo;
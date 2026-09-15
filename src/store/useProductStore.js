import { create } from 'zustand';

// Complete category mapping based on product names
const getCategoryFromProduct = (product) => {
  const name = product.name.toLowerCase();
  const desc = product.description?.toLowerCase() || '';
  
  // 🟢 Yantra (6 products)
  if (name.includes('yantra')) {
    return 'Yantra';
  }
  
  // 🟢 Puja Kits (7 products)
  if (name.includes('puja kit') || name.includes('ritual kit') || 
      name.includes('vrat') || name.includes('havan') || 
      name.includes('satyanarayan') || name.includes('griha pravesh') ||
      name.includes('navratri') || name.includes('durga') ||
      name.includes('ganesh puja') || name.includes('diwali') ||
      name.includes('laxmi ganesha puja')) {
    return 'Puja Kits';
  }
  
  // 🟢 Rudraksha & Malas (6 products)
  if (name.includes('rudraksha') || name.includes('mala') || 
      name.includes('tulsi') || name.includes('sphatik') ||
      name.includes('hakik') || name.includes('gemstone') ||
      name.includes('lotus') || name.includes('kamal gatta') ||
      name.includes('spiritual healing') || name.includes('bracelet')) {
    return 'Rudraksha & Malas';
  }
  
  // 🟢 Festival Collections (6 products)
  if (name.includes('janmashtami') || name.includes('karwa chauth') ||
      name.includes('holi') || name.includes('gulal') ||
      name.includes('diwali') || name.includes('laxmi ganesha') ||
      name.includes('akhand jyoti') || name.includes('terracotta diya') ||
      name.includes('coin') || name.includes('deepawali')) {
    return 'Festival Collections';
  }
  
  // 🟢 Idols & Murtis (6 products)
  if (name.includes('idol') || name.includes('murti') || 
      name.includes('statue') || name.includes('shivling') ||
      name.includes('ganesha') || name.includes('hanuman') ||
      name.includes('saraswati') || name.includes('krishna') ||
      name.includes('laddu gopal') || (name.includes('brass') && name.includes('god'))) {
    return 'Idols & Murtis';
  }
  
  // 🟢 Astrology Remedies (6 products)
  if (name.includes('nazar') || name.includes('battu') ||
      name.includes('tortoise') || name.includes('kachhua') ||
      name.includes('gomti chakra') || name.includes('haldi') ||
      name.includes('parad') || name.includes('mercury') ||
      name.includes('horseshoe') || name.includes('ghode ki naal') ||
      name.includes('black haldi') || name.includes('kali haldi')) {
    return 'Astrology Remedies';
  }
  
  // 🟢 Gemstones (6 products)
  if (name.includes('ruby') || name.includes('manik') ||
      name.includes('emerald') || name.includes('panna') ||
      name.includes('sapphire') || name.includes('neelam') ||
      name.includes('pearl') || name.includes('moti') ||
      name.includes('pukhraj') || name.includes('yellow sapphire') ||
      name.includes('gomed') || name.includes('hessonite')) {
    return 'Gemstones';
  }
  
  // 🟢 Puja Samagri (6 products)
  if (name.includes('roli') || name.includes('chawal') ||
      name.includes('ghee') || name.includes('agarbatti') ||
      name.includes('incense') || name.includes('camphor') ||
      name.includes('kapoor') || name.includes('chandan') ||
      name.includes('sandalwood') || name.includes('gangajal') ||
      name.includes('diya batti') || name.includes('batti')) {
    return 'Puja Samagri';
  }
  
  // 🔵 Default: Spiritual Accessories
  return 'Spiritual Accessories';
};

const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  // Fetch all products from API
  fetchProducts: async () => {
    set({ loading: true, error: null });
    
    try {
      const response = await fetch('https://astologyshop-e.onrender.com/api/products/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle 401 Unauthorized
      if (response.status === 401) {
        console.log('🔑 Products API requires authentication, but should be public');
        set({ 
          products: [], 
          loading: false,
          error: 'Authentication required for products'
        });
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('📦 Products fetched:', data.products?.length);

      if (data?.products && Array.isArray(data.products)) {
        // Assign categories manually since API returns category: null
        const productsWithCategory = data.products.map(product => {
          const categoryName = getCategoryFromProduct(product);
          return {
            ...product,
            category: {
              _id: product.category?._id || `manual_${categoryName}`,
              name: categoryName,
              slug: categoryName.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
            }
          };
        });

        set({ 
          products: productsWithCategory, 
          loading: false,
          error: null 
        });
      } else {
        set({ 
          error: 'Invalid data structure from API', 
          loading: false 
        });
      }
    } catch (error) {
      console.error('❌ Fetch error:', error);
      set({ 
        error: error.message || 'Failed to fetch products', 
        loading: false 
      });
    }
  },

  // Get products by category name
  getProductsByCategory: (categoryName) => {
    const state = get();
    console.log(`🔍 Filtering by category: "${categoryName}"`);
    console.log(`📦 Total products in store: ${state.products.length}`);
    
    if (state.products.length === 0) {
      console.warn('⚠️ No products in store!');
      return [];
    }

    const filtered = state.products.filter((product) => {
      const productCategory = product.category?.name || '';
      const match = productCategory === categoryName;
      if (match) {
        console.log(`✅ Match found: ${product.name} -> ${productCategory}`);
      }
      return match;
    });

    console.log(`📊 Found ${filtered.length} products for category "${categoryName}"`);
    return filtered;
  },

  // Get best sellers (first 4 products)
  getBestSellers: () => {
    const state = get();
    console.log('🌟 Getting best sellers...');
    const bestSellers = state.products.slice(0, 4);
    console.log(`🌟 Best sellers: ${bestSellers.length} products`);
    return bestSellers;
  },

  // Get product by ID
  getProductById: (productId) => {
    const state = get();
    return state.products.find(product => product._id === productId);
  },

  // Search products by name
  searchProducts: (searchTerm) => {
    const state = get();
    if (!searchTerm || searchTerm.trim() === '') {
      return state.products;
    }
    const term = searchTerm.toLowerCase().trim();
    return state.products.filter(product => 
      product.name.toLowerCase().includes(term) ||
      product.description?.toLowerCase().includes(term) ||
      product.category?.name.toLowerCase().includes(term)
    );
  },

  // Get products by price range
  getProductsByPrice: (minPrice, maxPrice) => {
    const state = get();
    return state.products.filter(product => 
      product.price >= minPrice && product.price <= maxPrice
    );
  },

  // Get all categories with product counts
  getCategoriesWithCount: () => {
    const state = get();
    const categoryCount = {};
    state.products.forEach(product => {
      const category = product.category?.name || 'Uncategorized';
      categoryCount[category] = (categoryCount[category] || 0) + 1;
    });
    return categoryCount;
  },

  // Get featured products (for homepage)
  getFeaturedProducts: () => {
    const state = get();
    // Return products with rating > 4 or first 6 products
    const featured = state.products.filter(p => p.rating >= 4);
    return featured.length > 0 ? featured.slice(0, 6) : state.products.slice(0, 6);
  },

  // Get related products (same category)
  getRelatedProducts: (productId, limit = 4) => {
    const state = get();
    const product = state.getProductById(productId);
    if (!product) return [];
    
    const category = product.category?.name;
    if (!category) return [];
    
    const related = state.products.filter(p => 
      p._id !== productId && p.category?.name === category
    );
    
    return related.slice(0, limit);
  },

  // Get product count
  getTotalProducts: () => {
    const state = get();
    return state.products.length;
  },

  // Reset store
  resetStore: () => {
    set({ 
      products: [], 
      loading: false, 
      error: null 
    });
  },
}));

export default useProductStore;
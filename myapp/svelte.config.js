import adapter from '@sveltejs/adapter-auto';

const config = {
  // ... other config
  kit: {
    // ... other config
    alias: {
      "@/*": "./path/to/lib/*",
    },
  },
};

export default config;

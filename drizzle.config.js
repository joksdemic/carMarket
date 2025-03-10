/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_nsukSGK7QWM3@ep-black-wave-a8r1s7yu-pooler.eastus2.azure.neon.tech/car-market?sslmode=require',
    }
  };
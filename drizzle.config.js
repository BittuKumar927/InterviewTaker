/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:6XpnUERtQP1T@ep-curly-sky-a16in8lk.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };
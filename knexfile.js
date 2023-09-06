const path = require("path");

require("dotenv").config();

const {
  DATABASE_URL = "postgres://sszzanjz:kTSWNqG_J9C_PoI1DqBmP_GHYuozkdu1@bubble.db.elephantsql.com/sszzanjz",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://sszzanjz:kTSWNqG_J9C_PoI1DqBmP_GHYuozkdu1@bubble.db.elephantsql.com/sszzanjz",
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};

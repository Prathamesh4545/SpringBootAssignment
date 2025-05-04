CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  brand VARCHAR(100),
  category VARCHAR(50) NOT NULL,
  image_url TEXT
);

CREATE TABLE organizations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(255),
  organization_id INT
);

CREATE TABLE devices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  ip_address VARCHAR(45),
  type VARCHAR(20),
  status VARCHAR(10) DEFAULT 'DOWN',
  last_seen DATETIME,
  organization_id INT
);

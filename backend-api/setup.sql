-- Database setup for LegalExcellence

CREATE DATABASE IF NOT EXISTS legalexcellence_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE legalexcellence_db;

-- 1. Contacts
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Newsletter Subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Categories (For Insights)
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE
);

-- 4. Authors
CREATE TABLE IF NOT EXISTS authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255),
    image_url VARCHAR(500)
);

-- 5. Articles (Insights)
CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    summary TEXT,
    cover_image_url VARCHAR(500),
    estimated_read_time INT DEFAULT 5, -- in minutes
    category_id INT,
    author_id INT,
    published_at TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE SET NULL
);

-- Seed Initial Data

-- Categories
INSERT INTO categories (name, slug) VALUES 
('Corporate Law', 'corporate-law'),
('Litigation', 'litigation'),
('Intellectual Property', 'intellectual-property'),
('Employment Law', 'employment-law');

-- Authors
INSERT INTO authors (name, role, image_url) VALUES 
('Dayra Oliveira', 'Advogada e Consultora Jurídica', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTAwqQGX3C6kVWJgD-Pdmf8spUd4hOxeopNUv2HLWJicul1xxIQAYuGIDdjQiu2EEXs3mw0ZhIOcmsjLaYmZwaekd-L42sqFhWHfBwnZ4qRe9jTsDlsrfVsZuKu-xUHQJ7V2fDO4JipLxvd1F-BAWx-ZjArr8Fh6q5O_fNoINoNb7gkcZl2xhbPdLI_CAO9cWZciaksrbH8JFTVMahuTWVzn1--Wj4AnUN5eJeErBcaeXojbndUhjpYUQYOpkjPWJKS-BEai4oaRY');

-- Articles
INSERT INTO articles (title, slug, content, summary, cover_image_url, estimated_read_time, category_id, author_id, published_at) VALUES 
('Navigating New Corporate Governance Regulations in 2024', 'navigating-new-corporate-governance-regulations-in-2024', '<p>Full content of the article...</p>', 'Our senior partners dissect the implications of the recent legislative shifts and what they mean for your business operations and compliance strategies.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwfwqcy73Lu4PTXzqOMjl7LLT7dAj2uoib9amR3JwkXepY1WarwF0CHpvO0wmVqHHH3jMRmSEIEBvUA5--9TcKeprgOGSjxoZ1aqi4grXyjjQF-vb3skUzO5VIV5vt9Za9TQC0fwVNcv2pkWVlMorHdF5YivhSJHo5fEbT8XQx6I8oyd-Q1DgJ4m894y2LfrKZP-LhRJuUEF1m0KeI58T2Y8YMyS2IKUBrG2baBgbltao6AscklZSA5zz5_Qfe8iJtjPovV3YMbXU', 10, 1, 1, '2023-10-24 10:00:00'),
('Impact of Remote Witness Testimony on Civil Trials', 'impact-of-remote-witness-testimony-on-civil-trials', '<p>Full content...</p>', 'As judicial systems adapt to hybrid models, we explore the legal precedents being set regarding digital evidence and remote cross-examinations.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTAwqQGX3C6kVWJgD-Pdmf8spUd4hOxeopNUv2HLWJicul1xxIQAYuGIDdjQiu2EEXs3mw0ZhIOcmsjLaYmZwaekd-L42sqFhWHfBwnZ4qRe9jTsDlsrfVsZuKu-xUHQJ7V2fDO4JipLxvd1F-BAWx-ZjArr8Fh6q5O_fNoINoNb7gkcZl2xhbPdLI_CAO9cWZciaksrbH8JFTVMahuTWVzn1--Wj4AnUN5eJeErBcaeXojbndUhjpYUQYOpkjPWJKS-BEai4oaRY', 12, 2, 1, '2023-10-18 14:30:00'),
('AI and Copyright Law: The New Frontier of Ownership', 'ai-and-copyright-law-the-new-frontier-of-ownership', '<p>Full content...</p>', 'Analyzing recent court rulings on AI-generated content and what creative agencies need to know about protecting their assets.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJoxSLJFFsbkGEt7rJzurFnjs27McEGt024sJiIOWTCw_KbmdzO07U7qolQ2jNtpZsPs9PLILGpNFBhhq66mOvi58qIm1YO6NJS5DWzUxclVXCzwwwvGL4dOZ3blkWQ5V-rOFxVHt5Zz4lIp3sbqcs6TZE8GUWF5arGPrRCMb9i74_qrVd8RkD6pvdUTRmNvsOdjEYKqr1EU8H-1CHpl8Owi9kzwP9feVjuX2oo17-b3LmBrHZS9OgHeATQyVrX7augXhGx0lcZDU', 8, 3, 1, '2023-10-15 09:15:00');

-- Sample data for Zereth CakesAndFoods Hub

-- Insert sample categories
INSERT INTO categories (name, slug, description, image_url) VALUES
('Wedding Cakes', 'wedding-cakes', 'Elegant multi-tier cakes for your special day', '/placeholder.svg?height=300&width=400'),
('Birthday Cakes', 'birthday-cakes', 'Fun and festive cakes for birthday celebrations', '/placeholder.svg?height=300&width=400'),
('Corporate Cakes', 'corporate-cakes', 'Professional cakes for business events', '/placeholder.svg?height=300&width=400'),
('Cupcakes', 'cupcakes', 'Individual treats perfect for any occasion', '/placeholder.svg?height=300&width=400'),
('Pastries', 'pastries', 'Fresh baked pastries and desserts', '/placeholder.svg?height=300&width=400'),
('Savory Items', 'savory-items', 'Delicious savory baked goods', '/placeholder.svg?height=300&width=400');

-- Insert sample users (bakers and customers)
INSERT INTO users (email, first_name, last_name, role, is_verified) VALUES
('sarah.baker@example.com', 'Sarah', 'Johnson', 'baker', true),
('mike.sweetcakes@example.com', 'Mike', 'Chen', 'baker', true),
('emma.delights@example.com', 'Emma', 'Williams', 'baker', true),
('john.customer@example.com', 'John', 'Smith', 'customer', true),
('mary.events@example.com', 'Mary', 'Davis', 'customer', true);

-- Insert baker profiles
INSERT INTO baker_profiles (user_id, business_name, bio, specialties, years_experience, rating, total_reviews, is_verified, delivery_zones) VALUES
((SELECT id FROM users WHERE email = 'sarah.baker@example.com'), 'Sarah''s Sweet Creations', 'Passionate baker specializing in custom wedding cakes and elegant desserts. Every cake tells a story.', ARRAY['Wedding Cakes', 'Custom Designs', 'Fondant Work'], 8, 4.9, 127, true, ARRAY['Downtown', 'Midtown', 'Uptown']),
((SELECT id FROM users WHERE email = 'mike.sweetcakes@example.com'), 'Mike''s Sweet Cakes', 'Fun and creative baker bringing joy through colorful birthday cakes and themed designs.', ARRAY['Birthday Cakes', 'Themed Cakes', 'Character Cakes'], 5, 4.7, 89, true, ARRAY['Eastside', 'Westside', 'Central']),
((SELECT id FROM users WHERE email = 'emma.delights@example.com'), 'Emma''s Delightful Treats', 'Artisanal baker focused on organic ingredients and beautiful presentation for all occasions.', ARRAY['Cupcakes', 'Organic Baking', 'Gluten-Free'], 6, 4.8, 156, true, ARRAY['Northside', 'Downtown', 'Suburbs']);

-- Insert sample products
INSERT INTO products (baker_id, category_id, name, description, base_price, currency, images, variants, preparation_time, is_active) VALUES
((SELECT id FROM baker_profiles WHERE business_name = 'Sarah''s Sweet Creations'), 
 (SELECT id FROM categories WHERE slug = 'wedding-cakes'), 
 'Elegant Three-Tier Wedding Cake', 
 'A stunning three-tier wedding cake with delicate sugar flowers and smooth buttercream finish. Customizable flavors and decorations available.',
 450.00, 'USD',
 ARRAY['/placeholder.svg?height=400&width=400', '/placeholder.svg?height=400&width=400'],
 '{"sizes": ["Small (50 guests)", "Medium (75 guests)", "Large (100 guests)"], "flavors": ["Vanilla", "Chocolate", "Red Velvet", "Lemon"], "fillings": ["Buttercream", "Chocolate Ganache", "Fruit Preserves"]}',
 72, true),

((SELECT id FROM baker_profiles WHERE business_name = 'Mike''s Sweet Cakes'), 
 (SELECT id FROM categories WHERE slug = 'birthday-cakes'), 
 'Rainbow Unicorn Birthday Cake', 
 'Magical rainbow-layered cake with unicorn decorations, perfect for making birthday dreams come true.',
 85.00, 'USD',
 ARRAY['/placeholder.svg?height=400&width=400', '/placeholder.svg?height=400&width=400'],
 '{"sizes": ["6 inch", "8 inch", "10 inch"], "flavors": ["Funfetti", "Strawberry", "Vanilla Rainbow"]}',
 24, true),

((SELECT id FROM baker_profiles WHERE business_name = 'Emma''s Delightful Treats'), 
 (SELECT id FROM categories WHERE slug = 'cupcakes'), 
 'Gourmet Cupcake Dozen', 
 'Assorted dozen of gourmet cupcakes with premium ingredients and beautiful decorations.',
 36.00, 'USD',
 ARRAY['/placeholder.svg?height=400&width=400', '/placeholder.svg?height=400&width=400'],
 '{"flavors": ["Mixed Dozen", "All Chocolate", "All Vanilla", "Seasonal Special"], "decorations": ["Classic Buttercream", "Fondant Toppers", "Fresh Fruit"]}',
 4, true);

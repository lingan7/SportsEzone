from .models import Product
from django.contrib.auth.models import User 

manufacturer = User.objects.get(username="Kapil")

Product.objects.create(
    name="Hydration Vest", 
    description="Lightweight running vest with breathable mesh, Front bottle pockets and adjustable chest straps", 
    brand="Reebok Running Hydration Vest 5L", 
    location="Michigan", 
    price="64.99", 
    created_by = manufacturer 
)
Product.objects.create(name="American Football Cap", description="Structured cap with curved brim for sun protection, Adjustable snapback for a secure fit", brand="Nova Gridiron Snapback Cap", location="Ohio", price="24.50", created_by = manufacturer )
Product.objects.create(name="Baseball Bat", description="Alloy bat with balanced swing weight, Cushioned grip to reduce hand sting", brand="Dick's Sporting Goods Easton Alloy Bat 32in", location="Illinois", price="79.99", created_by = manufacturer )
Product.objects.create(name="Basketball", description="Composite leather ball for indoor and outdoor play, Deep channels for better grip and control", brand="Wilson Evolution Official Size 7", location="Indiana", price="69.95", created_by = manufacturer )
Product.objects.create(name="Tennis Racket", description="Lightweight graphite frame for easy power, Oversized head with large sweet spot", brand="Babolat Pure Drive Team", location="California", price="189.00", created_by = manufacturer )
Product.objects.create(name="Yoga Mat", description="6mm cushioned mat for joint support, Non-slip textured surface on both sides", brand="Lululemon The Mat 6mm", location="New York", price="98.00", created_by = manufacturer )
Product.objects.create(name="Running Shoes", description="Responsive foam midsole for daily training, Breathable knit upper with secure lockdown", brand="Nike Pegasus 41 Men's", location="Michigan", price="139.99", created_by = manufacturer )
Product.objects.create(name="Hockey Stick", description="Carbon composite shaft for quick release, Mid kick point for powerful wrist shots", brand="Bauer Vapor X4 Senior", location="Minnesota", price="119.99", created_by = manufacturer )
Product.objects.create(name="Soccer Ball", description="Thermally bonded panels for consistent flight, Durable cover for grass and turf", brand="Adidas Tiro League Size 5", location="Texas", price="32.00", created_by = manufacturer )
Product.objects.create(name="Gym Duffel Bag", description="Water-resistant fabric with ventilated shoe compartment, Padded shoulder strap for easy carry", brand="Under Armour Undeniable 5.0 Medium", location="Florida", price="45.00", created_by = manufacturer )
Product.objects.create(name="Cycling Helmet", description="In-mold shell with MIPS protection, Adjustable dial fit and 16 air vents", brand="Giro Register MIPS", location="Colorado", price="64.95", created_by = manufacturer )
Product.objects.create(name="Baseball Glove", description="Full-grain leather for durable feel, Pre-oiled pocket for faster break-in", brand="Rawlings Heart of the Hide 11.75in", location="Missouri", price="279.95", created_by = manufacturer )
Product.objects.create(name="Compression Shorts", description="Stretch fabric for muscle support, Moisture-wicking and quick-dry material", brand="Puma Men's Training Compression Short", location="Georgia", price="29.99", created_by = manufacturer )
Product.objects.create(name="Dumbbell Set", description="Rubber-coated hex heads to protect floors, Ergonomic knurled handles for a firm grip", brand="CAP Barbell Hex Dumbbells 2x15lb", location="Michigan", price="54.99", created_by = manufacturer )
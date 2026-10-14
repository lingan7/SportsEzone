SportsEzone/
├── backend/                  # Django project
│   ├── manage.py
│   └── backend/
│       ├── settings.py       # DB config, installed apps, CORS
│       ├── models.py         # Product, Order
│       ├── serializers.py    # Model -> JSON conversion
│       ├── views.py          # API endpoints
│       ├── urls.py           # URL routing
│       ├── admin.py          # Django admin registration
│       ├── demo_data.py      # Sample product data
│       └── migrations/
├── frontend/                 # React app (Vite)
│   └── src/
│       ├── App.jsx           # Routing between pages
│       ├── RegisterPage.jsx
│       ├── LoginPage.jsx
│       └── ProductListPage.jsx
└── templates/                # Static HTML mockups used to design the pages

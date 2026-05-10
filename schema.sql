CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    full_name TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES profiles(id),
    title TEXT NOT NULL,
    target_amount NUMERIC NOT NULL,
    current_amount NUMERIC DEFAULT 0,
    deadline DATE,
    status TEXT DEFAULT 'active'
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    goal_id INT REFERENCES goals(id),
    amount NUMERIC NOT NULL,
    description TEXT,
    transaction_date TIMESTAMP DEFAULT NOW()
);

CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES profiles(id),
    notifications_enabled BOOLEAN DEFAULT TRUE,
    theme TEXT DEFAULT 'light'
);

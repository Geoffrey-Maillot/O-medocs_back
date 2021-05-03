-- Deploy omedocs:tables-01 to pg

-- Création des tables SQL
BEGIN;

CREATE TABLE "user" (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_type TEXT NOT NULL,
    establishment TEXT NOT NULL,
    rpps TEXT NULL, 
    finess TEXT NULL, 
    adeli TEXT NULL, 
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    phone_number TEXT NOT NULL, 
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    region TEXT NOT NULL,
    zip_code TEXT NOT NULL
);

CREATE TABLE product (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    expiration_date TEXT NOT NULL,
    quantity TEXT NOT NULL, 
    unit_price TEXT NOT NULL, 
    cis_code TEXT NOT NULL,
    -- clé étrangère
    user_id INT REFERENCES "user"(id)
);

CREATE TABLE "order" (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_number TEXT NOT NULL, 
    total_cost TEXT NOT NULL,
    status TEXT NULL,
<<<<<<< HEAD
    date TIMESTAMPTZ,
    seller_name TEXT NOT NULL,
=======
    date TIMESTAMPTZ DEFAULT NOW(),
    pharmacy_name TEXT NOT NULL,
>>>>>>> order
    buyer_id INT REFERENCES "user"(id)
);

CREATE TABLE notification (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    message TEXT NOT NULL, 
    -- date incluant le fuseau horaire
    date TIMESTAMPTZ,
    order_id INT REFERENCES "order"(id),
    user_id INT REFERENCES "user"(id)
);

CREATE TABLE product_has_order (
    product_id INT REFERENCES product(id),
    order_id INT REFERENCES "order"(id),
<<<<<<< HEAD
    quantity_bought TEXT NOT NULL
=======
    quantity_to_buy TEXT NOT NULL
>>>>>>> order
);

COMMIT;

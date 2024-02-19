create database warehouse;

use warehouse;


-- Create CITIES table
CREATE TABLE CITIES (
    CITY CHAR(20),
    STATE CHAR(20),
    PRIMARY KEY (CITY, STATE)
);

-- Create WAREHOUSES table
CREATE TABLE WAREHOUSES (
    WID INTEGER,
    WNAME CHAR(30),
    LOCATION CHAR(20),
    CITY CHAR(20),
    STATE CHAR(20),
    EXTRA_CONTEXT JSON,
    PRIMARY KEY (WID),
    FOREIGN KEY (CITY, STATE) REFERENCES CITIES(CITY, STATE)
);

-- Create STORES table
CREATE TABLE STORES (
    SID INTEGER,
    STORE_NAME CHAR(20),
    LOCATION_CITY CHAR(20),
    CITY CHAR(20),
    PRIMARY KEY (SID),
    FOREIGN KEY (CITY) REFERENCES CITIES(CITY)
);

-- Create CUSTOMER table
CREATE TABLE CUSTOMER (
    CNO INTEGER,
    CNAME CHAR(50),
    ADDR VARCHAR(50),
    CU_CITY CHAR(20),
    CITY CHAR(20),
    PRIMARY KEY (CNO),
    FOREIGN KEY (CITY) REFERENCES CITIES(CITY)
);

-- Create ORDERS table
CREATE TABLE ORDERS (
    ONO INT,
    ODATE DATE,
    CNO INTEGER,
    PRIMARY KEY (ONO),
    FOREIGN KEY (CNO) REFERENCES CUSTOMER(CNO)
);

-- Create ITEMS table
CREATE TABLE ITEMS (
    ITEMNO INTEGER,
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2),
    COST DECIMAL(5,2),
    PRIMARY KEY (ITEMNO)
);

-- Create ORDERS_ITEMS table for Many-to-Many relationship
CREATE TABLE ORDERS_ITEMS (
    ONO INT,
    ITEMNO INTEGER,
    ORDERED_QUANTITY INTEGER,
    PRIMARY KEY (ONO, ITEMNO),
    FOREIGN KEY (ONO) REFERENCES ORDERS(ONO),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);

-- Create STORES_ITEMS table for Many-to-Many relationship
CREATE TABLE STORES_ITEMS (
    SID INTEGER,
    ITEMNO INTEGER,
    QUANTITY INTEGER,
    PRIMARY KEY (SID, ITEMNO),
    FOREIGN KEY (SID) REFERENCES STORES(SID),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);


-- Insertion
-- Insert data into CITIES table
INSERT INTO CITIES (CITY, STATE)
VALUES
    ('City A', 'State A'),
    ('City B', 'State B'),
    ('City C', 'State C');

-- Insert data into WAREHOUSES table
INSERT INTO WAREHOUSES (WID, WNAME, LOCATION, CITY, STATE, EXTRA_CONTEXT)
VALUES
    (1, 'Warehouse 1', 'Location 1', 'City A', 'State A', '{"capacity": 1000}'),
    (2, 'Warehouse 2', 'Location 2', 'City B', 'State B', '{"capacity": 1500}'),
    (3, 'Warehouse 3', 'Location 3', 'City C', 'State C', '{"capacity": 1200}');

-- Insert data into STORES table
INSERT INTO STORES (SID, STORE_NAME, LOCATION_CITY, CITY)
VALUES
    (1, 'Store A', 'City A', 'City A'),
    (2, 'Store B', 'City B', 'City B'),
    (3, 'Store C', 'City C', 'City C');

-- Insert data into CUSTOMER table
INSERT INTO CUSTOMER (CNO, CNAME, ADDR, CU_CITY, CITY)
VALUES
    (1, 'Customer 1', 'Address 1', 'City A', 'City A'),
    (2, 'Customer 2', 'Address 2', 'City B', 'City B'),
    (3, 'Customer 3', 'Address 3', 'City C', 'City C');

-- Insert data into ORDERS table
INSERT INTO ORDERS (ONO, ODATE, CNO)
VALUES
    (101, '2024-02-13', 1),
    (102, '2024-02-14', 2),
    (103, '2024-02-15', 3);

-- Insert data into ITEMS table
INSERT INTO ITEMS (ITEMNO, DESCRIPTION, WEIGHT, COST)
VALUES
    (101, 'Item 1', 1.5, 10.99),
    (102, 'Item 2', 2.0, 15.50),
    (103, 'Item 3', 1.0, 5.99);

-- Insert data into ORDERS_ITEMS table
INSERT INTO ORDERS_ITEMS (ONO, ITEMNO, ORDERED_QUANTITY)
VALUES
    (101, 101, 2),
    (102, 102, 3),
    (103, 103, 1);

-- Insert data into STORES_ITEMS table
INSERT INTO STORES_ITEMS (SID, ITEMNO, QUANTITY)
VALUES
    (1, 101, 10),
    (2, 102, 15),
    (3, 103, 20);


-- Insert data into ORDERS_ITEMS table
INSERT INTO ORDERS_ITEMS (ONO, ITEMNO, ORDERED_QUANTITY)
VALUES
    (101, 101, 2),
    (102, 102, 3),
    (103, 103, 1);

-- Insert data into STORES_ITEMS table
INSERT INTO STORES_ITEMS (SID, ITEMNO, QUANTITY)
VALUES
    (1, 101, 10),
    (2, 102, 15),
    (3, 103, 20);
    
-- inserting new items
INSERT INTO ORDERS (ONO, ODATE, CNO)
VALUES (104, '2024-02-16', 1);

INSERT INTO ORDERS_ITEMS (ONO, ITEMNO, ORDERED_QUANTITY)
VALUES
    (104, 101, 2);




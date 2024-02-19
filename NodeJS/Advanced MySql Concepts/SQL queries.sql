
-- view
-- Find the item that has the minimum weight.
select min(weight) from items;

-- Find the different warehouses in "Pune".
select * from warehouses where city='city a' ;

-- Find the details of items ordered by a customer named "Mr. Patil".
SELECT ITEMS.ITEMNO, ITEMS.DESCRIPTION, ITEMS.WEIGHT, ITEMS.COST, ORDERS_ITEMS.ORDERED_QUANTITY
FROM CUSTOMER
JOIN ORDERS ON CUSTOMER.CNO = ORDERS.CNO
JOIN ORDERS_ITEMS ON ORDERS.ONO = ORDERS_ITEMS.ONO
JOIN ITEMS ON ORDERS_ITEMS.ITEMNO = ITEMS.ITEMNO
WHERE CUSTOMER.CNO = 1;

-- Find a Warehouse that has the maximum number of stores.
select warehouses.WID,count(stores.sid) AS NUM_STORES from warehouses
left join stores on warehouses.city=stores.city
GROUP BY WAREHOUSES.WID, WAREHOUSES.WNAME
order by  NUM_STORES
limit 1;
-- Find an item that is ordered for a minimum number of times.
select oi.itemno,count(*) 
from orders as o
join orders_items as oi
on o.ono= oi.ono
group by oi.itemno;



    
-- Find the detailed orders given by each customer
SELECT CUSTOMER.CNO, CUSTOMER.CNAME, ORDERS.ONO, ORDERS.ODATE, ITEMS.ITEMNO, ITEMS.DESCRIPTION, ITEMS.WEIGHT, ITEMS.COST, ORDERS_ITEMS.ORDERED_QUANTITY
FROM CUSTOMER
JOIN ORDERS ON CUSTOMER.CNO = ORDERS.CNO
JOIN ORDERS_ITEMS ON ORDERS.ONO = ORDERS_ITEMS.ONO
JOIN ITEMS ON ORDERS_ITEMS.ITEMNO = ITEMS.ITEMNO
ORDER BY CUSTOMER.CNO, ORDERS.ONO;





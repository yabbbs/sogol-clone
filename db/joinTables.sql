select * from products
join pictures on pictures.products_id = products.id
where products.id = $1
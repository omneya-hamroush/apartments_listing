insert into compound(name, address, developer_name, number, delivery_date) values('TAJ CITY', 'SUEZ ROAD', 'MADINET MASR', '01002873435',
'2028-06-01'), values('BADYA', 'OCTOBER', 'PALM HILLS', '01002873923', '2026-06-01');

insert into apartment (unit_number, price, size, building_number, status, compound_id, image_url) 
values(1,2000000, 150, 2934, 'RESERVED', (select id from compound limit 1), '/images/img1.jpeg'),
values(1,2000000, 150, 2934, 'RESERVED', (select id from compound limit 1), '/images/img12.jpeg'),
values(1,2000000, 150, 2934, 'RESERVED', (select id from compound limit 1), '/images/img3.jpeg'),
values(1,2000000, 150, 2934, 'UNDER_CONSTRUCTION', (select id from compound limit 1), '/images/img4.jpeg'),
values(1,2000000, 150, 2934, 'AVAILABLE', (select id from compound limit 1), '');

 
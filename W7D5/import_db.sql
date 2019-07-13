DROP TABLE cats;
CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    color VARCHAR(10),
    breed VARCHAR(255)
);

DROP TABLE toys;
CREATE TABLE toys (
    id SERIAL PRIMARY KEY,
    price INTEGER,
    color VARCHAR(10),
    name VARCHAR(255)
);

DROP TABLE cattoys;
CREATE TABLE cattoys (
    id SERIAL PRIMARY KEY,
    cat_id INTEGER,
    toy_id INTEGER,
    FOREIGN KEY (cat_id) REFERENCES cats (id),
    FOREIGN KEY (toy_id) REFERENCES toys (id)
);




INSERT INTO
  cats
    (name, color, breed)
VALUES
    ('Lola1', 'white', 'Persian'),
    ('Lola2', 'black', 'Persian'),
    ('Lola3', 'brown', 'Persian'),
    ('Lola4', 'yellow', 'Persian'),
    ('Lola5', 'white', 'Persian');


INSERT INTO
    toys
        (price, color, name)
VALUES
    (1, 'white', 'toy1'),
    (2, 'black', 'toy2'),
    (3, 'brown', 'toy3'),
    (4, 'yellow', 'toy4'),
    (5, 'white', 'toy5');

INSERT INTO
    cattoys
    (cat_id, toy_id)
VALUES
    -- ((SELECT
    --     id
    -- FROM
    --     cats
    -- WHERE
    --     cats.name = 'Lola1'),

    -- (SELECT
    --     id
    -- FROM
    --     toys
    -- WHERE
    --     toys.name = 'toy1')),
    -- ((SELECT
    --     id
    -- FROM
    --     cats
    -- WHERE
    --     cats.name = 'Lola2'),
        
    -- (SELECT
    --     id
    -- FROM
    --     toys
    -- WHERE
    --     toys.name = 'toy2')),
    
    -- ((SELECT
    --     id
    -- FROM
    --     cats
    -- WHERE
    --     cats.name = 'Lola3'),
        
    -- (SELECT
    --     id
    -- FROM
    --     toys
    -- WHERE
    --     toys.name = 'toy3')),
        
    -- ((SELECT
    --     id
    -- FROM
    --     cats
    -- WHERE
    --     cats.name = 'Lola4'),
        
    -- (SELECT
    --     id
    -- FROM
    --     toys
    -- WHERE
    --     toys.name = 'toy4')),

    -- ((SELECT
    --     id
    -- FROM
    --     cats
    -- WHERE
    --     cats.name = 'Lola5'),
        
    -- (SELECT
    --     id
    -- FROM
    --     toys
    -- WHERE
    --     toys.name = 'toy5'))
        
        
        (1,1),
        (2,2),
        (3,3),
        (4,4),
        (5,5);

-- SELECT
--     toys.name
-- FROM
--     toys
-- JOIN
--     cattoys ON toys.id = cattoys.toy_id
-- JOIN
--     cats ON cats.id = cattoys.cat_id
-- WHERE
--     cats.name = 'Lola1';

-- SELECT
--     toys.name
-- FROM
--     toys
-- JOIN
--     cattoys ON toys.id = cattoys.toy_id
-- JOIN
--     cats ON cats.id = cattoys.cat_id
-- WHERE
--     cats.breed = 'Persian';


-- UPDATE
--     cats
-- SET
--   name = 'Lolalol', color = 'blue', breed = 'tomcat'
-- WHERE
--   name = 'Lola1';
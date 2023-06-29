CREATE TABLE comida (
    id serial primary key,
    nombre varchar(50),
    cantidad integer,
    precio integer
);


CREATE TABLE carton (
    cantidad integer,
    precio integer
);
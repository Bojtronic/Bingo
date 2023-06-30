CREATE TABLE comida (
    id serial primary key,
    nombre varchar(50),
    cantidad integer,
    precio integer
);


CREATE TABLE carton (
    id integer,
    cantidad_disponible integer,
    precio_unitario integer
);

CREATE TABLE compra_carton (
    id serial primary key,
    individuales integer,
    promo_1 integer,
    promo_2 integer,
    total_cartones integer,
    total_a_cobrar integer
);

CREATE TABLE compra_comida (
    id serial primary key,
    comida_bebida integer,
    combo_1 integer,
    combo_2 integer,
    total_a_cobrar integer
);
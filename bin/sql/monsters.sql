CREATE TABLE monsters(
  id serial,
  name character varying(50),
  personality character varying(50)
);

CREATE TABLE habitats(
  id serial,
  name character varying(50),
  climate character varying(50),
  temperature int
);

CREATE TABLE lives(
  monster character varying(50),
  habitat character varying(50)
);

CREATE TABLE aliens(
  id serial,
  name character varying(50),
  planet character varying(50),
  enemy character varying(50)
);

INSERT INTO monsters(name, personality)
VALUES
('Fluffy', 'aggressive'),
('Noodles', 'impatient'),
('Rusty', 'passionate');

INSERT INTO habitats(name, climate, temperature)
VALUES
('desert', 'dry', 100),
('forrest', 'haunted', 70),
('mountain', 'icy', 30);

INSERT INTO lives(monster, habitat)
VALUES
('Fluffy', 'desert'),
('Noodles', 'forrest'),
('Rusty', 'mountain');

INSERT INTO aliens(name, planet, enemy)
VALUES
('Grey', 'Eris', 'Noodles'),
('Hopkinsville', 'Haumea', 'Fluffy'),
('Flatwoods', 'Ceres', 'Rusty');

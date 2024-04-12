CREATE TABLE users (
	id SERIAL PRIMARY key,
	cpf VARCHAR(11) NOT NULL UNIQUE,
	email VARCHAR(50) NOT null UNIQUE,
	name VARCHAR(50) NOT NULL,
	password_hash VARCHAR(100) NOT NULL,
	is_admin BOOLEAN DEFAULT FALSE NOT null,
	active BOOLEAN DEFAULT TRUE NOT NULL,
	created_at timestamp NULL DEFAULT current_timestamp,
	updated_at timestamp NULL,
	deleted_at timestamp NULL
);

CREATE TYPE client_type AS ENUM ('F', 'J');
CREATE TABLE public.clients (
  id SERIAL PRIMARY KEY,
  "type" public."client_type" NOT NULL,
  "name" varchar(200) NOT NULL,
  "document" varchar(200) NOT NULL,
  observation varchar(255),
  active bool DEFAULT true,
  created_at timestamp DEFAULT current_timestamp,
  updated_at timestamp,
  deleted_at timestamp
);

CREATE TYPE profile_type AS ENUM ('conservative', 'moderate', 'aggressive');
CREATE TABLE public.profile (
  id SERIAL PRIMARY KEY,
  "type" public."profile_type" NOT null,
  description VARCHAR (255) NOT null,
  created_at timestamp DEFAULT current_timestamp,
  updated_at timestamp,
  deleted_at timestamp
);


CREATE TABLE public.listed_shares (
  id SERIAL PRIMARY KEY,
  "ticker" varchar(200) NOT NULL,
  "name" varchar(200) NOT NULL,
  b3_sector_classification varchar(200) DEFAULT NULL,
  id_profile int not null,
  created_at timestamp DEFAULT current_timestamp,
  updated_at timestamp,
  deleted_at timestamp,
  FOREIGN KEY (id_profile) REFERENCES profile(id)
);


CREATE TABLE public.listed_share_history (
	id SERIAL PRIMARY KEY,
	id_listed_shares int not null,
	"date" date NOT NULL,
  last_value numeric(15, 4) NOT NULL,
  opening numeric(15, 4) NOT NULL,
  high numeric(15, 4) NOT NULL,
  low numeric(15, 4) NOT NULL,
  trading_volume numeric(15, 4) NOT NULL,
  percentage_change numeric(15, 4) NOT NULL,
  id_profile int not null,
  created_at timestamp DEFAULT current_timestamp,
  updated_at timestamp,
  deleted_at timestamp,
  FOREIGN KEY (id_listed_shares) REFERENCES listed_shares(id),
  FOREIGN KEY (id_profile) REFERENCES profile(id)
);


CREATE TABLE public.investment_portfolio (
	id SERIAL PRIMARY KEY,
	id_client int not null,
	id_listed_shares int not null,
  share_price numeric(15, 4) NOT NULL,
  quantity_purchased int not null,
  invested_amount numeric(15, 4) NOT NULL,
  created_at timestamp DEFAULT current_timestamp,
  updated_at timestamp,
  deleted_at timestamp,
  FOREIGN KEY (id_client) REFERENCES clients(id),
  FOREIGN KEY (id_listed_shares) REFERENCES listed_shares(id)
);

ALTER TABLE clients 
ADD COLUMN id_profile INT default 1,
ADD CONSTRAINT fk_id_profile FOREIGN KEY (id_profile) REFERENCES profile(id);

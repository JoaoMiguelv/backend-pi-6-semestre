ALTER TYPE profile_type ADD VALUE 'undefined';
INSERT INTO public.profile
(id, "type", created_at, updated_at, deleted_at, description)
VALUES(0, 'undefined'::public."profile_type", '2024-05-25 09:53:15.341', '2024-04-12 12:46:06.801', NULL, 'Indefinido');

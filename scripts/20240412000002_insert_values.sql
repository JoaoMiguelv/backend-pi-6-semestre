INSERT INTO public.profile
(id, "type", created_at, updated_at, deleted_at, description)
VALUES(1, 'conservative'::public."profile_type", '2024-04-12 12:45:56.613', '2024-04-12 12:45:56.613', NULL, 'Conservador');
INSERT INTO public.profile
(id, "type", created_at, updated_at, deleted_at, description)
VALUES(2, 'moderate'::public."profile_type", '2024-04-12 12:46:02.197', '2024-04-12 12:46:02.197', NULL, 'Moderado');
INSERT INTO public.profile
(id, "type", created_at, updated_at, deleted_at, description)
VALUES(3, 'aggressive'::public."profile_type", '2024-04-12 12:46:06.801', '2024-04-12 12:46:06.801', NULL, 'Agressivo');

INSERT INTO public.listed_shares
(id, ticker, "name", b3_sector_classification, id_profile, created_at, updated_at, deleted_at)
VALUES(1, 'EMBR3', 'Embraer SA', 'Bens Industriais / Material de Transporte / Material Aeronáutico e de Defesa', 1, '2024-04-12 12:57:51.162', '2024-04-12 12:57:51.162', NULL);
INSERT INTO public.listed_shares
(id, ticker, "name", b3_sector_classification, id_profile, created_at, updated_at, deleted_at)
VALUES(3, 'BBAS3', 'Banco do Brasil SA', 'Financeiro / Intermediários Financeiros / Bancos', 2, '2024-04-12 13:05:24.086', '2024-04-12 13:05:24.086', NULL);
INSERT INTO public.listed_shares
(id, ticker, "name", b3_sector_classification, id_profile, created_at, updated_at, deleted_at)
VALUES(2, 'TOTS3', 'TOTVS SA', 'Tecnologia da Informação / Programas e Serviços / Programas e Serviços', 2, '2024-04-12 13:02:27.103', '2024-04-12 13:02:27.103', NULL);
INSERT INTO public.listed_shares
(id, ticker, "name", b3_sector_classification, id_profile, created_at, updated_at, deleted_at)
VALUES(4, 'VIVA3', 'Vivara SA', 'Consumo Cíclico / Tecidos. Vestuário e Calçados / Acessórios', 2, '2024-04-12 16:05:49.393', '2024-04-12 16:05:49.393', NULL);
INSERT INTO public.listed_shares
(id, ticker, "name", b3_sector_classification, id_profile, created_at, updated_at, deleted_at)
VALUES(5, 'KLBN3', 'KLABIN SA', 'Materiais Básicos / Madeira e Papel / Papel e Celulose', 2, '2024-04-12 16:06:54.829', '2024-04-12 16:06:54.829', NULL);
INSERT INTO public.listed_shares
(id, ticker, "name", b3_sector_classification, id_profile, created_at, updated_at, deleted_at)
VALUES(6, 'PETR4', 'Petróleo Brasileiro SA Petrobras', 'Petróleo. Gás e Biocombustíveis / Petróleo. Gás e Biocombustíveis / Exploração. Refino e Distribuição', 2, '2024-04-12 16:08:05.591', '2024-04-12 16:08:05.591', NULL);

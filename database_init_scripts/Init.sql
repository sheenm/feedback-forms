CREATE EXTENSION "uuid-ossp";

CREATE TABLE public.feedbacks (
	json_data json NOT NULL,
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	CONSTRAINT feedbacks_pk PRIMARY KEY (id)
);
COMMENT ON TABLE public.feedbacks IS 'In this table we will store feedbacks';

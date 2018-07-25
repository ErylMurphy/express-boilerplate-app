\c quotestagram

DELETE FROM quotes;
DELETE FROM categories;

INSERT INTO categories (name) VALUES ('humor');
INSERT INTO categories (name) VALUES ('morbid');
INSERT INTO categories (name) VALUES ('inspirational');

INSERT INTO quotes (author, content, category_id)
VALUES (
  'eric',
  'totally, yeah!', 
  1
);

INSERT INTO quotes (author, content, category_id)
VALUES (
  'ryan',
  'ummmmm!', 
  2
);

INSERT INTO quotes (author, content, category_id)
VALUES (
  'mike',
  'cool. nifty. tubular. nailed it.', 
  3
);

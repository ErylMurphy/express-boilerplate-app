\c quotestagram

DELETE FROM quotes;
DELETE FROM categories;

INSERT INTO categories (name) VALUES ('Thoughtful');
INSERT INTO categories (name) VALUES ('Funny');

INSERT INTO quotes (content, author, category_id)
VALUES (
  'Your scientists were so preoccupied with whether they could, they didn''t stop to think if they should.',
  'Ian Malcolm, Jurassic Park',
  1
);

INSERT INTO quotes (content, author, category_id)
VALUES (
  'I''m not a spy who can come and go as they choose. I am loyal to that throne no matter who sits upon it. What are you loyal to?',
  'Okoye, Black Panther',
  1
);

-- “All we have to decide is what to do with the time that is given to us.”


INSERT INTO quotes (content, author, category_id)
VALUES (
  'I''m the Dude, so that''s what you call me. That or, uh His Dudeness, or uh Duder, or El Duderino, if you''re not into the whole brevity thing.',
  'The Big Lebowski',
  2
);

INSERT INTO quotes (content, author, category_id)
VALUES (
  'She doesn''t even go here!',
  'Mean Girls',
  2
);

INSERT INTO quotes (content, author, category_id)
VALUES (
  'I know you can be overwhelmed, and you can be underwhelmed, but can you ever just be whelmed?',
  '10 Things I Hate About You',
  2
);

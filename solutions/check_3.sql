USE sql_intro;

-- INSERT INTO deity
-- VALUES(null, "aphrodite", "Greek", "Love", 10, -2000)

-- SELECT * FROM deity
-- WHERE mythology = "Greek" and coolness > 8;

SELECT * FROM deity
WHERE name LIKE 'aph%'
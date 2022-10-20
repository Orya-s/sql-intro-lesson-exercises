USE sql_intro;

CREATE TABLE Dolphin(
    name VARCHAR(50) NOT NULL PRIMARY KEY,
    color VARCHAR(50),
    height INT,
    healthy BIT DEFAULT 1
);

INSERT INTO Dolphin
VALUES
    ('Daron', 'Blue', 1, 1),
    ('Adrian', 'Pink', 1, null),
    ('Diane', 'Green', 3, 0);

SELECT * FROM Dolphin
WHERE height > 2;

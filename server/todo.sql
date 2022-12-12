show DATABASES;
use kdt;

CREATE TABLE todo (
    id INT NOT NULL PRIMARY KEY auto_increment,
    title VARCHAR(100) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0
);

SHOW tables;


DESC todo;

INSERT INTO todo VALUES (null, 'my todo1', 0);
INSERT INTO todo VALUES (null, 'my todo2', 0);
INSERT INTO todo VALUES (null, 'my todo3', 0);
INSERT INTO todo VALUES (null, 'my todo4', 0);
INSERT INTO todo VALUES (null, 'my todo5', 0);
INSERT INTO todo VALUES (null, 'my todo6', 0);

UPDATE todo SET done=0 WHERE id = 1;


SELECT * FROM todo;

CREATE USER 'user98'@'%' IDENTIFIED BY '1243';
GRANT ALL PRIVILEGES ON *.* TO 'user98'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

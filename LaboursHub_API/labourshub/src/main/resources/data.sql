USE LaboursHubDB;
INSERT INTO Labour_Db(labour_name,labour_email,labour_password,contact,sector,hourly_cost,preferred_shift,availability,experience,address,city,state,pin_code,rating,summary,pic_name) 
VALUES ('Naveen','naveenkumarshahi0@gmail.com','Navin@2024','476876866','electrician',200,'day','mon,tue',2.0,'Bhatpar','Bhatpar','UP','274702',2.5,'hjgjgjhghjgjh','naveen.jpg');

INSERT INTO User_Db(user_name,user_email,user_password,contact,bookmark_labour,address,pin_code,state,city,pic_name)
VALUES('Navin','navinkumarshahi0@gmail.com','Navin@2025','377887786','1 2','kjhjkhk','274702','up','Gorakhpur','navin.jpg');

CREATE TABLE users (
        username VARCHAR(50) NOT NULL PRIMARY KEY,
        password VARCHAR(255) NOT NULL,
        enabled BOOLEAN NOT NULL
    );
    
CREATE TABLE authorities (
        username VARCHAR(50) NOT NULL,
        authority VARCHAR(50) NOT NULL,
        FOREIGN KEY (username) REFERENCES users(username)
    );
-- To create the database:
CREATE DATABASE IUDS_Operations;

-- To create the table in the database:
CREATE TABLE Workers 
(
    Emp_id SERIAL PRIMARY KEY , 
    Emp_Name VARCHAR(30) NOT NULL ,
    Deparment VARCHAR(30) NOT NULL ,
    Email VARCHAR(30) NOT NULL , 
    Salary DECIMAL ( 10 , 2 ) DEFAULT (30000.00) ,
    Hire_Date DATE DEFAULT (CURRENT_DATE)
);

--To Read the Created Database with all values:
SELECT * FROM Workers;

-- To insert the Data in the database:
INSERT INTO Workers VALUES (121 , 'MUHAMMAD HASNAIN' , 'FINANCE' , 'hasnain123@gmail.com' , 70000.00 , '20-Feb-2019');
INSERT INTO Workers VALUES (122 , 'SHUMAIL AHMED' , 'HR' , 'shumail123@gmail.com' , 50000.00 , '21-March-2019');
INSERT INTO Workers VALUES (123 , 'HASSAN AHMED' , 'IT' , 'hassan123@gmail.com' , 80000.00 , '28-March-2019');
INSERT INTO Workers VALUES (124 , 'SHARIQ JAMAL' , 'MARKETING' , 'shariq123@gmail.com' , 50000.00 , '1-May-2020');
INSERT INTO Workers VALUES (125 , 'SHABBIR AHMED' , 'FINANCE' , 'shabbir123@gmail.com' , 65000.00 );
INSERT INTO Workers VALUES (126 , 'GHAZANFAR HASSAN' , 'HR' , 'ghazanfar123@gmail.com' , 50000.00 , '10-June-2020');
INSERT INTO Workers VALUES (127 , 'MUHAMMAD SHOAIB' , 'DEVELOPER' , 'shoaib123@gmail.com' , 70000.00 , '11-Feb-2021');
INSERT INTO Workers VALUES (128 , 'GHUFRAN ZADA' , 'CONTENT WRITER' , 'ghufran123@gmail.com' , 35000.00 , '10-April-2022');

INSERT INTO Workers VALUES (129 , 'ISFAHAN KHAN' , 'NETWORK ADMINISTRATOR' , 'isfahan123@gmail.com' , 95000.00 );

INSERT INTO Workers VALUES (130 , 'SHAZAIB HASAN' , 'ADMIN' , 'shahzaib123@gmail.com' , 55000.00 );


SELECT * FROM Workers ;


--To Delete Specific value or row in a table:
DELETE FROM Workers WHERE Emp_Name = 'Muhammad Hasnain';


-- To Update Specific value in a table:
UPDATE Workers SET salary = 90000.00 WHERE Deparment = 'IT';

SELECT * FROM Workers WHERE Deparment = 'IT';
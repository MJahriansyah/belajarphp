CREATE TABLE `customers` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) ,
  `email` varchar(255) ,
  `password` varchar(255) 
);

CREATE TABLE `orders` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `amount` varchar(255) ,
  `customer_id` int,
  FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
);

INSERT INTO `customers` (`id`, `name`, `email`, `password`) VALUES
(1, 'John Doe', 'john@doe.com', 'john123'),
(2, 'Jane Doe', 'jane@doe.com', 'jenita123');

INSERT INTO `orders` (`id`, `amount`,`customer_id`) VALUES
(1, 500,1),
(2, 200,2),
(3, 750,2),
(4, 250,1),
(5, 400,2);

CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`last_sign_in` integer NOT NULL,
	`joined` integer NOT NULL
);

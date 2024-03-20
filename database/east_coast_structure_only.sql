/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80200 (8.2.0)
 Source Host           : localhost:3306
 Source Schema         : east_coast

 Target Server Type    : MySQL
 Target Server Version : 80200 (8.2.0)
 File Encoding         : 65001

 Date: 17/03/2024 21:36:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts`  (
  `account_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` enum('member','fishing_guide','manager') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`account_id`) USING BTREE,
  UNIQUE INDEX `username`(`username` ASC) USING BTREE,
  UNIQUE INDEX `email`(`email` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 301 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for attendance
-- ----------------------------
DROP TABLE IF EXISTS `attendance`;
CREATE TABLE `attendance`  (
  `attendance_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NULL DEFAULT NULL,
  `event_id` int NULL DEFAULT NULL,
  `lesson_id` int NULL DEFAULT NULL,
  `attendance_date` datetime NULL DEFAULT NULL,
  `status` enum('attended','missed') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`attendance_id`) USING BTREE,
  INDEX `account_id`(`account_id` ASC) USING BTREE,
  INDEX `event_id`(`event_id` ASC) USING BTREE,
  INDEX `lesson_id`(`lesson_id` ASC) USING BTREE,
  CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `attendance_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`) ON DELETE SET NULL ON UPDATE RESTRICT,
  CONSTRAINT `attendance_ibfk_3` FOREIGN KEY (`lesson_id`) REFERENCES `lessons` (`lesson_id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for bookings
-- ----------------------------
DROP TABLE IF EXISTS `bookings`;
CREATE TABLE `bookings`  (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `member_id` int NULL DEFAULT NULL,
  `event_id` int NULL DEFAULT NULL,
  `lesson_id` int NULL DEFAULT NULL,
  `booking_date` datetime NULL DEFAULT NULL,
  `booking_status` enum('confirmed','cancelled') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `skills_goals` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  PRIMARY KEY (`booking_id`) USING BTREE,
  INDEX `member_id`(`member_id` ASC) USING BTREE,
  INDEX `event_id`(`event_id` ASC) USING BTREE,
  INDEX `lesson_id`(`lesson_id` ASC) USING BTREE,
  CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `members` (`member_id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`) ON DELETE SET NULL ON UPDATE RESTRICT,
  CONSTRAINT `bookings_ibfk_3` FOREIGN KEY (`lesson_id`) REFERENCES `lessons` (`lesson_id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for events
-- ----------------------------
DROP TABLE IF EXISTS `events`;
CREATE TABLE `events`  (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `event_details` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `location` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `event_date` datetime NULL DEFAULT NULL,
  `event_duration` int NULL DEFAULT NULL,
  `event_capacity` int NULL DEFAULT NULL,
  `guide_id` int NULL DEFAULT NULL,
  `event_price` decimal(10, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`event_id`) USING BTREE,
  INDEX `guide_id`(`guide_id` ASC) USING BTREE,
  CONSTRAINT `events_ibfk_1` FOREIGN KEY (`guide_id`) REFERENCES `fishing_guides` (`guide_id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for fishing_guides
-- ----------------------------
DROP TABLE IF EXISTS `fishing_guides`;
CREATE TABLE `fishing_guides`  (
  `guide_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NULL DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `family_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phone_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `profile` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `profile_image_url` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `lesson_fee` decimal(10, 2) NOT NULL DEFAULT 100.00,
  PRIMARY KEY (`guide_id`) USING BTREE,
  INDEX `account_id`(`account_id` ASC) USING BTREE,
  CONSTRAINT `fishing_guides_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for lessons
-- ----------------------------
DROP TABLE IF EXISTS `lessons`;
CREATE TABLE `lessons`  (
  `lesson_id` int NOT NULL AUTO_INCREMENT,
  `guide_id` int NULL DEFAULT NULL,
  `lesson_details` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `lesson_date` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`lesson_id`) USING BTREE,
  INDEX `guide_id`(`guide_id` ASC) USING BTREE,
  CONSTRAINT `lessons_ibfk_1` FOREIGN KEY (`guide_id`) REFERENCES `fishing_guides` (`guide_id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for managers
-- ----------------------------
DROP TABLE IF EXISTS `managers`;
CREATE TABLE `managers`  (
  `manager_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NULL DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `family_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phone_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`manager_id`) USING BTREE,
  INDEX `account_id`(`account_id` ASC) USING BTREE,
  CONSTRAINT `managers_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for members
-- ----------------------------
DROP TABLE IF EXISTS `members`;
CREATE TABLE `members`  (
  `member_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NULL DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `family_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phone_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `date_of_birth` date NULL DEFAULT NULL,
  `profile_image_url` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `angling_experience` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `subscription_status` enum('active','expired') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `subscription_expiry_date` date NULL DEFAULT NULL,
  PRIMARY KEY (`member_id`) USING BTREE,
  INDEX `account_id`(`account_id` ASC) USING BTREE,
  CONSTRAINT `members_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `news_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `publish_date` datetime NOT NULL,
  PRIMARY KEY (`news_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for payments
-- ----------------------------
DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments`  (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NULL DEFAULT NULL,
  `payment_type` enum('registration','subscription','event','lesson') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `amount` decimal(10, 2) NOT NULL,
  `payment_date` datetime NOT NULL,
  PRIMARY KEY (`payment_id`) USING BTREE,
  INDEX `account_id`(`account_id` ASC) USING BTREE,
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

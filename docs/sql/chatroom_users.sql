-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: chatroom
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `is_online` tinyint NOT NULL DEFAULT '0' COMMENT '是否在线 0: false, 1: true',
  `socket_id` varchar(255) DEFAULT NULL COMMENT 'socket 分配的唯一标识符',
  `username` varchar(30) NOT NULL COMMENT '社交名称',
  `password` varchar(255) NOT NULL COMMENT '账号密码',
  `phone` char(11) NOT NULL COMMENT '手机号码',
  `create_date` date NOT NULL COMMENT '账号创建日期',
  `birthday` date DEFAULT NULL COMMENT '出生日期',
  `bg_img` varchar(255) NOT NULL DEFAULT 'https://img2.baidu.com/it/u=3047746964,2762111262&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500' COMMENT '背景图片',
  `avatar` varchar(255) NOT NULL DEFAULT 'https://img1.baidu.com/it/u=4066251288,3860549911&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' COMMENT '头像',
  `thumb` int NOT NULL DEFAULT '0' COMMENT '点赞数',
  `signature` varchar(100) NOT NULL DEFAULT '这个人很懒，什么也没有留下' COMMENT '个性签名',
  `zodiac` varchar(2) DEFAULT NULL COMMENT '生肖',
  `constellation` varchar(10) DEFAULT NULL COMMENT '星座',
  `sex` varchar(4) NOT NULL DEFAULT '未知' COMMENT '性别',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10003 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (10000,1,'G6DmgytFcA8H2NAyAAAB','shiramashiro','123456','11111111111','2022-08-12','2000-04-08','https://img2.baidu.com/it/u=3047746964,2762111262&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500','https://img2.baidu.com/it/u=1551332060,3851187886&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501',0,'这个人很懒，什么也没有留下','龙','白羊','1'),(10001,1,'I9Ma4H6cBvttHMnYAAAD','Enziandom','123456','11111111111','2022-08-18','2000-07-18','https://img0.baidu.com/it/u=4015738813,598225989&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=600','https://img1.baidu.com/it/u=4066251288,3860549911&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',0,'这个人很懒，什么也没有留下','龙','巨蟹','1'),(10002,0,'','emiliaten','123456','11111111111','2022-08-18','2000-08-18','https://img2.baidu.com/it/u=3047746964,2762111262&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500','https://img0.baidu.com/it/u=85593985,1990100627&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',0,'这个人很懒，什么也没有留下','龙','狮子','未知');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-23 21:31:46

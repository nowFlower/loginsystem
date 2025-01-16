package com.itg.examp;
 //최초 실행
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LoginSystemApplication {

	public static void main(String[] args) {
		System.out.println("서버가 잘 작동됨");
		SpringApplication.run(LoginSystemApplication.class, args);
	}

}

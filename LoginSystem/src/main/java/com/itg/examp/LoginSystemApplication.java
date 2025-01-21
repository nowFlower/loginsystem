package com.itg.examp;
 //최초 실행
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling //스케줄 일괄컨트롤 배치
public class LoginSystemApplication {

	public static void main(String[] args) {
		System.out.println("서버가 잘 작동됨");
		SpringApplication.run(LoginSystemApplication.class, args);
	}

}

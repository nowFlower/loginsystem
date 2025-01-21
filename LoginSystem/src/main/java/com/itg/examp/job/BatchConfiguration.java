package com.itg.examp.job;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

//배치 환경설정 필요  생성자 빌더 패턴(Builder Pattern)을 활용하여 Spring Batch에서 Job과 Step을 구성
@Configuration  //먼저 읽는다, 스프링 컨텍스트에 Bean으로 등록될 메서드들을 포함
public class BatchConfiguration {
	int count = 0;
	
	@Bean   //스프링3.0은 이게 안됨  Job은 배치 작업의 최상위 개념  DI (의존성 주입): JobRepository와 Step 객체를 외부에서 주입받아 관리의 책임을 분리
	public Job helloJob(JobRepository jobRepository,Step helloStep) {
		return new JobBuilder("helloJob 작업했다", jobRepository)  //Job을 생성하기 위한 빌더 클래스
				.start(helloStep)  //Job이 시작할 때 실행할 Step을 설정합니다
				.build();  //Job 객체를 최종적으로 생성
	}
	
	@Bean
	public Step helloStep(JobRepository jobRepository,Tasklet hellolTasklet,PlatformTransactionManager transactionManager) {
		return new StepBuilder("helloStep 어떤 작업했다", jobRepository)
				.tasklet(hellolTasklet, transactionManager)   
				.allowStartIfComplete(true)  //시작이 완료 될때 ,, false는 1번만, true 작업 반복
				.build(); //이게 생성자 빌터패턴(생성자가 복작할때 씀)
	}
	@Bean //배치작업 수행
	public Tasklet hellolTasklet() {
		//일회용 메소드 여기서는 => 아니라 ->화살표 함수
		return (contribution,chunkContext)->{
			count++;
			System.out.println(count +"스프링 배치작업 수행중");
			return RepeatStatus.FINISHED;	 //승인작업 끝났다고 
		};
	}
}

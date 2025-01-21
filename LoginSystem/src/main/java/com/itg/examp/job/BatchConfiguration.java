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

//배치 환경설정 필요
@Configuration  //먼저 읽는다
public class BatchConfiguration {
	int count = 0;
	
	@Bean   //스프링3.0은 이게 안됨
	public Job helloJob(JobRepository jobRepository,Step helloStep) {
		return new JobBuilder("helloJob 작업했다", jobRepository)
				.start(helloStep)
				.build();
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

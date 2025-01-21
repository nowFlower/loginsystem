package com.itg.examp.job;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

//배치를 자동으로 실행하는 작업
@Component //자동 등록 클래스,, 컨트럴러처럼 지정이 안되서 이거 씀 
public class BatchSchedule {
	@Autowired
	private final Job job=null;
	@Autowired
	private final JobLauncher jobLauncher= null; //helloJob 실행함
	
	@Scheduled(cron="0 0 0 1 * ?")  //cron = "초 분 시 일 월 요일 년도" 0/10  = 10초당 1번씩,  ?는 년도 상관없음
	public void runJob() {
		System.out.println("스케쥴 시작 ===============");
		try {
			jobLauncher.run(job, new JobParametersBuilder().toJobParameters()); // 조건을 맞게
		} catch (JobExecutionAlreadyRunningException | JobRestartException | JobInstanceAlreadyCompleteException
				| JobParametersInvalidException e) {  //여러 예외 
			e.printStackTrace();
		}
	}
	
}

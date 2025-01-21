package com.itg.examp.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Iterator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.itg.examp.MemberService;

@SpringBootTest
public class MemberserviceTests {
	// 경계값 분석: boundary analize// 데이터 분석 할때 : 값 경계에서 오류가 가장 많이나서
	String[] rightId;
	String[] rightPw;
	String[] wrongId;
	String[] wrongPw;

	// 화이트 내부로직 보는거 for 등 조건문
	// 블랙 -값 도출
	@Autowired
	MemberService ms;// 자동주입

	@BeforeEach // 테스트할때마다 무조건 수행
	public void setVariable() {
		// 블랙박스 동시분할(동등분할)
		rightId = new String[] { "aaaaa", "abbbbccdd", "abcd", "a@e12345", "bb#ddcc" };
		wrongId = new String[] { "aaa", "ab", "abc", "123", "bb#" };
		rightPw = new String[] { "aaaa12", "abbbbccdd", "abcd##", "a@e12345", "bb#ddcc" };
		wrongPw = new String[] { "aaaa", "ab3", "abcd", "a@e12", "bb#dd" };
	}

	// 모듈테스트 = 단위테스트(유닛테스트) = 함수테스트
	@Test
	public void testId() {
		boolean res = false;
//		for (int idx = 0; idx < rightId.length; idx++) {  
//			String id = rightId[idx];
//			res = ms.checkId(id);
//			assertEquals(true, res, idx + "올바른 아이디입니다."); // assertEquals 비교test 함수 = res가 true면 메세지
//		}
		for (String id : wrongId) {  //이거 쓰면 몇번 index가 고장인지 파악이 안되서 위처럼 써야 파악 됨
			res = ms.checkId(id);
			assertEquals(false, res, "잘못된 아이디입니다.");
		}
	}

	@Test
	public void testPassword() {
		boolean res = false;
		for (String pw : rightPw) {
			res = ms.checkPassword(pw);
			assertEquals(true, res, "올바른 비번입니다."); // test 함수 = res가 true면 메세지
		}
		for (String pw : wrongPw) {
			res = ms.checkPassword(pw);
			assertEquals(false, res, "잘못된 비번입니다.");
		}
	}
}

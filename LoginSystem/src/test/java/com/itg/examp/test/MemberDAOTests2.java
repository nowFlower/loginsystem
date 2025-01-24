package com.itg.examp.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.itg.examp.dao.MemberDAO;
import com.itg.examp.dto.MemberDTO;

@SpringBootTest
public class MemberDAOTests2 {

	String[] rightId, dupId,  wrongId, rightPw, wrongPw;

	@Autowired
	MemberDAO dao;

	@BeforeEach // 테스트할때마다 무조건 수행
	public void setVariable() {
		rightId = new String[] { "mmmm", "myhong", "test", "hong", "bb#ddcc" };
		wrongId = new String[] { "aaa", "ab", "abc", "123", "bb#" };
		rightPw = new String[] {  };
		wrongPw = new String[] { "aaaa", "ab3", "abcd", "a@e12", "bb#dd" };
	}

	@Test // 로그인
	public void testlogin() {
//		Map<String, object> hm = new HashMap<>();
//		hm.put("mid", rightId);
//		hm.put("mpw", rightPw);
//		MemberDTO member = dao.signinMember(hm);
//		if (member != null && member.getMid() != null) {
//			assertEquals(rightId, member.getMid(), "로그인 가능: 아이디가 일치합니다.");
//		} else
//			hm.put("message", "로그인 실패");
	}

	@Test // 잘못된 로그인 실패
	public void testWronglogin() {
//		Map<String, String> hm = new HashMap<>();
//		hm.put("mid", wrongId);
//		hm.put("mpw", wrongPw);
//		MemberDTO member = dao.signinMember(hm);
//		if (member != null && member.getMid() != null) {
//			assertEquals(rightId, member.getMid(), "로그인 가능: 아이디가 일치합니다.");
//		} else
//			hm.put("message", "로그인 실패");
	}

	@Test //로그아웃
	public void testlogout() {
		testlogin(); //로그인

		
	}

}

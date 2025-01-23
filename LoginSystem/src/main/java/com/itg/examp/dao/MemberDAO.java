package com.itg.examp.dao;
import java.util.List;
import java.util.Map;

import com.itg.examp.dto.MemberDTO;
//보통 스프링 빈은 인터페이스를 보고 진행함
public interface MemberDAO {
	//회원가입 데이터 저장
	public int singupMember(MemberDTO member);
	//회원 로그인시 로그인 아이디, 비번 확인
	public MemberDTO signinMember(Map<String, String> data) ;
	//회원리스트 조회시 리스트 출력
	public List<MemberDTO> memberList() ;
	//회원아이디 중복체크
	public MemberDTO idchk(Map<String, String> data) ;
	
}

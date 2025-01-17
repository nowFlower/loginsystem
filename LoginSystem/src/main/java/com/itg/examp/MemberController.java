package com.itg.examp;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itg.examp.dao.MemberDAO;
import com.itg.examp.dto.MemberDTO;

import org.springframework.web.bind.annotation.RequestBody;

@RestController // @Controller 페이지를 응답함, RestController 기본값으로 데이터를 줌(실시간 통신, ajex통신)
@RequestMapping("/member")
public class MemberController {
//스프링이 관리하는 bin
	@Autowired // 자동주입
	MemberDAO dao; // 제어의 역전
	@Autowired
	MemberService serive;
	@PostMapping("/signup") // post json 형태로
	public Map<String, Object> singupMember(MemberDTO member) {
		
		//자바스크립트 점검 + 해킹막고자 또 함  //id는 4글자, pw 6글자 => 서비스객체
		boolean ckid = serive.checkId(member.getMid());
		boolean ckpw = serive.checkPassword(member.getMpw());
		HashMap<String, Object> hm = new HashMap<>();
		if(!ckid )hm.put("message","아이디를 점검");
		if(!ckpw )hm.put("message","비번를 점검");
		
		//데이터
		int res = dao.singupMember(member);
		if (res == 1) {
			System.out.println(member.toString());
			System.out.println(member.getName() + "회원가입");
			hm.put("message","회원가입");
			hm.put("data",member);
		} else {
			hm.put("message","회원가입실패");
		}
		return hm;
	}

	@PostMapping("/login")
	public void singin(@RequestBody String entity) {

	}

	@GetMapping("/logout")
	public void singout(@RequestBody String entity) {

	}

	@GetMapping("/listview")
	public void listview(@RequestBody String entity) {

	}

}

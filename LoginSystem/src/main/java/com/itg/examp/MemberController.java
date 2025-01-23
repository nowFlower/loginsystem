package com.itg.examp;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itg.examp.dao.MemberDAO;
import com.itg.examp.dto.MemberDTO;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.websocket.Session;

import org.springframework.web.bind.annotation.RequestBody;

@RestController // @Controller 페이지를 응답함, RestController 기본값으로 데이터를 줌(실시간 통신, ajex통신)
@RequestMapping("/member")
public class MemberController {
//스프링이 관리하는 bin
	@Autowired // 자동 빈 주입
	MemberDAO dao; // 제어의 역전 본래 MemberDAO dao = new MemberDAOImlp() 해야하는데 안해도 됨
	@Autowired
	MemberService serive;

	@PostMapping("/signup") // post json 형태로
	public Map<String, Object> singupMember(MemberDTO member) {

		// 자바스크립트 점검 + 해킹막고자 또 함 //id는 4글자, pw 6글자 => 서비스객체
		boolean ckid = serive.checkId(member.getMid());
		boolean ckpw = serive.checkPassword(member.getMpw());
		HashMap<String, Object> hm = new HashMap<>();

		if (!ckid) {
			hm.put("message", "아이디를 점검하세요");
			return hm; // if문에서는 break안됨, return을 사용
		}
		if (!ckpw) {
			hm.put("message", "비밀번호를 점검하세요");
			return hm;
		}

		// 데이터
		int res = dao.singupMember(member);
		if (res == 1) {
			System.out.println(member.toString());
			hm.put("message", "회원가입");
			member.setMpw("");
			hm.put("data", member);
		} else hm.put("message", "회원가입실패");

		return hm;
	}

	@PostMapping("/idchk") // post json 형태로
	public boolean idchk(@RequestBody Map<String, String> logindata) {
				//HashMap<String, Object> hm = new HashMap<>();
				MemberDTO member = dao.idchk(logindata);
			//	if()
return true;
			}

	
	
	// HttpServletRequest 클라이트 요청 정보(쿠키, 세션 저장)
	@PostMapping("/login")
	public Map<String, Object> singin(HttpServletRequest request, @RequestBody Map<String, String> logindata) {
		HashMap<String, Object> hm = new HashMap<>();
		MemberDTO member = dao.signinMember(logindata);
		System.out.println("logindata" + logindata);
		if (member != null) {
			// 로그인 검증
			HttpSession auth = request.getSession(true); // true = 세션을 만듬, true 안하면 로그인 했는지 체크
			// 셔션에다 바로 넣음 전국구로 사용
			auth.setAttribute("mid", member.getMid());
			// auth.getAttribute("mid"); //로그아웃하기 전까지 꺼내서 씀
			hm.put("message", "로그인성공");
			hm.put("member", member);
		} else hm.put("message", "아이디와 비번 확인");

		return hm;
	}

	@GetMapping("/logout")
	public HashMap<String, Object> singout(HttpServletRequest request, HttpServletResponse res) {
		HttpSession auth = request.getSession(); // 확인
		HashMap<String, Object> hm = new HashMap<>();
		hm.put("message", auth.getAttribute("mid") + "로그인아웃되었습니다.");
		// res.sendRedirect("/");
		auth.invalidate();// 무효화= 해제
		return hm;
	}

	@GetMapping("/listview")
	public Map listview(HttpServletRequest request) {
		HttpSession auth = request.getSession(); // 확인
		HashMap<String, Object> hm = new HashMap<>();
		if (auth == null)hm.put("message", "로그인 해주세요");
		else {
			List<MemberDTO> list = dao.memberList();
			System.out.println(list);
			hm.put("message", "회원 리스트 수신");
			hm.put("members", list);
		}
		return hm;
	}

}

package com.itg.examp.dao;

import java.util.List;
import java.util.Map;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.itg.examp.dto.MemberDTO;

@Repository //저장
public class MemberDAOImlp implements MemberDAO {

	@Autowired
	SqlSessionTemplate session; //마이바티스
	
	@Override
	public int singupMember(MemberDTO member) {
		int res =session.insert("memberMapper.signup", member);   //리턴은 int
		return res;
	}

	@Override
	public MemberDTO signinMember(Map<String, String> data) {
		MemberDTO mem = session.selectOne("memberMapper.signin", data);
		return mem;
	}

	@Override
	public List<MemberDTO> memberList() {
		List<MemberDTO> list= session.selectList("memberMapper.memberList");
		return list;
	}

	@Override
	public int idchk(Map<String, String> data) {
		int count = session.selectOne("memberMapper.idchk", data);
		return count;
	}

}

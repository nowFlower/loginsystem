
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.

let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("사용자의 로그인 기능을 구현하여 로그인 사용자와 비로그인 사용자에 제공 서비스를 구분한다.")//서브 타이틀
d1.set_img(0,{imgtitle:"요구사항명세서 작성",imgurl:"https://drive.google.com/file/d/1P9KtYzSW8z7rjU1AmQJkADGykQ_ACGjb/view?usp=drive_link",imglog:"작성된 요구사항명세",sourceurl:"https://docs.google.com/document/d/1MjGnlBH2smVvwywHytnhVMmB0SnkAt20nMu4PMwfEAk/edit?usp=drive_link"})//이미지타이틀


d1.set_content("목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다.")
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/1XMLmxj3wnL_N20kZ1EpR7IkkwT8Bp7mj/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/140qDBqv68DCW2L8T45GrxjyH9JbyruPkdbvRnNQxQSM/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"스프링프레임워크",imgurl:"https://drive.google.com/file/d/1HRUQhj2Tk6AzIW_NSRD59wGUAduJYTmW/view?usp=drive_link",imglog:"오픈소스 스프링프레임워크 v4.27",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"클라이언트단",imgurl:"https://drive.google.com/file/d/1GamVr1U5huxN2bmaX7tErSngpUXPX_-c/view?usp=drive_link",imglog:"오픈소스 클라이언트단 ",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"DB",imgurl:"https://drive.google.com/file/d/1xCeih7OnpMSeREEL08HsMsGQH4hqcAZh/view?usp=drive_link",imglog:"heidisql",sourceurl:""})//이미지타이틀



d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1L2nKZpvGF0Ajzx58NnaWWKpJ4I7ovD1h/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1wsHrqMTYYf1PAviGtOXeIbZz4RoAo2MEP9GaLklR-fw/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1sWL2PnR61KuUkbbc2p-aQ7_QXoKy8MSM/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1KuDFBZuAvaqsAsGO0UGY68j3eBcz1C7f/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1qkQ-ransk5OOFMuLP3GOImO1FCmZ6H1m/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀
d2.set_content("공통모듈을 사용해서 기존의 코드가 단축되었다")
d2.set_img(0,{imgtitle:"공통모듈.js",imgurl:"https://drive.google.com/file/d/1x497FIbxdC74JGRuviW-Fx-8a0Tg69iT/view?usp=drive_link",imglog:"공통모듈로 분리",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/resources/static/common.js"})



d2.set_content("공통모듈구현을 작성합니다.")
d2.set_img(1,{imgtitle:"로그인 UI 연동",imgurl:"https://drive.google.com/file/d/1RGXQy1vTL1ouCCN3_agwq0e6V0LPswRC/view?usp=drive_link",imglog:"공통모듈을 사용해서 기존의 코드가 단축되었다",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/resources/static/newpage.html"})
d2.set_img(1,{imgtitle:"로그인 공통모듈쓴 코드 비교",imgurl:"https://drive.google.com/file/d/14NbvHBlEbHYJ-qa4dHZwOCbvh_squdBl/view?usp=drive_link",imglog:"공통모듈을 사용해서 기존의 코드가 단축되었다",sourceurl:"https://docs.google.com/document/d/1l6SyK4IQK2zXYRP9_wThZpSGJLcctEyjIthHCDhVtPA/edit?usp=drive_link"})
d2.set_img(1,{imgtitle:"로그아웃 UI 연동",imgurl:"https://drive.google.com/file/d/1bRcFJ4yLJ4xDgQ9Xo0VAlXR6xIuxcW81/view?usp=drive_link",imglog:"",sourceurl:""})
d2.set_img(1,{imgtitle:"로그아웃 공통모듈쓴 코드",imgurl:"https://drive.google.com/file/d/1jHX6W_td3RAmuTfu_UzbPXcGfXcQ0sMy/view?usp=drive_link",imglog:"",sourceurl:"https://docs.google.com/document/d/1IsVKtNBmVD9BpVVXPPymPg5DbghTFMdh9aGeG7hJHtE/edit?usp=drive_link"})

d2.set_content("테스트케이스를 작성합니다.")
d2.set_img(2,{imgtitle:"경계값분석테스트 실행",imgurl:"https://drive.google.com/file/d/1nFg_9imCyFyBRMWDHtfnA2RL9neMrwuh/view?usp=drive_link",imglog:"",sourceurl:"https://docs.google.com/document/d/1DmO7gFZ6MmepNDXFkDgcBxV6UD30dSa2umTUJ2R9ObE/edit?tab=t.0"})
d2.set_img(2,{imgtitle:"Id/pw Service테스트 ",imgurl:"https://drive.google.com/file/d/1PQij6dvxS8vyEfpYEyELEXgvf1Uusk7j/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/test/java/com/itg/examp/test/MemberserviceTests.java"})
d2.set_img(2,{imgtitle:"로그인 DAO테스트 ",imgurl:"https://drive.google.com/file/d/15AWS2RxEotJHbgHI-RJVHuXU8FQRCZHt/view?usp=drive_link",imglog:"",sourceurl:""})

d2.set_content("단위테스트를 작성합니다.")
d2.set_img(3,{imgtitle:"Id/pw Service 테스트 성공",imgurl:"https://drive.google.com/file/d/1NVNav5jBg6BI0ibMbvvpHL6VfRKRvZ-u/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/test/java/com/itg/examp/test/MemberserviceTests.java"})
d2.set_img(3,{imgtitle:"junit 로그인 기능 성공",imgurl:"https://drive.google.com/file/d/1h52AMhgyWn5DshSbwbvh7WA-V2cdciJn/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/test/java/com/itg/examp/test/MemberDAOTests.java"})
d2.set_img(3,{imgtitle:"junit 로그인 기능 실패",imgurl:"https://drive.google.com/file/d/19GwkpfYFgYV1If9mla6YG0FE6h0HhJUk/view?usp=drive_link",imglog:"타입을 맞추기 못해서 실패",sourceurl:""})
//d2.set_img(3,{imgtitle:"junit 로그인아웃 기능",imgurl:"https://drive.google.com/file/d/1h52AMhgyWn5DshSbwbvh7WA-V2cdciJn/view?usp=drive_link",imglog:"",sourceurl:""})

d2.set_content("테스트케이스를 결과보고서 작성합니다.")
d2.set_img(4,{imgtitle:"경계값분석테스트 실행",imgurl:"https://drive.google.com/file/d/1tsl4V8wYNmczvIkl_4kJ1IoWJRTep7YZ/view?usp=drive_link",imglog:"",sourceurl:"https://docs.google.com/document/d/167JnTRnJ9u-jXaOaEs79HJLqgj8bYDsoTxbKFn9orOE/edit?usp=drive_link"})

d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("서버프로그램구현 작성합니다.")
d3.set_img(0,{imgtitle:"index화면 UI",imgurl:"https://drive.google.com/file/d/1v3tNGLHPjCoeB9I02jSL-faYoPR4kixj/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/resources/static/index.html"})
d3.set_img(0,{imgtitle:"MVC 패턴",imgurl:"https://drive.google.com/file/d/1J7hqiS-TI2pr0a9pNfdcrYi-hIrlgCCf/view?usp=drive_link",imglog:"계층형 설계 패턴",sourceurl:"https://docs.google.com/document/d/1Wld6nh3wphM3-6lpgs371pCg9Oa2-3g2cywBGTHMJJo/edit?usp=drive_link"})
d3.set_img(0,{imgtitle:"회원DTO",imgurl:"https://drive.google.com/file/d/1sYWSqs7VrqxjtgsldYjEWQ-ZqXs7CrkZ/view?usp=drive_link",imglog:"회원 데이터 객체",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dto/MemberDTO.java"})
d3.set_img(0,{imgtitle:"회원Controller",imgurl:"https://drive.google.com/file/d/1J9SGM3KSm2CKQ7k9hUtUWWqbNAtJVrsQ/view?usp=drive_link",imglog:"사용자 요청 처리 후 화면단 넘김",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})
d3.set_img(0,{imgtitle:"회원Service",imgurl:"https://drive.google.com/file/d/1NyARHHrAFX9ePvKkSr7wKd0OM4fgftc7/view?usp=drive_link",imglog:"비즈니스 로직과 트랜잭션을 처리",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberService.java"})
d3.set_img(0,{imgtitle:"회원DAO",imgurl:"https://drive.google.com/file/d/1dnuqY6cvEZW3CpUAifGGVUtI_4uBSTNe/view?usp=drive_link",imglog:"회원 인터페이스",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAO.java"})
d3.set_img(0,{imgtitle:"회원DAO implements",imgurl:"https://drive.google.com/file/d/1l4So1uHEDP7k-V7JULrNOvEKdaYPRzdC/view?usp=drive_link",imglog:"회원 구현",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAOImlp.java"})
d3.set_img(0,{imgtitle:"mapper",imgurl:"https://drive.google.com/file/d/1ZQT__uY3rLsK5mi8YfUejSv66_PgUrFd/view?usp=drive_link",imglog:"SQL을 호출하기 위한 인터페이스",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})

d3.set_content("회원가입구현")//서브타이틀
d3.set_img(1,{imgtitle:"회원가입UI",imgurl:"https://drive.google.com/file/d/1aCujHkP2b5LUJ3HlFOttNuNQOVemhxL2/view?usp=drive_link",imglog:"회원가입소스코드",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/resources/static/signup.html"})
d3.set_img(1,{imgtitle:"회원가입html",imgurl:"https://drive.google.com/file/d/19ixGT4L4-K9imKZbVGy6rmKrJeehgVh-/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(1,{imgtitle:"회원가입jquery",imgurl:"https://drive.google.com/file/d/1cwRVjp8yc64bL57telaUA2Sb8307PCah/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(1,{imgtitle:"회원가입컨트롤러",imgurl:"https://drive.google.com/file/d/1_At2JZis4P_g7oOeiZP4PwVD-bQJ014S/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(1,{imgtitle:"ID 중복 컨트롤러",imgurl:"https://drive.google.com/file/d/1TxNjbeBKSKCi_cgxCpCO5VWSM6Lhdxo7/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(1,{imgtitle:"회원가입서비스",imgurl:"https://drive.google.com/file/d/1NyARHHrAFX9ePvKkSr7wKd0OM4fgftc7/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(1,{imgtitle:"회원DAO",imgurl:"https://drive.google.com/file/d/1dnuqY6cvEZW3CpUAifGGVUtI_4uBSTNe/view?usp=drive_link",imglog:"회원인터페이스",sourceurl:""})
d3.set_img(1,{imgtitle:"회원가입DAOImp",imgurl:"https://drive.google.com/file/d/1l4So1uHEDP7k-V7JULrNOvEKdaYPRzdC/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(2,{imgtitle:"mapper",imgurl:"https://drive.google.com/file/d/1ZQT__uY3rLsK5mi8YfUejSv66_PgUrFd/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(1,{imgtitle:"회원가입성공",imgurl:"https://drive.google.com/file/d/1Qyx4wbbb60_UZGvlPJYxvI5yTyUCL3v8/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(1,{imgtitle:"회원가입 데이터",imgurl:"https://drive.google.com/file/d/1GTTXpvgB2Zkdq3lRFKbn2Y_HJvWx23_e/view?usp=drive_link",imglog:"",sourceurl:""})

d3.set_content("회원로그인구현")
d3.set_img(2,{imgtitle:"로그인UI",imgurl:"https://drive.google.com/file/d/11LJ8Qvu-fFbu6HV6XlHq-AbJmFD35zlm/view?usp=drive_link",imglog:"로그인소스코드",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/resources/static/index.html"})
d3.set_img(2,{imgtitle:"로그인html",imgurl:"https://drive.google.com/file/d/1jr8t3pOV5Hu5vPpesVJtxxWPbP3K0SkF/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(2,{imgtitle:"로그인jquery",imgurl:"https://drive.google.com/file/d/1QhhihsNyFs7rYMFsPY5cwu1aRbZC7AnS/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(2,{imgtitle:"로그인컨트롤러",imgurl:"https://drive.google.com/file/d/17J0NvFweXz4i5wr0jSGbhz0NQKS5BCDT/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(2,{imgtitle:"회원DAO",imgurl:"https://drive.google.com/file/d/1dnuqY6cvEZW3CpUAifGGVUtI_4uBSTNe/view?usp=drive_link",imglog:"회원인터페이스",sourceurl:""})
d3.set_img(2,{imgtitle:"로그인DAOImp",imgurl:"https://drive.google.com/file/d/1smL1WZUqGRCgcvEEgSNUXMIASVpIaLyU/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(2,{imgtitle:"로그인mapper",imgurl:"https://drive.google.com/file/d/1ZQT__uY3rLsK5mi8YfUejSv66_PgUrFd/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(2,{imgtitle:"로그인성공로그",imgurl:"https://drive.google.com/file/d/1LE13mDU7CKHM7ErAp7sk-rEEO8SKwLO4/view?usp=drive_link",imglog:"",sourceurl:""})

d3.set_content("회원 로그아웃 구현")
d3.set_img(3,{imgtitle:"로그아웃UI",imgurl:"https://drive.google.com/file/d/1_I1T-d4kericwyt-tGP9MiiwNpoJonuv/view?usp=drive_link",imglog:"",sourceurl:""})
//d3.set_img(3,{imgtitle:"로그아웃html",imgurl:"",imglog:"",sourceurl:""})
d3.set_img(3,{imgtitle:"로그아웃jquery",imgurl:"https://drive.google.com/file/d/1djxJmD3GyS0vBScQu-whQGRYDnoxrP8b/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(3,{imgtitle:"로그아웃컨트롤러",imgurl:"https://drive.google.com/file/d/1tVKIn15qpMzQelKwX-WUCWSkO1CT2teb/view?usp=drive_link",imglog:"",sourceurl:""})
//d3.set_img(3,{imgtitle:"회원DAO",imgurl:"https://drive.google.com/file/d/1dnuqY6cvEZW3CpUAifGGVUtI_4uBSTNe/view?usp=sharing",imglog:"회원인터페이스",sourceurl:""})
//d3.set_img(3,{imgtitle:"로그아웃DAOImp",imgurl:"",imglog:"",sourceurl:""})
//d3.set_img(3,{imgtitle:"mapper",imgurl:"https://drive.google.com/file/d/1ZQT__uY3rLsK5mi8YfUejSv66_PgUrFd/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(3,{imgtitle:"로그아웃log",imgurl:"https://drive.google.com/file/d/1W-KuKCcs8bTJk2FDAb_eav4wRnXO4LHt/view?usp=drive_link",imglog:"",sourceurl:""})

d3.set_content("회원 리스트 출력 구현 ")
d3.set_img(4,{imgtitle:"회원리스트UI",imgurl:"https://drive.google.com/file/d/1PdkNU5X9VhPTRUCKMRMcfcZYh6fv921y/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(4,{imgtitle:"회원리스트html",imgurl:"https://drive.google.com/file/d/1jr8t3pOV5Hu5vPpesVJtxxWPbP3K0SkF/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(4,{imgtitle:"회원리스트jquery",imgurl:"https://drive.google.com/file/d/13nMusZzPoZnqVRA911fXOhsMwmkNiJ-P/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(4,{imgtitle:"회원리스트컨트롤러",imgurl:"https://drive.google.com/file/d/1mz-xWgRb0AywdlnMpIjpnF__aEza81sO/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(4,{imgtitle:"회원DAO",imgurl:"https://drive.google.com/file/d/1dnuqY6cvEZW3CpUAifGGVUtI_4uBSTNe/view?usp=drive_link",imglog:"회원인터페이스",sourceurl:""})
d3.set_img(4,{imgtitle:"회원리스트DAOImp",imgurl:"https://drive.google.com/file/d/1l4So1uHEDP7k-V7JULrNOvEKdaYPRzdC/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(4,{imgtitle:"mapper",imgurl:"https://drive.google.com/file/d/1ZQT__uY3rLsK5mi8YfUejSv66_PgUrFd/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_img(4,{imgtitle:"회원리스트log",imgurl:"https://drive.google.com/file/d/1i5wTdVwhiPihFcJ63Mb-67OXqZw6lW59/view?usp=drive_link",imglog:"",sourceurl:""})

// d3.set_content("테스트케이스 작성")
// d3.set_img(4,{imgtitle:"",imgurl:"",imglog:"",sourceurl:""})

// d3.set_content("목오브젝트생성 및 테스트 구현")
// d3.set_img(5,{imgtitle:"",imgurl:"",imglog:"",sourceurl:""})

// d3.set_content("결과보고서 작성")
// d3.set_img(6,{imgtitle:"",imgurl:"",imglog:"",sourceurl:""})

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀
d4.set_content("배치프로그램구현 작성합니다.")
d4.set_img(0,{imgtitle:"BatchConfiguration",imgurl:"https://drive.google.com/file/d/1DVe79t54A_V36CATWF9hCTN2Vnm8PU2T/view?usp=drive_link",imglog:"배치환경설정",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/job/BatchConfiguration.java"})
d4.set_img(0,{imgtitle:"BatchSchedule",imgurl:"https://drive.google.com/file/d/1IUY6ZCwU_es7oxZG6jcl-36SkMtenqy7/view?usp=drive_link",imglog:"5분마다 스케쥴링",sourceurl:"https://github.com/nowFlower/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/job/BatchSchedule.java"})
d4.set_img(0,{imgtitle:"배치DB table",imgurl:"https://drive.google.com/file/d/1HDfRXfqxkHhtujtwy84-gaLkVU3RCJBR/view?usp=drive_link",imglog:"DB에 배치테이블 생성",sourceurl:""})

d4.set_content("배치스케줄구현")//서브타이틀
d4.set_img(1,{imgtitle:"배치스케줄구현",imgurl:"https://drive.google.com/file/d/1apKc-xopTFQ3-VPa6xxojI06jePVONW8/view?usp=drive_link",imglog:"",sourceurl:""})

d4.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)


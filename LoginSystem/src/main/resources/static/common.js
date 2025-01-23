// 로그인 함수
async function login(mid, mpw) {
	const logindate = {mid,  mpw} 
	const res = await fetch("/member/login", { method: "post", headers: { "Content-type": "application/json" }, body: JSON.stringify(logindate) });
	const data = await res.json();  //HashMap<> 받으려면 json
	return data;
}

// 로그아웃 함수
function logout(logoutui) {
	logoutui.attr("href", "/member/logout").text("로그아웃");  //changing  attr 함수를(get) 값 리턴하면 바로 
	//$("#memcontrol").attr("href", "/member/logout").text("로그아웃");
	logoutui.click(async function (evt) {
		if ($(this).text() == "로그아웃") {
			evt.preventDefault();
			const res = await fetch($(this).attr("href"))
			const data = await res.json();
			alert(data.message);
			location.href = "/"; //reload 해도됨
			return false;
		}
	})
}
const container = document.querySelector("#container");

let titleList = ['java', 'c', 'python', 'html', 'css', 'javascript']


//${}: 표현식 - 문자열에서는 사용못하고 `(백쿼터)에서만 사용가능
let e = (title) =>
`
    <div class="board-content">
		<div class="title">
			<h3>${title}</h3>
		</div>
		<div class="content">
			<img src="images/cup-1.png">
		</div>
	</div>
`;


let str = ``;
for(let i = 0; i < titleList.length; i++) {
	str += e(titleList[i]);
	
	// str.concat(e); // concat 붙이고 싶은 문자열
	// 단순 문자열만 가능함
}

container.innerHTML = str;

let apiUrl = 'http://chrisoffiong.auth0.com/userinfo';
let token = window.location.hash;

function convertToken(token) {
	let tokenObj = {};
	let hashToken = token.slice(1).split('&');
	for (let i = 0; i < hashToken.length; i++) {
		let subResult = hashToken[i].split('=');
		for (let j = 0; j < subResult.length; j++) {
			tokenObj[subResult[0]] = subResult[1];
		}
	}
	return tokenObj;
}

let convertedToken = convertToken(token);

$.ajax({
	type: "POST",
	url: '/get/token',
	data: convertedToken
}).then(function(data) {
	// $('.container').html(`<p>My Name is ${data.nickname}</p><img src="${data.picture}" /><p>Email: ${data.name}</p>`);
});

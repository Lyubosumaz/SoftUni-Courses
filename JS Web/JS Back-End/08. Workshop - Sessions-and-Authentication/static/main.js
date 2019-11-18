// function refreshToken() {
//     const token = getCookie('auth_cookie');
//     console.log(typeof token, token.length);
//     if (token && token.length !== 0) {
//         fetch('http://localhost:3000/refresh', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//             body: JSON.stringify({ token })
//         }).then((data) => {
//             setCookie('auth_cookie', data.token);
//         });
//     }
// }
// setInterval(refreshToken, 10 * 1000)

// const setCookie = (name, value, days = 7, path = '/') => {
//     const expires = new Date(Date.now() + days * 864e5).toUTCString()
//     document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
// }

// const getCookie = (name) => {
//     return document.cookie.split('; ').reduce((r, v) => {
//         const parts = v.split('=')
//         return parts[0] === name ? decodeURIComponent(parts[1]) : r
//     }, '')
// }
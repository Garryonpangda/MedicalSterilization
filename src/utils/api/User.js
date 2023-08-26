import request from '@/utils/request'

export const doLogin = function(username, password, kaptcha, remember_me) {
    var data = JSON.stringify({
        "username": username,
        "password": password,
        "kaptcha": kaptcha,
        "remember-me": remember_me
    })
    var options = {
        data: data
    };

    console.log(data);
    return request.post('/doLogin', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}

export const logout = function() {
    return request.get('/logout');
}
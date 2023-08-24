import request from '@/utils/request'

export const getVerifyCode = function(flag) {
    if (flag == 1) {
        return request.get('/vc.jpg', {
            params: {}
        }).then(response => {
            const cookies = response.headers['JSESSIONID'];
            console.log("wqe");
            if (cookies) {
                cookies.forEach(cookie => {
                    // 将Cookie保存到浏览器中
                    console.log(cookie);
                });
            }
        })
    } else {
        return request.get('/vc.jpg', {
            params: {}
        })
    }



}

export const test = function(flag) {
    return request.get('/advanced_setting/ListAllProject', {
        params: {}
    })
}
import request from '@/utils/request'

export const getVerifyCode = function() {

    return request.get('/vc.jpg', {

        params: {}
    })
}

export const isLogin = function() {

    return request.get('/isLogin', {

        params: {}
    })
}
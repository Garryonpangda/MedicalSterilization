import request from '@/utils/request'

export const getVerifyCode = function() {

    return request.get('/vc.jpg', {
        params: {}
    })
}
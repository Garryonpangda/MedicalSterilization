import request from '@/utils/request'

export const ListAllOrgnization1 = function() {
    return request.post('/mocha_itom/ListAllOrgnization', {
        headers: {
            'content-type': 'application/json'
        }
    });

}

export const ListAllOrgnization = function() {
    return request.get('/mocha_itom/ListAllOrgnization', {
        params: {}
    })
}
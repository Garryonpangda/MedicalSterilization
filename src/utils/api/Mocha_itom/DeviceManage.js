import request from '@/utils/request'

export const ListAllOrgnization = function() {
    return request.post('/mocha_itom/ListAllOrgnization', {
        headers: {
            'content-type': 'application/json'
        }
    });

}

export const ListDevice = function() {
    return request.get('/mocha_itom/ListDevice', {
        params: {}
    })
}
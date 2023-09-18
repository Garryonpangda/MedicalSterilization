import request from '@/utils/request'

export const SelectDevice = function(data) {
    return request.post('/mocha_itom/SelectDevice', data, {
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

export const ListAllOrgnization = function() {
    return request.get('/mocha_itom/ListAllOrgnization', {
        params: {}
    })
}

export const AddDevice = function(data) {
    return request.post('/mocha_itom/AddDevice', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}
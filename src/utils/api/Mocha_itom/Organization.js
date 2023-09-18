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

export const ListUsersByOrgnizationId = function(orgnizationid) {
    return request.get('/mocha_itom/ListUsersByOrgnizationId', {
        params: {
            orgnizationid
        }
    })
}

export const SelectOrgnization = function(name, phonenum) {
    return request.get('/mocha_itom/SelectOrgnization', {
        params: {
            name,
            phonenum
        }
    })
}

export const AddOrganization = function(data) {
    return request.post('/mocha_itom/AddOrganization', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}
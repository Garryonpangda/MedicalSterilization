import request from '@/utils/request'

export const ListUsers = function() {
    return request.post('/advanced_setting/ListUsers', {
        headers: {
            'content-type': 'application/json'
        }
    });

}

export const ListAllProject = function() {
    return request.get('/advanced_setting/ListAllProject', {
        params: {}
    })
}

export const ListRoles = function() {
    return request.get('/advanced_setting/ListRoles', {
        params: {}
    })
}

export const ListRilesByProjectid = function(projectid) {
    return request.get('/advanced_setting/ListRilesByProjectid', {
        params: { projectid }
    })
}
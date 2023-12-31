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

export const SelectUser = function(data) {
    return request.post('/advanced_setting/SelectUser', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}


export const AddProjectUser = function(data) {
    return request.post('/advanced_setting/AddProjectUser', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}


export const ListRolesByUserid = function(roleid) {
    return request.get('/advanced_setting/ListRolesByUserid', {
        params: { roleid }
    })
}
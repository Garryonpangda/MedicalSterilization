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

export const ListRolesByProjectid = function(projectid) {
    return request.get('/advanced_setting/ListRilesByProjectid', {
        params: { projectid }
    })
}

export const ListAllMenus = function() {
    return request.get('/advanced_setting/ListAllMenus', {
        params: {}
    })
}

export const AddRole = function(data) {
    return request.post('/advanced_setting/AddRole', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}

export const UpdateRole = function(data) {
    return request.post('/advanced_setting/UpdateRole', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}


export const ListMenusByRoleid = function(roleid) {
    return request.get('/advanced_setting/ListMenusByRoleid', {
        params: { roleid }
    })
}
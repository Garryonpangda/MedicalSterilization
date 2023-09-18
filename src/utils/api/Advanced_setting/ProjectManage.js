import request from '@/utils/request'

export const DeleteProject = function(projectid, password) {
    var data = JSON.stringify({
        "projectid": projectid,
        "password": password
    })


    return request.post('/advanced_setting/DeleteProject', data, {
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


export const AddProject = function(data) {


    return request.post('/advanced_setting/AddProject', data, {
        headers: {
            'content-type': 'application/json'
        }
    });

}

export const CheckProjectId = function(projectid) {
    return request.get('/advanced_setting/CheckProjectId', {
        params: {
            projectid
        }
    })
}


export const CheckProjectName = function(projectname) {
    return request.get('/advanced_setting/CheckProjectName', {
        params: { projectname }
    })
}

export const CheckUserName = function(username) {
    return request.get('/advanced_setting/CheckUserName', {
        params: { username }
    })
}

export const ListUsers = function() {


    return request.post('/advanced_setting/ListUsers', {
        headers: {
            'content-type': 'application/json'
        }
    });

}
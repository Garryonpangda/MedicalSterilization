
import request  from ".";

export const getAllIssueApi = (start,pagesize)=>{
    return request({
        url:'/issue/all/'+start+"/"+pagesize,
        method:'get'
    })
}

export const getIssueDetailApi= (id)=>{
    return request({
        url:'/issue/detail/'+id,
        method:'get'
    })
}

export const commitFeedbackApi= (content,admin_id,issue_id)=>{
    return request({
        url:'/issue/feedback',
        method:'post',
        data: {
            content:content,
            admin_id:admin_id,
            issue_id:issue_id
        }

    })
}
export const addIssueApi = (issue_content,reader_id)=>{
    return request({
        url:'/issue/add',
        method:'post',
        data: {
            issue_content:issue_content,
            reader_id:reader_id
        }
    })
}

export const getOwnApi= (id,start,pagesize)=>{
    return request({
        url:'/issue/own/'+id+'/'+start+'/'+pagesize,
        method:'get'
    })
}

export const getAllnumApi= ()=>{
    return request({
        url:'/issue/num',
        method:'get'
    })
}

export const getOwnnumApi= (id)=>{
    return request({
        url:'issue/num/'+id,
        method:'get'
    })
}

export const deleteApi= (id)=>{
    return request({
        url:'/issue/withdraw/',
        method:'post',
        data:{
            id:id
        }
    })
}





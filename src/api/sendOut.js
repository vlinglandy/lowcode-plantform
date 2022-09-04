export function register(data){
    return {
        url:'http://47.95.23.74:3001/user/register',
        method:'post',
        data:data,
    }
}
export function getOne(id){
    return {
        url:'http://47.95.23.74:3001/user/getOne',
        method:'post',
        data:id,
    }
}
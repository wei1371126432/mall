import {request} from './request'
//请求首页多个数据的
export function getHomeMultidata(){
    return request({
        url: '/home/multidata'
    })
}
//请求详情列表数据
export function getGoodsList(type,page){
    return request({
        url: '/home/data',
        params: {
            type,
            page
          }
    })
}
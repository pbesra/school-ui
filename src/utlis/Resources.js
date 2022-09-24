const Resources={
    uri:'http://localhost:5282/api/v1',
    resources:{
        endpoints:{
            student:[
                {method: 'post', endpoint:'student', action:'create'},
                {method:'get', endpoint:'student', action:'getList'},
            ]
        }
    },
    colors:{
        body:''//'#DEF7FF',
    }
}
export default Resources;
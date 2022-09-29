export const uriNames={
    main:'main'
}
export const uriList=[{uri:'http://localhost:5282/api/v1', version:'v1', name:uriNames.main}]; 
export const endPoints={
    student:'Student',
}
const Resource={
    colors:{
        activeColor:'#518DFF',
        inActiveColor:'#5A5A5A',
    },
    api:{
        getUriByName:(name)=>{
            return uriList.find(x=>x.name===name)?.uri;
        },
        checkIfValidUri: (uri)=>{
            return !!uriList.find(x=>x.uri===uri);
        },
        checkIfValidEndpoint:(endpoint)=>{
            return !!endPoints?.[endpoint];
        },
        checkIfValidUriName:(uriName)=>{
            return !!uriNames?.[uriName];
        }
    },
}
export default Resource;
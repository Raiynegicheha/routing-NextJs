export default function Docs({params}:{
    params: {
        urls: string[];
    };
}){
    if(params.urls?.length === 2){
        return <h1>Viewing docs for {params.urls[0]} of the concept {params.urls[1]}</h1>
    } else if(params.urls?.length === 1) {
        return <h1>Viewing Docs for {params.urls[0]}</h1>
    }
    return (
        <h1> Viewing Docs</h1>
    )
}
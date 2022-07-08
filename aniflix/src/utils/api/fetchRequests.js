
export const fetchUrls = async(url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        const {results} = data;
        return results;
    }catch(err){
        console.log(err);
    }
}
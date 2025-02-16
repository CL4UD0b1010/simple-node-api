export function extractQueryParams(query) {
    return query.sbstr(1).split('&').reduce((queryparams, param) =>{
        const [key, value] = param.split('=');

        queryparams[key] = value;
    }, {});
}
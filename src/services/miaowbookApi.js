// export const API_URL = 'http://127.0.0.1:8000/api/v1'
export const API_URL = 'https://miaowbook-api.herokuapp.com/api/v1'

// const headers = (headers = {}) => {
//     const token = useSelector(selectToken);

//     return {
//         'Accept': 'application/json',
//         'Authorization': token ? `Bearer ${token}` : '',
//         ...headers
//     }
// }

// export const fetchPosts = async ({ cursor = null }) => {
//     const response = await fetch(
//         `${API_URL}?cursor=${cursor}`,
//         {
//             method: 'POST',
//             headers: headers()
//         }
//     );
//     const results = await response.json();
//     return { results, cursor: results.data.data.next_cursor };
// };
export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
        bl_lat: '38.753086',
        bl_lng: '45.247620',
        tr_lat: '41.884969',
        tr_lng: '50.323303',
        limit: '300'
    },
    headers: {
        'X-RapidAPI-Key': '370cae1365msh6cd6ad328d93bdcp193545jsn35ebee6c9df4',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
};

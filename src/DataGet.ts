export default class DataGet {

    public static get() : Promise<Response>{
        return fetch('http://localhost:8080/api/get', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "user_id" : 1,
                    "type" : "プレミアムガチャ",
                })
            }
        )
    }

    public static add(): Promise<Response> {
        return fetch('http://localhost:8080/api/addStone', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "user_id" : 1,
                    "amt" : 3000,
                })
            }
        )
    }
}
## Installation

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/ajiteshrajaus/weather-api.git
cd weather-api
npm i
npm start
```
## Login
**You send:**  Your  login credentials.
**You get:** An `Auth-Token` with which you can make further requests.

**Request:**
```bash
curl -i -H "Content-Type: application/json"  -d "{'userId': 'ajiteshraj'} http://localhost:3000/login
``` 

**Successful Response:**
```json
HTTP/1.1 200 OK
Server: My RESTful API
Content-Type: application/json
Content-Length: xy

{
   "auth-token": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
}
```

### `GET /forecasts/:cityId`
```bash
curl -i "Content-Type: application/json" -H "auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhaml0ZXNocmFqIiwiaWF0IjoxNjE2NTk1MjgxfQ.u0WA7H2ATMfFib2fn4L37SvZHAJuS3ljpwJDPOmpY2E" http://localhost:3000/forecasts/2
``` 

Returns:

* `HTTP 200 Ok` with body:
```js
{
    "currentStats": {
        "temp": "25",
        "feelsLike": "22",
        "humidity": "50%"
    },
    "_id": "605b3a7853e51c1f205294a1",
    "cityId": "2",
    "nextFiveDays": {
        "dayOne": {
            "maxTemp": "24",
            "minTemp": "20"
        },
        "dayTwo": {
            "maxTemp": "22",
            "minTemp": "21"
        },
        "dayThree": {
            "maxTemp": "18",
            "minTemp": "16"
        },
        "dayFour": {
            "maxTemp": "19",
            "minTemp": "16"
        },
        "dayFive": {
            "maxTemp": "25",
            "minTemp": "24"
        }
    },
    "__v": 0
}
```


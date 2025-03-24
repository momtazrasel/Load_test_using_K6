import http from 'k6/http'
import { check, sleep } from 'k6'


export let options = {
    vus: 10,
    duration: "30s",
};

export default function (){
    let res = http.get("https://reqres.in/api/users?page=2");

    check(res,{
        "is status 200": (r) => r.status === 200,
    });

    sleep(1);
}
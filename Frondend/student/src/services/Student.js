import http from '../http-common';

class studentServices {
    create(data) {
        return http.post("/student/insert", data);
    }

    getAll() {
        return http.get("/student/getAll");
    }
}

export default new studentServices();
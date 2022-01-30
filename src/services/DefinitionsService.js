import http from "../http-common";

class DefinitionService {
    getDefinition(mot){
        return http.get(`/${mot}`)
    }
}

export default new DefinitionService();
import { apiClient } from "./ApiClient";

export const executeJwtAuthenticationService
            = (post) => 
                apiClient.post(`/authenticate`,post);
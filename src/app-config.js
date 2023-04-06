let backendHost

const hostname = window && window.location && window.location.hostname

if (hostname === "localhost") {
    backendHost = "http://localhost:8888"
}

backendHost = "http://172.30.217.197:8888"

export const API_BASE_URL = `${backendHost}`

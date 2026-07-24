import { API_BASE_URL } from './config';

const normalizePath = (path) => (path.startsWith('/') ? path : `/${path}`);

export const createApiUrl = (path) => `${API_BASE_URL}${normalizePath(path)}`;

export const requestJson = async (path, options = {}) => {
    const { body, headers, token, ...restOptions } = options;
    const requestHeaders = {
        Accept: 'application/json',
        ...(body ? { 'Content-Type': 'application/json' } : {}),
        ...headers,
    };

    if (token) {
        requestHeaders.Authorization = `Token ${token}`;
    }

    const response = await fetch(createApiUrl(path), {
        ...restOptions,
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    const contentType = response.headers?.get?.('content-type') ?? '';
    return contentType.includes('application/json')
        ? response.json()
        : response.text();
};

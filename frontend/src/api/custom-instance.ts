export const customInstance = async <T>(
    url: string,
    options: RequestInit
): Promise<T> => {

    const headers = new Headers(options.headers);
    headers.set('Content-Type', 'application/json');

    const config = {
        ...options,
        headers,
    };

    const response = await fetch(url, config);

    if (response.status === 204) {
        return {} as T;
    }

    if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody.message || 'An error occurred while fetching the data.');
    }

    return response.json();
};

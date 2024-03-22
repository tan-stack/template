interface ApiOkResult<T> {
    readonly ok: true;
    data: T;
}

interface ApiErrorResult {
    readonly ok: false;
    message?: string;
}

type ApiResult<T = unknown> = ApiOkResult<T> | ApiErrorResult;

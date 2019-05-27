export function validateNotNullOrEmptyString(input) {
    return input!=null && input.toString().trim().length > 0;
}
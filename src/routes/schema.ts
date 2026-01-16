import { pipe, object, integer, minValue, number, maxValue, optional } from 'valibot';

export const schema = object({
    // We wrap the pipe in optional() and provide 1 as the second argument
    id: optional(
        pipe(number(), integer(), minValue(1), maxValue(5000)),
        1000
    )
});
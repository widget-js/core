"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyQuery = exports.parseQuery = void 0;
const encoding_1 = require("./encoding");
const isArray = Array.isArray;
/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams
 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */
function parseQuery(search) {
    const query = {};
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === '' || search === '?')
        return query;
    const hasLeadingIM = search[0] === '?';
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
    for (let i = 0; i < searchParams.length; ++i) {
        // pre decode the + into space
        const searchParam = searchParams[i].replace(encoding_1.PLUS_RE, ' ');
        // allow the = character
        const eqPos = searchParam.indexOf('=');
        const key = (0, encoding_1.decode)(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
        const value = eqPos < 0 ? null : (0, encoding_1.decode)(searchParam.slice(eqPos + 1));
        if (key in query) {
            // an extra variable for ts types
            let currentValue = query[key];
            if (!isArray(currentValue)) {
                currentValue = query[key] = [currentValue];
            }
            // we force the modification
            ;
            currentValue.push(value);
        }
        else {
            query[key] = value;
        }
    }
    return query;
}
exports.parseQuery = parseQuery;
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */
function stringifyQuery(query) {
    let search = '';
    for (let key in query) {
        const value = query[key];
        key = (0, encoding_1.encodeQueryKey)(key);
        if (value == null) {
            // only null adds the value
            if (value !== undefined) {
                search += (search.length ? '&' : '') + key;
            }
            continue;
        }
        // keep null values
        const values = isArray(value)
            ? value.map(v => v && (0, encoding_1.encodeQueryValue)(v))
            : [value && (0, encoding_1.encodeQueryValue)(value)];
        values.forEach(value => {
            // skip undefined values in arrays as if they were not present
            // smaller code than using filter
            if (value !== undefined) {
                // only append & with non-empty search
                search += (search.length ? '&' : '') + key;
                if (value != null)
                    search += '=' + value;
            }
        });
    }
    return search;
}
exports.stringifyQuery = stringifyQuery;

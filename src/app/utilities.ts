export interface ClassMethodParam {
  name: string;
  type: string;
  description?: string;
}

export interface ClassMethod {
  name: string;
  description?: string;
  example?: string;
  params?: ClassMethodParam[];
  returnType?: string;
  returnDescription?: string;
  isGetter?: boolean;
}

export interface ClassConstant {
  name: string;
  description?: string;
  example?: string;
  returnType?: string;
}

export interface Class {
  name: string;
  description?: string;
  children: ClassMethod[];
  constants?: ClassConstant[];
}

export const utilities: Class[] = [
  {
    name: 'Arrays',
    description: 'Defines an abstract class with array utilities.',
    children: [
      {
        name: 'supportedTypedArrays()',
        description: 'Gets the supported typed arrays.',
        returnType: 'Array<string>',
        isGetter: true,
      },
      {
        name: 'addFirst()',
        description: 'Adds the specified item to the beginning of the given array.',
        returnType: 'Array<T>',
        params: [
          {
            name: 'array',
            type: 'Array<T>',
            description: 'Contains some array.',
          },
          {
            name: 'item',
            type: 'any',
            description: 'Contains some array item.',
          },
        ]
      },
      {
        name: 'clone()',
      },
      {
        name: 'contains()',
      },
      {
        name: 'containsAny()',
      },
      {
        name: 'containsNone()',
      },
      {
        name: 'each()',
      },
      {
        name: 'filterOut()',
      },
      {
        name: 'filterTruthy()',
      },
      {
        name: 'first()',
      },
      {
        name: 'insertAt()',
      },
      {
        name: 'intersperse()',
      },
      {
        name: 'isArray()',
      },
      {
        name: 'isArrayBuffer()',
      },
      {
        name: 'isBinary()',
      },
      {
        name: 'isEmpty()',
      },
      {
        name: 'isIdentical()',
      },
      {
        name: 'isNotEmpty()',
      },
      {
        name: 'isSorted()',
      },
      {
        name: 'isTypedArray()',
      },
      {
        name: 'last()',
      },
      {
        name: 'removeAll()',
      },
      {
        name: 'removeAt()',
      },
      {
        name: 'reverse()',
      },
      {
        name: 'shuffle()',
      },
      {
        name: 'sort()',
      },
      {
        name: 'subarray()',
      },
      {
        name: 'sum()',
      },
      {
        name: 'unique()',
      },
    ],
    constants: [
      {
        description: 'Contains an empty array.',
        name: 'EMPTY',
        returnType: 'Array<T>',
      },
      {
        description: 'Contains all the possible typed arrays.',
        name: 'TYPED_ARRAYS',
        returnType: 'Array<string>',
      },
    ],
  },
  {
    name: 'Blobs',
    children: [
      {
        name: 'fromFile()',
      },
      {
        name: 'fromImageData()',
      },
      {
        name: 'fromObjectURL()',
      },
      {
        name: 'isBlob()',
      },
      {
        name: 'toBase64()',
      },
      {
        name: 'toFile()',
      },
      {
        name: 'toImageData()',
      },
      {
        name: 'toObjectURL()',
      },
    ]
  },
  {
    name: 'Chars',
    children: [
      {
        name: 'isAlpha()',
      },
      {
        name: 'isAlphaLower()',
      },
      {
        name: 'isAlphaUpper()',
      },
      {
        name: 'isArabicDigit()',
      },
      {
        name: 'isASCII()',
      },
      {
        name: 'isASCIIControl()',
      },
      {
        name: 'isASCIIPrintable()',
      },
      {
        name: 'isDigit()',
      },
      {
        name: 'isHighSurrogate()',
      },
      {
        name: 'isHinduDigit()',
      },
      {
        name: 'isLetter()',
      },
      {
        name: 'isLetterOrDigit()',
      },
      {
        name: 'isLowerCase()',
      },
      {
        name: 'isLowerRomanDigit()',
      },
      {
        name: 'isLowSurrogate()',
      },
      {
        name: 'isModernDigit()',
      },
      {
        name: 'isPersianDigit()',
      },
      {
        name: 'isSpace()',
      },
      {
        name: 'isSurrogate()',
      },
      {
        name: 'isSurrogatePair()',
      },
      {
        name: 'isUpperRomanDigit()',
      },
      {
        name: 'isUpperCase()',
      },
      {
        name: 'isWhitespace()',
      },
    ]
  },
  {
    name: 'Dates',
    children: [
      {
        name: 'addDays()',
      },
      {
        name: 'addMilliseconds()',
      },
      {
        name: 'addMinutes()',
      },
      {
        name: 'addMonths()',
      },
      {
        name: 'addSeconds()',
      },
      {
        name: 'addWeeks()',
      },
      {
        name: 'addYears()',
      },
      {
        name: 'atStartOfDay()',
      },
      {
        name: 'clone()',
      },
      {
        name: 'compare()',
      },
      {
        name: 'currentWeek()',
      },
      {
        name: 'dateOnly()',
      },
      {
        name: 'daysDifference()',
      },
      {
        name: 'daysOfMonth()',
      },
      {
        name: 'equals()',
      },
      {
        name: 'firstDayOfWeek()',
      },
      {
        name: 'getStdTimezoneOffset()',
      },
      {
        name: 'getUTC()',
      },
      {
        name: 'getWeek()',
      },
      {
        name: 'hoursDifference()',
      },
      {
        name: 'isAfter()',
      },
      {
        name: 'isBefore()',
      },
      {
        name: 'isBetween()',
      },
      {
        name: 'isDateObject()',
      },
      {
        name: 'isDST()',
      },
      {
        name: 'isFuture()',
      },
      {
        name: 'isISOString()',
      },
      {
        name: 'isValid()',
      },
      {
        name: 'millisecondsDifference()',
      },
      {
        name: 'minutesDifference()',
      },
      {
        name: 'monthsDifference()',
      },
      {
        name: 'now()',
      },
      {
        name: 'parse()',
      },
      {
        name: 'removeDays()',
      },
      {
        name: 'removeMilliseconds()',
      },
      {
        name: 'removeMinutes()',
      },
      {
        name: 'removeMonths()',
      },
      {
        name: 'removeSeconds()',
      },
      {
        name: 'removeWeeks()',
      },
      {
        name: 'removeYears()',
      },
      {
        name: 'secondsDifference()',
      },
      {
        name: 'utcNow()',
      },
      {
        name: 'weeksDifference()',
      },
      {
        name: 'yearsDifference()',
      },
      {
        name: 'getTimezoneOffset()',
      },
      {
        name: 'tryParse()',
      },
      {
        name: 'nonNegative()',
      },
    ]
  },
  {
    name: 'Maps',
    children: [
      {
        name: 'isEmpty()',
      },
      {
        name: 'isMap()',
      },
      {
        name: 'isMapIterator()',
      },
      {
        name: 'isNotEmpty()',
      },
      {
        name: 'isWeakMap()',
      },
      {
        name: 'toObject()',
      },
      {
        name: 'toSet()',
      },
    ]
  },
  {
    name: 'Numbers',
    children: [
      {
        name: 'abs()',
      },
      {
        name: 'compare()',
      },
      {
        name: 'isBigInt()',
      },
      {
        name: 'isBigIntObject()',
      },
      {
        name: 'isInteger()',
      },
      {
        name: 'isNatural()',
      },
      {
        name: 'isNotNumber()',
      },
      {
        name: 'isNumber()',
      },
      {
        name: 'isNumberObject()',
      },
      {
        name: 'isPositiveInteger()',
      },
      {
        name: 'isPrime()',
      },
      {
        name: 'pad()',
      },
      {
        name: 'randomInt()',
      },
      {
        name: 'toString()',
      },
    ]
  },
  {
    name: 'Objects',
    children: [
      {
        name: 'deepEquals()',
      },
      {
        name: 'entries()',
      },
      {
        name: 'equals()',
      },
      {
        name: 'fromJson()',
      },
      {
        name: 'getPropertyDescriptors()',
      },
      {
        name: 'hasProperty()',
      },
      {
        name: 'isEmpty()',
      },
      {
        name: 'isNotEmpty()',
      },
      {
        name: 'isNotNull()',
      },
      {
        name: 'isNull()',
      },
      {
        name: 'isObject()',
      },
      {
        name: 'isPlainObject()',
      },
      {
        name: 'omit()',
      },
      {
        name: 'pick()',
      },
      {
        name: 'toIterable()',
      },
      {
        name: 'toJson()',
      },
      {
        name: 'toMap()',
      },
      {
        name: 'toSet()',
      },
      {
        name: 'toString()',
      },
    ]
  },
  {
    name: 'Sets',
    children: [
      {
        name: 'isEmpty()',
      },
      {
        name: 'isNotEmpty()',
      },
      {
        name: 'isSet()',
      },
      {
        name: 'isSetIterator()',
      },
      {
        name: 'isWeakSet()',
      },
      {
        name: 'toMap()',
      },
    ]
  },
  {
    name: 'Strings',
    children: [
      {
        name: 'abbreviate()',
      },
      {
        name: 'appendIfMissing()',
      },
      {
        name: 'chomp()',
      },
      {
        name: 'chop()',
      },
      {
        name: 'compare()',
      },
      {
        name: 'compareIgnoreCase()',
      },
      {
        name: 'contains()',
      },
      {
        name: 'containsAny()',
      },
      {
        name: 'containsIgnoreCase()',
      },
      {
        name: 'containsNone()',
      },
      {
        name: 'countMatches()',
      },
      {
        name: 'decapitalize()',
      },
      {
        name: 'decode()',
      },
      {
        name: 'defaultIfEmpty()',
      },
      {
        name: 'difference()',
      },
      {
        name: 'encode()',
      },
      {
        name: 'endsWith()',
      },
      {
        name: 'endsWithAny()',
      },
      {
        name: 'endsWithIgnoreCase()',
      },
      {
        name: 'endsWithNone()',
      },
      {
        name: 'equals()',
      },
      {
        name: 'equalsIgnoreCase()',
      },
      {
        name: 'equalsAny()',
      },
      {
        name: 'equalsAnyIgnoreCase()',
      },
      {
        name: 'fromBinary()',
      },
      {
        name: 'fromBytesArray()',
      },
      {
        name: 'getBytes()',
      },
      {
        name: 'hashCode()',
      },
      {
        name: 'hasWhitespace()',
      },
      {
        name: 'indexOfAny()',
      },
      {
        name: 'indexOfDifference()',
      },
      {
        name: 'indexOfIgnoreCase()',
      },
      {
        name: 'isAllBlank()',
      },
      {
        name: 'isAlpha()',
      },
      {
        name: 'isAlphanumeric()',
      },
      {
        name: 'isAnyBlank()',
      },
      {
        name: 'isBinary()',
      },
      {
        name: 'isBlank()',
      },
      {
        name: 'isEmpty()',
      },
      {
        name: 'isLowerCase()',
      },
      {
        name: 'isMixedCase()',
      },
      {
        name: 'isNilOrEmpty()',
      },
      {
        name: 'isNilOrWhitespace()',
      },
      {
        name: 'isNotEmpty()',
      },
      {
        name: 'isNullOrEmpty()',
      },
      {
        name: 'isNullOrWhitespace()',
      },
      {
        name: 'isNumeric()',
      },
      {
        name: 'isString()',
      },
      {
        name: 'isStringObject()',
      },
      {
        name: 'isSurrogatePair()',
      },
      {
        name: 'isUpperCase()',
      },
      {
        name: 'isWhitespace()',
      },
      {
        name: 'join()',
      },
      {
        name: 'lastIndexOf()',
      },
      {
        name: 'lastIndexOfIgnoreCase()',
      },
      {
        name: 'left()',
      },
      {
        name: 'longest()',
      },
      {
        name: 'normalize()',
      },
      {
        name: 'prepend()',
      },
      {
        name: 'prependIfMissing()',
      },
      {
        name: 'prependIfMissingIgnoreCase()',
      },
      {
        name: 'random()',
      },
      {
        name: 'remove()',
      },
      {
        name: 'removeEnd()',
      },
      {
        name: 'removeEndIgnoreCase()',
      },
      {
        name: 'removeWhitespace()',
      },
      {
        name: 'repeat()',
      },
      {
        name: 'reverse()',
      },
      {
        name: 'splice()',
      },
      {
        name: 'startsWith()',
      },
      {
        name: 'startsWithAny()',
      },
      {
        name: 'toBinary()',
      },
      {
        name: 'toBytesArray()',
      },
      {
        name: 'toCamelCase()',
      },
      {
        name: 'toCharArray()',
      },
      {
        name: 'toConstantCase()',
      },
      {
        name: 'toKebabCase()',
      },
      {
        name: 'toPascalCase()',
      },
      {
        name: 'toSnakeCase()',
      },
      {
        name: 'toTitleCase()',
      },
      {
        name: 'upperFirst()',
      },
    ]
  },
  {
    name: 'Utils',
    children: [
      {
        name: 'globalThat()',
      },
      {
        name: 'isAsyncFunction()',
      },
      {
        name: 'isBoolean()',
      },
      {
        name: 'isDataView()',
      },
      {
        name: 'isDefined()',
      },
      {
        name: 'isError()',
      },
      {
        name: 'isFalsy()',
      },
      {
        name: 'isFile()',
      },
      {
        name: 'isFormData()',
      },
      {
        name: 'isFunction()',
      },
      {
        name: 'isGeneratorObject()',
      },
      {
        name: 'isNotNil()',
      },
      {
        name: 'isNotNull()',
      },
      {
        name: 'isNotUndefined()',
      },
      {
        name: 'isNull()',
      },
      {
        name: 'isNullOrUndefined()',
      },
      {
        name: 'isPrimitive()',
      },
      {
        name: 'isPromise()',
      },
      {
        name: 'isPromiseLike()',
      },
      {
        name: 'isRegExp()',
      },
      {
        name: 'isSymbol()',
      },
      {
        name: 'isSymbolObject()',
      },
      {
        name: 'isTruthy()',
      },
      {
        name: 'isUndefined()',
      },
      {
        name: 'isWebAssemblyCompiledModule()',
      },
      {
        name: 'isWrappedPrimitive()',
      },
      {
        name: 'uncurry()',
      },
      {
        name: 'uncurry()',
      },
    ]
  },
];

function resolveTake(first: number | undefined, last: number | undefined): number | undefined {
  if (first && last) {
    throw new Error('first and last can\'t be set simultaneously');
  }

  if (first) {
    if (first < 0) {
      throw new Error('first can\'t be negative');
    }
    return first;
  }

  if (last) {
    if (last < 0) {
      throw new Error('last can\'t be negative');
    }

    if (last === 0) {
      return 0;
    }

    return last * -1;
  }

  return undefined;
}

function resolveCursor<WhereUniqueInput>(
  before: WhereUniqueInput | undefined, after: WhereUniqueInput | undefined,
): WhereUniqueInput | undefined {
  if (before && after) {
    throw new Error('before and after can\'t be set simultaneously');
  }

  return before ?? after;
}

function resolveSkip<WhereUniqueInput>(cursor: WhereUniqueInput | undefined) {
  if (cursor) {
    return 1;
  }

  return undefined;
}

interface PaginatedArgs<WhereUniqueInput> {
  before?: WhereUniqueInput,
  after?: WhereUniqueInput,
  first?: number,
  last?: number
}

interface PrismaPaginatedArgs<WhereUniqueInput> {
  cursor?: WhereUniqueInput
  take?: number,
  skip?: number,
}

// eslint-disable-next-line max-len
export function paginationArgsToPrisma<WhereUniqueInput, Args extends PaginatedArgs<WhereUniqueInput>>(
  args: Args,
): PrismaPaginatedArgs<WhereUniqueInput> {
  const {
    first, last, before, after, ...rest
  } = args;

  // If no pagination set, don't touch the args
  if (!first && !last && !before && !after) {
    return rest;
  }

  /**
   * This is currently only possible with js transformation on the result. eg:
   * after: 1, last: 1
   * ({
   *   cursor: { id: $before },
   *   take: Number.MAX_SAFE_INTEGER,
   *   skip: 1
   * }).slice(length - $last, length)
   */
  if (after && last) {
    throw new Error('after and last can\'t be set simultaneously');
  }

  /**
   * This is currently only possible with js transformation on the result. eg:
   * before: 4, first: 1
   * ({
   *   cursor: { id: $before },
   *   take: Number.MIN_SAFE_INTEGER,
   *   skip: 1
   * }).slice(0, $first)
   */
  if (before && first) {
    throw new Error('before and first can\'t be set simultaneously');
  }

  // Edge-case: simulates a single `before` with a hack
  if (before && !first && !last && !after) {
    return {
      cursor: before,
      skip: 1,
      take: Number.MIN_SAFE_INTEGER,
      ...rest,
    };
  }

  const take = resolveTake(first, last);
  const cursor = resolveCursor(before, after);
  const skip = resolveSkip(cursor);

  return {
    take,
    cursor,
    skip,
    ...rest,
  };
}

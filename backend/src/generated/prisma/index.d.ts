/**
 * Client
 **/

import * as runtime from "./runtime/client.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model agent
 *
 */
export type agent = $Result.DefaultSelection<Prisma.$agentPayload>;
/**
 * Model farmer
 *
 */
export type farmer = $Result.DefaultSelection<Prisma.$farmerPayload>;
/**
 * Model plot
 *
 */
export type plot = $Result.DefaultSelection<Prisma.$plotPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agents
 * const agents = await prisma.agent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agents
   * const agents = await prisma.agent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **agent** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Agents
   * const agents = await prisma.agent.findMany()
   * ```
   */
  get agent(): Prisma.agentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farmer`: Exposes CRUD operations for the **farmer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Farmers
   * const farmers = await prisma.farmer.findMany()
   * ```
   */
  get farmer(): Prisma.farmerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plot`: Exposes CRUD operations for the **plot** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Plots
   * const plots = await prisma.plot.findMany()
   * ```
   */
  get plot(): Prisma.plotDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    agent: "agent";
    farmer: "farmer";
    plot: "plot";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: "agent" | "farmer" | "plot";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      agent: {
        payload: Prisma.$agentPayload<ExtArgs>;
        fields: Prisma.agentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.agentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.agentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agentPayload>;
          };
          findFirst: {
            args: Prisma.agentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.agentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agentPayload>;
          };
          findMany: {
            args: Prisma.agentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agentPayload>[];
          };
          create: {
            args: Prisma.agentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agentPayload>;
          };
          createMany: {
            args: Prisma.agentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.agentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agentPayload>[];
          };
          delete: {
            args: Prisma.agentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agentPayload>;
          };
          update: {
            args: Prisma.agentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agentPayload>;
          };
          deleteMany: {
            args: Prisma.agentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.agentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.agentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agentPayload>[];
          };
          upsert: {
            args: Prisma.agentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agentPayload>;
          };
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAgent>;
          };
          groupBy: {
            args: Prisma.agentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AgentGroupByOutputType>[];
          };
          count: {
            args: Prisma.agentCountArgs<ExtArgs>;
            result: $Utils.Optional<AgentCountAggregateOutputType> | number;
          };
        };
      };
      farmer: {
        payload: Prisma.$farmerPayload<ExtArgs>;
        fields: Prisma.farmerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.farmerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$farmerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.farmerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>;
          };
          findFirst: {
            args: Prisma.farmerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$farmerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.farmerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>;
          };
          findMany: {
            args: Prisma.farmerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>[];
          };
          create: {
            args: Prisma.farmerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>;
          };
          createMany: {
            args: Prisma.farmerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.farmerCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>[];
          };
          delete: {
            args: Prisma.farmerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>;
          };
          update: {
            args: Prisma.farmerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>;
          };
          deleteMany: {
            args: Prisma.farmerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.farmerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.farmerUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>[];
          };
          upsert: {
            args: Prisma.farmerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>;
          };
          aggregate: {
            args: Prisma.FarmerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFarmer>;
          };
          groupBy: {
            args: Prisma.farmerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FarmerGroupByOutputType>[];
          };
          count: {
            args: Prisma.farmerCountArgs<ExtArgs>;
            result: $Utils.Optional<FarmerCountAggregateOutputType> | number;
          };
        };
      };
      plot: {
        payload: Prisma.$plotPayload<ExtArgs>;
        fields: Prisma.plotFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.plotFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$plotPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.plotFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$plotPayload>;
          };
          findFirst: {
            args: Prisma.plotFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$plotPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.plotFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$plotPayload>;
          };
          findMany: {
            args: Prisma.plotFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$plotPayload>[];
          };
          create: {
            args: Prisma.plotCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$plotPayload>;
          };
          createMany: {
            args: Prisma.plotCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.plotCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$plotPayload>[];
          };
          delete: {
            args: Prisma.plotDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$plotPayload>;
          };
          update: {
            args: Prisma.plotUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$plotPayload>;
          };
          deleteMany: {
            args: Prisma.plotDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.plotUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.plotUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$plotPayload>[];
          };
          upsert: {
            args: Prisma.plotUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$plotPayload>;
          };
          aggregate: {
            args: Prisma.PlotAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePlot>;
          };
          groupBy: {
            args: Prisma.plotGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PlotGroupByOutputType>[];
          };
          count: {
            args: Prisma.plotCountArgs<ExtArgs>;
            result: $Utils.Optional<PlotCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    agent?: agentOmit;
    farmer?: farmerOmit;
    plot?: plotOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    farmers: number;
  };

  export type AgentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    farmers?: boolean | AgentCountOutputTypeCountFarmersArgs;
  };

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountFarmersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: farmerWhereInput;
  };

  /**
   * Count Type FarmerCountOutputType
   */

  export type FarmerCountOutputType = {
    plots: number;
  };

  export type FarmerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plots?: boolean | FarmerCountOutputTypeCountPlotsArgs;
  };

  // Custom InputTypes
  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FarmerCountOutputType
     */
    select?: FarmerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeCountPlotsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: plotWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null;
    _avg: AgentAvgAggregateOutputType | null;
    _sum: AgentSumAggregateOutputType | null;
    _min: AgentMinAggregateOutputType | null;
    _max: AgentMaxAggregateOutputType | null;
  };

  export type AgentAvgAggregateOutputType = {
    agentId: number | null;
  };

  export type AgentSumAggregateOutputType = {
    agentId: number | null;
  };

  export type AgentMinAggregateOutputType = {
    agentId: number | null;
    agentName: string | null;
    agentEmail: string | null;
    agentPass: string | null;
    agentPic: string | null;
  };

  export type AgentMaxAggregateOutputType = {
    agentId: number | null;
    agentName: string | null;
    agentEmail: string | null;
    agentPass: string | null;
    agentPic: string | null;
  };

  export type AgentCountAggregateOutputType = {
    agentId: number;
    agentName: number;
    agentEmail: number;
    agentPass: number;
    agentPic: number;
    _all: number;
  };

  export type AgentAvgAggregateInputType = {
    agentId?: true;
  };

  export type AgentSumAggregateInputType = {
    agentId?: true;
  };

  export type AgentMinAggregateInputType = {
    agentId?: true;
    agentName?: true;
    agentEmail?: true;
    agentPass?: true;
    agentPic?: true;
  };

  export type AgentMaxAggregateInputType = {
    agentId?: true;
    agentName?: true;
    agentEmail?: true;
    agentPass?: true;
    agentPic?: true;
  };

  export type AgentCountAggregateInputType = {
    agentId?: true;
    agentName?: true;
    agentEmail?: true;
    agentPass?: true;
    agentPic?: true;
    _all?: true;
  };

  export type AgentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which agent to aggregate.
     */
    where?: agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agents to fetch.
     */
    orderBy?: agentOrderByWithRelationInput | agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned agents
     **/
    _count?: true | AgentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AgentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AgentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AgentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AgentMaxAggregateInputType;
  };

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
    [P in keyof T & keyof AggregateAgent]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>;
  };

  export type agentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: agentWhereInput;
    orderBy?:
      | agentOrderByWithAggregationInput
      | agentOrderByWithAggregationInput[];
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum;
    having?: agentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AgentCountAggregateInputType | true;
    _avg?: AgentAvgAggregateInputType;
    _sum?: AgentSumAggregateInputType;
    _min?: AgentMinAggregateInputType;
    _max?: AgentMaxAggregateInputType;
  };

  export type AgentGroupByOutputType = {
    agentId: number;
    agentName: string;
    agentEmail: string;
    agentPass: string;
    agentPic: string;
    _count: AgentCountAggregateOutputType | null;
    _avg: AgentAvgAggregateOutputType | null;
    _sum: AgentSumAggregateOutputType | null;
    _min: AgentMinAggregateOutputType | null;
    _max: AgentMaxAggregateOutputType | null;
  };

  type GetAgentGroupByPayload<T extends agentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AgentGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AgentGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>;
        }
      >
    >;

  export type agentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      agentId?: boolean;
      agentName?: boolean;
      agentEmail?: boolean;
      agentPass?: boolean;
      agentPic?: boolean;
      farmers?: boolean | agent$farmersArgs<ExtArgs>;
      _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["agent"]
  >;

  export type agentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      agentId?: boolean;
      agentName?: boolean;
      agentEmail?: boolean;
      agentPass?: boolean;
      agentPic?: boolean;
    },
    ExtArgs["result"]["agent"]
  >;

  export type agentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      agentId?: boolean;
      agentName?: boolean;
      agentEmail?: boolean;
      agentPass?: boolean;
      agentPic?: boolean;
    },
    ExtArgs["result"]["agent"]
  >;

  export type agentSelectScalar = {
    agentId?: boolean;
    agentName?: boolean;
    agentEmail?: boolean;
    agentPass?: boolean;
    agentPic?: boolean;
  };

  export type agentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "agentId" | "agentName" | "agentEmail" | "agentPass" | "agentPic",
    ExtArgs["result"]["agent"]
  >;
  export type agentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    farmers?: boolean | agent$farmersArgs<ExtArgs>;
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type agentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type agentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $agentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "agent";
    objects: {
      farmers: Prisma.$farmerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        agentId: number;
        agentName: string;
        agentEmail: string;
        agentPass: string;
        agentPic: string;
      },
      ExtArgs["result"]["agent"]
    >;
    composites: {};
  };

  type agentGetPayload<
    S extends boolean | null | undefined | agentDefaultArgs,
  > = $Result.GetResult<Prisma.$agentPayload, S>;

  type agentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<agentFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AgentCountAggregateInputType | true;
  };

  export interface agentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["agent"];
      meta: { name: "agent" };
    };
    /**
     * Find zero or one Agent that matches the filter.
     * @param {agentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agentFindUniqueArgs>(
      args: SelectSubset<T, agentFindUniqueArgs<ExtArgs>>,
    ): Prisma__agentClient<
      $Result.GetResult<
        Prisma.$agentPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, agentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__agentClient<
      $Result.GetResult<
        Prisma.$agentPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agentFindFirstArgs>(
      args?: SelectSubset<T, agentFindFirstArgs<ExtArgs>>,
    ): Prisma__agentClient<
      $Result.GetResult<
        Prisma.$agentPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, agentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__agentClient<
      $Result.GetResult<
        Prisma.$agentPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     *
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     *
     * // Only select the `agentId`
     * const agentWithAgentIdOnly = await prisma.agent.findMany({ select: { agentId: true } })
     *
     */
    findMany<T extends agentFindManyArgs>(
      args?: SelectSubset<T, agentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$agentPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Agent.
     * @param {agentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     *
     */
    create<T extends agentCreateArgs>(
      args: SelectSubset<T, agentCreateArgs<ExtArgs>>,
    ): Prisma__agentClient<
      $Result.GetResult<
        Prisma.$agentPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Agents.
     * @param {agentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends agentCreateManyArgs>(
      args?: SelectSubset<T, agentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {agentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Agents and only return the `agentId`
     * const agentWithAgentIdOnly = await prisma.agent.createManyAndReturn({
     *   select: { agentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends agentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, agentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$agentPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Agent.
     * @param {agentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     *
     */
    delete<T extends agentDeleteArgs>(
      args: SelectSubset<T, agentDeleteArgs<ExtArgs>>,
    ): Prisma__agentClient<
      $Result.GetResult<
        Prisma.$agentPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Agent.
     * @param {agentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends agentUpdateArgs>(
      args: SelectSubset<T, agentUpdateArgs<ExtArgs>>,
    ): Prisma__agentClient<
      $Result.GetResult<
        Prisma.$agentPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Agents.
     * @param {agentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends agentDeleteManyArgs>(
      args?: SelectSubset<T, agentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends agentUpdateManyArgs>(
      args: SelectSubset<T, agentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {agentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Agents and only return the `agentId`
     * const agentWithAgentIdOnly = await prisma.agent.updateManyAndReturn({
     *   select: { agentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends agentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, agentUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$agentPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Agent.
     * @param {agentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends agentUpsertArgs>(
      args: SelectSubset<T, agentUpsertArgs<ExtArgs>>,
    ): Prisma__agentClient<
      $Result.GetResult<
        Prisma.$agentPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
     **/
    count<T extends agentCountArgs>(
      args?: Subset<T, agentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AgentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AgentAggregateArgs>(
      args: Subset<T, AgentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAgentAggregateType<T>>;

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends agentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agentGroupByArgs["orderBy"] }
        : { orderBy?: agentGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, agentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAgentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the agent model
     */
    readonly fields: agentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    farmers<T extends agent$farmersArgs<ExtArgs> = {}>(
      args?: Subset<T, agent$farmersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$farmerPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the agent model
   */
  interface agentFieldRefs {
    readonly agentId: FieldRef<"agent", "Int">;
    readonly agentName: FieldRef<"agent", "String">;
    readonly agentEmail: FieldRef<"agent", "String">;
    readonly agentPass: FieldRef<"agent", "String">;
    readonly agentPic: FieldRef<"agent", "String">;
  }

  // Custom InputTypes
  /**
   * agent findUnique
   */
  export type agentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agentInclude<ExtArgs> | null;
    /**
     * Filter, which agent to fetch.
     */
    where: agentWhereUniqueInput;
  };

  /**
   * agent findUniqueOrThrow
   */
  export type agentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agentInclude<ExtArgs> | null;
    /**
     * Filter, which agent to fetch.
     */
    where: agentWhereUniqueInput;
  };

  /**
   * agent findFirst
   */
  export type agentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agentInclude<ExtArgs> | null;
    /**
     * Filter, which agent to fetch.
     */
    where?: agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agents to fetch.
     */
    orderBy?: agentOrderByWithRelationInput | agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agents.
     */
    cursor?: agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[];
  };

  /**
   * agent findFirstOrThrow
   */
  export type agentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agentInclude<ExtArgs> | null;
    /**
     * Filter, which agent to fetch.
     */
    where?: agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agents to fetch.
     */
    orderBy?: agentOrderByWithRelationInput | agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agents.
     */
    cursor?: agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[];
  };

  /**
   * agent findMany
   */
  export type agentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agentInclude<ExtArgs> | null;
    /**
     * Filter, which agents to fetch.
     */
    where?: agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agents to fetch.
     */
    orderBy?: agentOrderByWithRelationInput | agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing agents.
     */
    cursor?: agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agents.
     */
    skip?: number;
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[];
  };

  /**
   * agent create
   */
  export type agentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agentInclude<ExtArgs> | null;
    /**
     * The data needed to create a agent.
     */
    data: XOR<agentCreateInput, agentUncheckedCreateInput>;
  };

  /**
   * agent createMany
   */
  export type agentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many agents.
     */
    data: agentCreateManyInput | agentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * agent createManyAndReturn
   */
  export type agentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * The data used to create many agents.
     */
    data: agentCreateManyInput | agentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * agent update
   */
  export type agentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agentInclude<ExtArgs> | null;
    /**
     * The data needed to update a agent.
     */
    data: XOR<agentUpdateInput, agentUncheckedUpdateInput>;
    /**
     * Choose, which agent to update.
     */
    where: agentWhereUniqueInput;
  };

  /**
   * agent updateMany
   */
  export type agentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update agents.
     */
    data: XOR<agentUpdateManyMutationInput, agentUncheckedUpdateManyInput>;
    /**
     * Filter which agents to update
     */
    where?: agentWhereInput;
    /**
     * Limit how many agents to update.
     */
    limit?: number;
  };

  /**
   * agent updateManyAndReturn
   */
  export type agentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * The data used to update agents.
     */
    data: XOR<agentUpdateManyMutationInput, agentUncheckedUpdateManyInput>;
    /**
     * Filter which agents to update
     */
    where?: agentWhereInput;
    /**
     * Limit how many agents to update.
     */
    limit?: number;
  };

  /**
   * agent upsert
   */
  export type agentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agentInclude<ExtArgs> | null;
    /**
     * The filter to search for the agent to update in case it exists.
     */
    where: agentWhereUniqueInput;
    /**
     * In case the agent found by the `where` argument doesn't exist, create a new agent with this data.
     */
    create: XOR<agentCreateInput, agentUncheckedCreateInput>;
    /**
     * In case the agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agentUpdateInput, agentUncheckedUpdateInput>;
  };

  /**
   * agent delete
   */
  export type agentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agentInclude<ExtArgs> | null;
    /**
     * Filter which agent to delete.
     */
    where: agentWhereUniqueInput;
  };

  /**
   * agent deleteMany
   */
  export type agentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which agents to delete
     */
    where?: agentWhereInput;
    /**
     * Limit how many agents to delete.
     */
    limit?: number;
  };

  /**
   * agent.farmers
   */
  export type agent$farmersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null;
    where?: farmerWhereInput;
    orderBy?: farmerOrderByWithRelationInput | farmerOrderByWithRelationInput[];
    cursor?: farmerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[];
  };

  /**
   * agent without action
   */
  export type agentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent
     */
    select?: agentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agent
     */
    omit?: agentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agentInclude<ExtArgs> | null;
  };

  /**
   * Model farmer
   */

  export type AggregateFarmer = {
    _count: FarmerCountAggregateOutputType | null;
    _avg: FarmerAvgAggregateOutputType | null;
    _sum: FarmerSumAggregateOutputType | null;
    _min: FarmerMinAggregateOutputType | null;
    _max: FarmerMaxAggregateOutputType | null;
  };

  export type FarmerAvgAggregateOutputType = {
    farmerId: number | null;
    agentId: number | null;
  };

  export type FarmerSumAggregateOutputType = {
    farmerId: number | null;
    agentId: number | null;
  };

  export type FarmerMinAggregateOutputType = {
    farmerId: number | null;
    farmerName: string | null;
    farmerFather: string | null;
    farmerPic: string | null;
    address: string | null;
    phone: string | null;
    agentId: number | null;
  };

  export type FarmerMaxAggregateOutputType = {
    farmerId: number | null;
    farmerName: string | null;
    farmerFather: string | null;
    farmerPic: string | null;
    address: string | null;
    phone: string | null;
    agentId: number | null;
  };

  export type FarmerCountAggregateOutputType = {
    farmerId: number;
    farmerName: number;
    farmerFather: number;
    farmerPic: number;
    address: number;
    phone: number;
    agentId: number;
    _all: number;
  };

  export type FarmerAvgAggregateInputType = {
    farmerId?: true;
    agentId?: true;
  };

  export type FarmerSumAggregateInputType = {
    farmerId?: true;
    agentId?: true;
  };

  export type FarmerMinAggregateInputType = {
    farmerId?: true;
    farmerName?: true;
    farmerFather?: true;
    farmerPic?: true;
    address?: true;
    phone?: true;
    agentId?: true;
  };

  export type FarmerMaxAggregateInputType = {
    farmerId?: true;
    farmerName?: true;
    farmerFather?: true;
    farmerPic?: true;
    address?: true;
    phone?: true;
    agentId?: true;
  };

  export type FarmerCountAggregateInputType = {
    farmerId?: true;
    farmerName?: true;
    farmerFather?: true;
    farmerPic?: true;
    address?: true;
    phone?: true;
    agentId?: true;
    _all?: true;
  };

  export type FarmerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which farmer to aggregate.
     */
    where?: farmerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmerOrderByWithRelationInput | farmerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: farmerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` farmers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned farmers
     **/
    _count?: true | FarmerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FarmerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FarmerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FarmerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FarmerMaxAggregateInputType;
  };

  export type GetFarmerAggregateType<T extends FarmerAggregateArgs> = {
    [P in keyof T & keyof AggregateFarmer]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmer[P]>
      : GetScalarType<T[P], AggregateFarmer[P]>;
  };

  export type farmerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: farmerWhereInput;
    orderBy?:
      | farmerOrderByWithAggregationInput
      | farmerOrderByWithAggregationInput[];
    by: FarmerScalarFieldEnum[] | FarmerScalarFieldEnum;
    having?: farmerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FarmerCountAggregateInputType | true;
    _avg?: FarmerAvgAggregateInputType;
    _sum?: FarmerSumAggregateInputType;
    _min?: FarmerMinAggregateInputType;
    _max?: FarmerMaxAggregateInputType;
  };

  export type FarmerGroupByOutputType = {
    farmerId: number;
    farmerName: string;
    farmerFather: string;
    farmerPic: string;
    address: string;
    phone: string;
    agentId: number;
    _count: FarmerCountAggregateOutputType | null;
    _avg: FarmerAvgAggregateOutputType | null;
    _sum: FarmerSumAggregateOutputType | null;
    _min: FarmerMinAggregateOutputType | null;
    _max: FarmerMaxAggregateOutputType | null;
  };

  type GetFarmerGroupByPayload<T extends farmerGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FarmerGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof FarmerGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmerGroupByOutputType[P]>
            : GetScalarType<T[P], FarmerGroupByOutputType[P]>;
        }
      >
    >;

  export type farmerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      farmerId?: boolean;
      farmerName?: boolean;
      farmerFather?: boolean;
      farmerPic?: boolean;
      address?: boolean;
      phone?: boolean;
      agentId?: boolean;
      aaid?: boolean | agentDefaultArgs<ExtArgs>;
      plots?: boolean | farmer$plotsArgs<ExtArgs>;
      _count?: boolean | FarmerCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["farmer"]
  >;

  export type farmerSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      farmerId?: boolean;
      farmerName?: boolean;
      farmerFather?: boolean;
      farmerPic?: boolean;
      address?: boolean;
      phone?: boolean;
      agentId?: boolean;
      aaid?: boolean | agentDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["farmer"]
  >;

  export type farmerSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      farmerId?: boolean;
      farmerName?: boolean;
      farmerFather?: boolean;
      farmerPic?: boolean;
      address?: boolean;
      phone?: boolean;
      agentId?: boolean;
      aaid?: boolean | agentDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["farmer"]
  >;

  export type farmerSelectScalar = {
    farmerId?: boolean;
    farmerName?: boolean;
    farmerFather?: boolean;
    farmerPic?: boolean;
    address?: boolean;
    phone?: boolean;
    agentId?: boolean;
  };

  export type farmerOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "farmerId"
    | "farmerName"
    | "farmerFather"
    | "farmerPic"
    | "address"
    | "phone"
    | "agentId",
    ExtArgs["result"]["farmer"]
  >;
  export type farmerInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    aaid?: boolean | agentDefaultArgs<ExtArgs>;
    plots?: boolean | farmer$plotsArgs<ExtArgs>;
    _count?: boolean | FarmerCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type farmerIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    aaid?: boolean | agentDefaultArgs<ExtArgs>;
  };
  export type farmerIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    aaid?: boolean | agentDefaultArgs<ExtArgs>;
  };

  export type $farmerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "farmer";
    objects: {
      aaid: Prisma.$agentPayload<ExtArgs>;
      plots: Prisma.$plotPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        farmerId: number;
        farmerName: string;
        farmerFather: string;
        farmerPic: string;
        address: string;
        phone: string;
        agentId: number;
      },
      ExtArgs["result"]["farmer"]
    >;
    composites: {};
  };

  type farmerGetPayload<
    S extends boolean | null | undefined | farmerDefaultArgs,
  > = $Result.GetResult<Prisma.$farmerPayload, S>;

  type farmerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<farmerFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: FarmerCountAggregateInputType | true;
  };

  export interface farmerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["farmer"];
      meta: { name: "farmer" };
    };
    /**
     * Find zero or one Farmer that matches the filter.
     * @param {farmerFindUniqueArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends farmerFindUniqueArgs>(
      args: SelectSubset<T, farmerFindUniqueArgs<ExtArgs>>,
    ): Prisma__farmerClient<
      $Result.GetResult<
        Prisma.$farmerPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Farmer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {farmerFindUniqueOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends farmerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, farmerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__farmerClient<
      $Result.GetResult<
        Prisma.$farmerPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Farmer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerFindFirstArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends farmerFindFirstArgs>(
      args?: SelectSubset<T, farmerFindFirstArgs<ExtArgs>>,
    ): Prisma__farmerClient<
      $Result.GetResult<
        Prisma.$farmerPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Farmer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerFindFirstOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends farmerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, farmerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__farmerClient<
      $Result.GetResult<
        Prisma.$farmerPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Farmers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farmers
     * const farmers = await prisma.farmer.findMany()
     *
     * // Get first 10 Farmers
     * const farmers = await prisma.farmer.findMany({ take: 10 })
     *
     * // Only select the `farmerId`
     * const farmerWithFarmerIdOnly = await prisma.farmer.findMany({ select: { farmerId: true } })
     *
     */
    findMany<T extends farmerFindManyArgs>(
      args?: SelectSubset<T, farmerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$farmerPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Farmer.
     * @param {farmerCreateArgs} args - Arguments to create a Farmer.
     * @example
     * // Create one Farmer
     * const Farmer = await prisma.farmer.create({
     *   data: {
     *     // ... data to create a Farmer
     *   }
     * })
     *
     */
    create<T extends farmerCreateArgs>(
      args: SelectSubset<T, farmerCreateArgs<ExtArgs>>,
    ): Prisma__farmerClient<
      $Result.GetResult<
        Prisma.$farmerPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Farmers.
     * @param {farmerCreateManyArgs} args - Arguments to create many Farmers.
     * @example
     * // Create many Farmers
     * const farmer = await prisma.farmer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends farmerCreateManyArgs>(
      args?: SelectSubset<T, farmerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Farmers and returns the data saved in the database.
     * @param {farmerCreateManyAndReturnArgs} args - Arguments to create many Farmers.
     * @example
     * // Create many Farmers
     * const farmer = await prisma.farmer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Farmers and only return the `farmerId`
     * const farmerWithFarmerIdOnly = await prisma.farmer.createManyAndReturn({
     *   select: { farmerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends farmerCreateManyAndReturnArgs>(
      args?: SelectSubset<T, farmerCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$farmerPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Farmer.
     * @param {farmerDeleteArgs} args - Arguments to delete one Farmer.
     * @example
     * // Delete one Farmer
     * const Farmer = await prisma.farmer.delete({
     *   where: {
     *     // ... filter to delete one Farmer
     *   }
     * })
     *
     */
    delete<T extends farmerDeleteArgs>(
      args: SelectSubset<T, farmerDeleteArgs<ExtArgs>>,
    ): Prisma__farmerClient<
      $Result.GetResult<
        Prisma.$farmerPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Farmer.
     * @param {farmerUpdateArgs} args - Arguments to update one Farmer.
     * @example
     * // Update one Farmer
     * const farmer = await prisma.farmer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends farmerUpdateArgs>(
      args: SelectSubset<T, farmerUpdateArgs<ExtArgs>>,
    ): Prisma__farmerClient<
      $Result.GetResult<
        Prisma.$farmerPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Farmers.
     * @param {farmerDeleteManyArgs} args - Arguments to filter Farmers to delete.
     * @example
     * // Delete a few Farmers
     * const { count } = await prisma.farmer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends farmerDeleteManyArgs>(
      args?: SelectSubset<T, farmerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farmers
     * const farmer = await prisma.farmer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends farmerUpdateManyArgs>(
      args: SelectSubset<T, farmerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Farmers and returns the data updated in the database.
     * @param {farmerUpdateManyAndReturnArgs} args - Arguments to update many Farmers.
     * @example
     * // Update many Farmers
     * const farmer = await prisma.farmer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Farmers and only return the `farmerId`
     * const farmerWithFarmerIdOnly = await prisma.farmer.updateManyAndReturn({
     *   select: { farmerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends farmerUpdateManyAndReturnArgs>(
      args: SelectSubset<T, farmerUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$farmerPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Farmer.
     * @param {farmerUpsertArgs} args - Arguments to update or create a Farmer.
     * @example
     * // Update or create a Farmer
     * const farmer = await prisma.farmer.upsert({
     *   create: {
     *     // ... data to create a Farmer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farmer we want to update
     *   }
     * })
     */
    upsert<T extends farmerUpsertArgs>(
      args: SelectSubset<T, farmerUpsertArgs<ExtArgs>>,
    ): Prisma__farmerClient<
      $Result.GetResult<
        Prisma.$farmerPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerCountArgs} args - Arguments to filter Farmers to count.
     * @example
     * // Count the number of Farmers
     * const count = await prisma.farmer.count({
     *   where: {
     *     // ... the filter for the Farmers we want to count
     *   }
     * })
     **/
    count<T extends farmerCountArgs>(
      args?: Subset<T, farmerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], FarmerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FarmerAggregateArgs>(
      args: Subset<T, FarmerAggregateArgs>,
    ): Prisma.PrismaPromise<GetFarmerAggregateType<T>>;

    /**
     * Group by Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends farmerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: farmerGroupByArgs["orderBy"] }
        : { orderBy?: farmerGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, farmerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetFarmerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the farmer model
     */
    readonly fields: farmerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for farmer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__farmerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    aaid<T extends agentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, agentDefaultArgs<ExtArgs>>,
    ): Prisma__agentClient<
      | $Result.GetResult<
          Prisma.$agentPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    plots<T extends farmer$plotsArgs<ExtArgs> = {}>(
      args?: Subset<T, farmer$plotsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$plotPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the farmer model
   */
  interface farmerFieldRefs {
    readonly farmerId: FieldRef<"farmer", "Int">;
    readonly farmerName: FieldRef<"farmer", "String">;
    readonly farmerFather: FieldRef<"farmer", "String">;
    readonly farmerPic: FieldRef<"farmer", "String">;
    readonly address: FieldRef<"farmer", "String">;
    readonly phone: FieldRef<"farmer", "String">;
    readonly agentId: FieldRef<"farmer", "Int">;
  }

  // Custom InputTypes
  /**
   * farmer findUnique
   */
  export type farmerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null;
    /**
     * Filter, which farmer to fetch.
     */
    where: farmerWhereUniqueInput;
  };

  /**
   * farmer findUniqueOrThrow
   */
  export type farmerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null;
    /**
     * Filter, which farmer to fetch.
     */
    where: farmerWhereUniqueInput;
  };

  /**
   * farmer findFirst
   */
  export type farmerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null;
    /**
     * Filter, which farmer to fetch.
     */
    where?: farmerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmerOrderByWithRelationInput | farmerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for farmers.
     */
    cursor?: farmerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` farmers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of farmers.
     */
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[];
  };

  /**
   * farmer findFirstOrThrow
   */
  export type farmerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null;
    /**
     * Filter, which farmer to fetch.
     */
    where?: farmerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmerOrderByWithRelationInput | farmerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for farmers.
     */
    cursor?: farmerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` farmers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of farmers.
     */
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[];
  };

  /**
   * farmer findMany
   */
  export type farmerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null;
    /**
     * Filter, which farmers to fetch.
     */
    where?: farmerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmerOrderByWithRelationInput | farmerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing farmers.
     */
    cursor?: farmerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` farmers.
     */
    skip?: number;
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[];
  };

  /**
   * farmer create
   */
  export type farmerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null;
    /**
     * The data needed to create a farmer.
     */
    data: XOR<farmerCreateInput, farmerUncheckedCreateInput>;
  };

  /**
   * farmer createMany
   */
  export type farmerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many farmers.
     */
    data: farmerCreateManyInput | farmerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * farmer createManyAndReturn
   */
  export type farmerCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * The data used to create many farmers.
     */
    data: farmerCreateManyInput | farmerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * farmer update
   */
  export type farmerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null;
    /**
     * The data needed to update a farmer.
     */
    data: XOR<farmerUpdateInput, farmerUncheckedUpdateInput>;
    /**
     * Choose, which farmer to update.
     */
    where: farmerWhereUniqueInput;
  };

  /**
   * farmer updateMany
   */
  export type farmerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update farmers.
     */
    data: XOR<farmerUpdateManyMutationInput, farmerUncheckedUpdateManyInput>;
    /**
     * Filter which farmers to update
     */
    where?: farmerWhereInput;
    /**
     * Limit how many farmers to update.
     */
    limit?: number;
  };

  /**
   * farmer updateManyAndReturn
   */
  export type farmerUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * The data used to update farmers.
     */
    data: XOR<farmerUpdateManyMutationInput, farmerUncheckedUpdateManyInput>;
    /**
     * Filter which farmers to update
     */
    where?: farmerWhereInput;
    /**
     * Limit how many farmers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * farmer upsert
   */
  export type farmerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null;
    /**
     * The filter to search for the farmer to update in case it exists.
     */
    where: farmerWhereUniqueInput;
    /**
     * In case the farmer found by the `where` argument doesn't exist, create a new farmer with this data.
     */
    create: XOR<farmerCreateInput, farmerUncheckedCreateInput>;
    /**
     * In case the farmer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<farmerUpdateInput, farmerUncheckedUpdateInput>;
  };

  /**
   * farmer delete
   */
  export type farmerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null;
    /**
     * Filter which farmer to delete.
     */
    where: farmerWhereUniqueInput;
  };

  /**
   * farmer deleteMany
   */
  export type farmerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which farmers to delete
     */
    where?: farmerWhereInput;
    /**
     * Limit how many farmers to delete.
     */
    limit?: number;
  };

  /**
   * farmer.plots
   */
  export type farmer$plotsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotInclude<ExtArgs> | null;
    where?: plotWhereInput;
    orderBy?: plotOrderByWithRelationInput | plotOrderByWithRelationInput[];
    cursor?: plotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PlotScalarFieldEnum | PlotScalarFieldEnum[];
  };

  /**
   * farmer without action
   */
  export type farmerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null;
  };

  /**
   * Model plot
   */

  export type AggregatePlot = {
    _count: PlotCountAggregateOutputType | null;
    _avg: PlotAvgAggregateOutputType | null;
    _sum: PlotSumAggregateOutputType | null;
    _min: PlotMinAggregateOutputType | null;
    _max: PlotMaxAggregateOutputType | null;
  };

  export type PlotAvgAggregateOutputType = {
    plotId: number | null;
    farmerId: number | null;
  };

  export type PlotSumAggregateOutputType = {
    plotId: number | null;
    farmerId: number | null;
  };

  export type PlotMinAggregateOutputType = {
    plotId: number | null;
    farmerId: number | null;
    crop: string | null;
    address: string | null;
    location: string | null;
    plotImage: string | null;
  };

  export type PlotMaxAggregateOutputType = {
    plotId: number | null;
    farmerId: number | null;
    crop: string | null;
    address: string | null;
    location: string | null;
    plotImage: string | null;
  };

  export type PlotCountAggregateOutputType = {
    plotId: number;
    farmerId: number;
    plotCords: number;
    crop: number;
    address: number;
    location: number;
    plotImage: number;
    _all: number;
  };

  export type PlotAvgAggregateInputType = {
    plotId?: true;
    farmerId?: true;
  };

  export type PlotSumAggregateInputType = {
    plotId?: true;
    farmerId?: true;
  };

  export type PlotMinAggregateInputType = {
    plotId?: true;
    farmerId?: true;
    crop?: true;
    address?: true;
    location?: true;
    plotImage?: true;
  };

  export type PlotMaxAggregateInputType = {
    plotId?: true;
    farmerId?: true;
    crop?: true;
    address?: true;
    location?: true;
    plotImage?: true;
  };

  export type PlotCountAggregateInputType = {
    plotId?: true;
    farmerId?: true;
    plotCords?: true;
    crop?: true;
    address?: true;
    location?: true;
    plotImage?: true;
    _all?: true;
  };

  export type PlotAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which plot to aggregate.
     */
    where?: plotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of plots to fetch.
     */
    orderBy?: plotOrderByWithRelationInput | plotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: plotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` plots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` plots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned plots
     **/
    _count?: true | PlotCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PlotAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PlotSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PlotMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PlotMaxAggregateInputType;
  };

  export type GetPlotAggregateType<T extends PlotAggregateArgs> = {
    [P in keyof T & keyof AggregatePlot]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlot[P]>
      : GetScalarType<T[P], AggregatePlot[P]>;
  };

  export type plotGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: plotWhereInput;
    orderBy?:
      | plotOrderByWithAggregationInput
      | plotOrderByWithAggregationInput[];
    by: PlotScalarFieldEnum[] | PlotScalarFieldEnum;
    having?: plotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlotCountAggregateInputType | true;
    _avg?: PlotAvgAggregateInputType;
    _sum?: PlotSumAggregateInputType;
    _min?: PlotMinAggregateInputType;
    _max?: PlotMaxAggregateInputType;
  };

  export type PlotGroupByOutputType = {
    plotId: number;
    farmerId: number;
    plotCords: JsonValue;
    crop: string;
    address: string;
    location: string;
    plotImage: string;
    _count: PlotCountAggregateOutputType | null;
    _avg: PlotAvgAggregateOutputType | null;
    _sum: PlotSumAggregateOutputType | null;
    _min: PlotMinAggregateOutputType | null;
    _max: PlotMaxAggregateOutputType | null;
  };

  type GetPlotGroupByPayload<T extends plotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlotGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof PlotGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PlotGroupByOutputType[P]>
          : GetScalarType<T[P], PlotGroupByOutputType[P]>;
      }
    >
  >;

  export type plotSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      plotId?: boolean;
      farmerId?: boolean;
      plotCords?: boolean;
      crop?: boolean;
      address?: boolean;
      location?: boolean;
      plotImage?: boolean;
      fid?: boolean | farmerDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["plot"]
  >;

  export type plotSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      plotId?: boolean;
      farmerId?: boolean;
      plotCords?: boolean;
      crop?: boolean;
      address?: boolean;
      location?: boolean;
      plotImage?: boolean;
      fid?: boolean | farmerDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["plot"]
  >;

  export type plotSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      plotId?: boolean;
      farmerId?: boolean;
      plotCords?: boolean;
      crop?: boolean;
      address?: boolean;
      location?: boolean;
      plotImage?: boolean;
      fid?: boolean | farmerDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["plot"]
  >;

  export type plotSelectScalar = {
    plotId?: boolean;
    farmerId?: boolean;
    plotCords?: boolean;
    crop?: boolean;
    address?: boolean;
    location?: boolean;
    plotImage?: boolean;
  };

  export type plotOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "plotId"
    | "farmerId"
    | "plotCords"
    | "crop"
    | "address"
    | "location"
    | "plotImage",
    ExtArgs["result"]["plot"]
  >;
  export type plotInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    fid?: boolean | farmerDefaultArgs<ExtArgs>;
  };
  export type plotIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    fid?: boolean | farmerDefaultArgs<ExtArgs>;
  };
  export type plotIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    fid?: boolean | farmerDefaultArgs<ExtArgs>;
  };

  export type $plotPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "plot";
    objects: {
      fid: Prisma.$farmerPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        plotId: number;
        farmerId: number;
        plotCords: Prisma.JsonValue;
        crop: string;
        address: string;
        location: string;
        plotImage: string;
      },
      ExtArgs["result"]["plot"]
    >;
    composites: {};
  };

  type plotGetPayload<S extends boolean | null | undefined | plotDefaultArgs> =
    $Result.GetResult<Prisma.$plotPayload, S>;

  type plotCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<plotFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: PlotCountAggregateInputType | true;
  };

  export interface plotDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["plot"];
      meta: { name: "plot" };
    };
    /**
     * Find zero or one Plot that matches the filter.
     * @param {plotFindUniqueArgs} args - Arguments to find a Plot
     * @example
     * // Get one Plot
     * const plot = await prisma.plot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends plotFindUniqueArgs>(
      args: SelectSubset<T, plotFindUniqueArgs<ExtArgs>>,
    ): Prisma__plotClient<
      $Result.GetResult<
        Prisma.$plotPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Plot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {plotFindUniqueOrThrowArgs} args - Arguments to find a Plot
     * @example
     * // Get one Plot
     * const plot = await prisma.plot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends plotFindUniqueOrThrowArgs>(
      args: SelectSubset<T, plotFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__plotClient<
      $Result.GetResult<
        Prisma.$plotPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Plot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plotFindFirstArgs} args - Arguments to find a Plot
     * @example
     * // Get one Plot
     * const plot = await prisma.plot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends plotFindFirstArgs>(
      args?: SelectSubset<T, plotFindFirstArgs<ExtArgs>>,
    ): Prisma__plotClient<
      $Result.GetResult<
        Prisma.$plotPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Plot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plotFindFirstOrThrowArgs} args - Arguments to find a Plot
     * @example
     * // Get one Plot
     * const plot = await prisma.plot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends plotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, plotFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__plotClient<
      $Result.GetResult<
        Prisma.$plotPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Plots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plots
     * const plots = await prisma.plot.findMany()
     *
     * // Get first 10 Plots
     * const plots = await prisma.plot.findMany({ take: 10 })
     *
     * // Only select the `plotId`
     * const plotWithPlotIdOnly = await prisma.plot.findMany({ select: { plotId: true } })
     *
     */
    findMany<T extends plotFindManyArgs>(
      args?: SelectSubset<T, plotFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$plotPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Plot.
     * @param {plotCreateArgs} args - Arguments to create a Plot.
     * @example
     * // Create one Plot
     * const Plot = await prisma.plot.create({
     *   data: {
     *     // ... data to create a Plot
     *   }
     * })
     *
     */
    create<T extends plotCreateArgs>(
      args: SelectSubset<T, plotCreateArgs<ExtArgs>>,
    ): Prisma__plotClient<
      $Result.GetResult<
        Prisma.$plotPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Plots.
     * @param {plotCreateManyArgs} args - Arguments to create many Plots.
     * @example
     * // Create many Plots
     * const plot = await prisma.plot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends plotCreateManyArgs>(
      args?: SelectSubset<T, plotCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Plots and returns the data saved in the database.
     * @param {plotCreateManyAndReturnArgs} args - Arguments to create many Plots.
     * @example
     * // Create many Plots
     * const plot = await prisma.plot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Plots and only return the `plotId`
     * const plotWithPlotIdOnly = await prisma.plot.createManyAndReturn({
     *   select: { plotId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends plotCreateManyAndReturnArgs>(
      args?: SelectSubset<T, plotCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$plotPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Plot.
     * @param {plotDeleteArgs} args - Arguments to delete one Plot.
     * @example
     * // Delete one Plot
     * const Plot = await prisma.plot.delete({
     *   where: {
     *     // ... filter to delete one Plot
     *   }
     * })
     *
     */
    delete<T extends plotDeleteArgs>(
      args: SelectSubset<T, plotDeleteArgs<ExtArgs>>,
    ): Prisma__plotClient<
      $Result.GetResult<
        Prisma.$plotPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Plot.
     * @param {plotUpdateArgs} args - Arguments to update one Plot.
     * @example
     * // Update one Plot
     * const plot = await prisma.plot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends plotUpdateArgs>(
      args: SelectSubset<T, plotUpdateArgs<ExtArgs>>,
    ): Prisma__plotClient<
      $Result.GetResult<
        Prisma.$plotPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Plots.
     * @param {plotDeleteManyArgs} args - Arguments to filter Plots to delete.
     * @example
     * // Delete a few Plots
     * const { count } = await prisma.plot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends plotDeleteManyArgs>(
      args?: SelectSubset<T, plotDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Plots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plots
     * const plot = await prisma.plot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends plotUpdateManyArgs>(
      args: SelectSubset<T, plotUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Plots and returns the data updated in the database.
     * @param {plotUpdateManyAndReturnArgs} args - Arguments to update many Plots.
     * @example
     * // Update many Plots
     * const plot = await prisma.plot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Plots and only return the `plotId`
     * const plotWithPlotIdOnly = await prisma.plot.updateManyAndReturn({
     *   select: { plotId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends plotUpdateManyAndReturnArgs>(
      args: SelectSubset<T, plotUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$plotPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Plot.
     * @param {plotUpsertArgs} args - Arguments to update or create a Plot.
     * @example
     * // Update or create a Plot
     * const plot = await prisma.plot.upsert({
     *   create: {
     *     // ... data to create a Plot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plot we want to update
     *   }
     * })
     */
    upsert<T extends plotUpsertArgs>(
      args: SelectSubset<T, plotUpsertArgs<ExtArgs>>,
    ): Prisma__plotClient<
      $Result.GetResult<
        Prisma.$plotPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Plots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plotCountArgs} args - Arguments to filter Plots to count.
     * @example
     * // Count the number of Plots
     * const count = await prisma.plot.count({
     *   where: {
     *     // ... the filter for the Plots we want to count
     *   }
     * })
     **/
    count<T extends plotCountArgs>(
      args?: Subset<T, plotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PlotCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Plot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PlotAggregateArgs>(
      args: Subset<T, PlotAggregateArgs>,
    ): Prisma.PrismaPromise<GetPlotAggregateType<T>>;

    /**
     * Group by Plot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends plotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: plotGroupByArgs["orderBy"] }
        : { orderBy?: plotGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, plotGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPlotGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the plot model
     */
    readonly fields: plotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__plotClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    fid<T extends farmerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, farmerDefaultArgs<ExtArgs>>,
    ): Prisma__farmerClient<
      | $Result.GetResult<
          Prisma.$farmerPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the plot model
   */
  interface plotFieldRefs {
    readonly plotId: FieldRef<"plot", "Int">;
    readonly farmerId: FieldRef<"plot", "Int">;
    readonly plotCords: FieldRef<"plot", "Json">;
    readonly crop: FieldRef<"plot", "String">;
    readonly address: FieldRef<"plot", "String">;
    readonly location: FieldRef<"plot", "String">;
    readonly plotImage: FieldRef<"plot", "String">;
  }

  // Custom InputTypes
  /**
   * plot findUnique
   */
  export type plotFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotInclude<ExtArgs> | null;
    /**
     * Filter, which plot to fetch.
     */
    where: plotWhereUniqueInput;
  };

  /**
   * plot findUniqueOrThrow
   */
  export type plotFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotInclude<ExtArgs> | null;
    /**
     * Filter, which plot to fetch.
     */
    where: plotWhereUniqueInput;
  };

  /**
   * plot findFirst
   */
  export type plotFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotInclude<ExtArgs> | null;
    /**
     * Filter, which plot to fetch.
     */
    where?: plotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of plots to fetch.
     */
    orderBy?: plotOrderByWithRelationInput | plotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for plots.
     */
    cursor?: plotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` plots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` plots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of plots.
     */
    distinct?: PlotScalarFieldEnum | PlotScalarFieldEnum[];
  };

  /**
   * plot findFirstOrThrow
   */
  export type plotFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotInclude<ExtArgs> | null;
    /**
     * Filter, which plot to fetch.
     */
    where?: plotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of plots to fetch.
     */
    orderBy?: plotOrderByWithRelationInput | plotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for plots.
     */
    cursor?: plotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` plots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` plots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of plots.
     */
    distinct?: PlotScalarFieldEnum | PlotScalarFieldEnum[];
  };

  /**
   * plot findMany
   */
  export type plotFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotInclude<ExtArgs> | null;
    /**
     * Filter, which plots to fetch.
     */
    where?: plotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of plots to fetch.
     */
    orderBy?: plotOrderByWithRelationInput | plotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing plots.
     */
    cursor?: plotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` plots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` plots.
     */
    skip?: number;
    distinct?: PlotScalarFieldEnum | PlotScalarFieldEnum[];
  };

  /**
   * plot create
   */
  export type plotCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotInclude<ExtArgs> | null;
    /**
     * The data needed to create a plot.
     */
    data: XOR<plotCreateInput, plotUncheckedCreateInput>;
  };

  /**
   * plot createMany
   */
  export type plotCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many plots.
     */
    data: plotCreateManyInput | plotCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * plot createManyAndReturn
   */
  export type plotCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * The data used to create many plots.
     */
    data: plotCreateManyInput | plotCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * plot update
   */
  export type plotUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotInclude<ExtArgs> | null;
    /**
     * The data needed to update a plot.
     */
    data: XOR<plotUpdateInput, plotUncheckedUpdateInput>;
    /**
     * Choose, which plot to update.
     */
    where: plotWhereUniqueInput;
  };

  /**
   * plot updateMany
   */
  export type plotUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update plots.
     */
    data: XOR<plotUpdateManyMutationInput, plotUncheckedUpdateManyInput>;
    /**
     * Filter which plots to update
     */
    where?: plotWhereInput;
    /**
     * Limit how many plots to update.
     */
    limit?: number;
  };

  /**
   * plot updateManyAndReturn
   */
  export type plotUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * The data used to update plots.
     */
    data: XOR<plotUpdateManyMutationInput, plotUncheckedUpdateManyInput>;
    /**
     * Filter which plots to update
     */
    where?: plotWhereInput;
    /**
     * Limit how many plots to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * plot upsert
   */
  export type plotUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotInclude<ExtArgs> | null;
    /**
     * The filter to search for the plot to update in case it exists.
     */
    where: plotWhereUniqueInput;
    /**
     * In case the plot found by the `where` argument doesn't exist, create a new plot with this data.
     */
    create: XOR<plotCreateInput, plotUncheckedCreateInput>;
    /**
     * In case the plot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<plotUpdateInput, plotUncheckedUpdateInput>;
  };

  /**
   * plot delete
   */
  export type plotDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotInclude<ExtArgs> | null;
    /**
     * Filter which plot to delete.
     */
    where: plotWhereUniqueInput;
  };

  /**
   * plot deleteMany
   */
  export type plotDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which plots to delete
     */
    where?: plotWhereInput;
    /**
     * Limit how many plots to delete.
     */
    limit?: number;
  };

  /**
   * plot without action
   */
  export type plotDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the plot
     */
    select?: plotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the plot
     */
    omit?: plotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plotInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AgentScalarFieldEnum: {
    agentId: "agentId";
    agentName: "agentName";
    agentEmail: "agentEmail";
    agentPass: "agentPass";
    agentPic: "agentPic";
  };

  export type AgentScalarFieldEnum =
    (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum];

  export const FarmerScalarFieldEnum: {
    farmerId: "farmerId";
    farmerName: "farmerName";
    farmerFather: "farmerFather";
    farmerPic: "farmerPic";
    address: "address";
    phone: "phone";
    agentId: "agentId";
  };

  export type FarmerScalarFieldEnum =
    (typeof FarmerScalarFieldEnum)[keyof typeof FarmerScalarFieldEnum];

  export const PlotScalarFieldEnum: {
    plotId: "plotId";
    farmerId: "farmerId";
    plotCords: "plotCords";
    crop: "crop";
    address: "address";
    location: "location";
    plotImage: "plotImage";
  };

  export type PlotScalarFieldEnum =
    (typeof PlotScalarFieldEnum)[keyof typeof PlotScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "QueryMode"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type agentWhereInput = {
    AND?: agentWhereInput | agentWhereInput[];
    OR?: agentWhereInput[];
    NOT?: agentWhereInput | agentWhereInput[];
    agentId?: IntFilter<"agent"> | number;
    agentName?: StringFilter<"agent"> | string;
    agentEmail?: StringFilter<"agent"> | string;
    agentPass?: StringFilter<"agent"> | string;
    agentPic?: StringFilter<"agent"> | string;
    farmers?: FarmerListRelationFilter;
  };

  export type agentOrderByWithRelationInput = {
    agentId?: SortOrder;
    agentName?: SortOrder;
    agentEmail?: SortOrder;
    agentPass?: SortOrder;
    agentPic?: SortOrder;
    farmers?: farmerOrderByRelationAggregateInput;
  };

  export type agentWhereUniqueInput = Prisma.AtLeast<
    {
      agentId?: number;
      AND?: agentWhereInput | agentWhereInput[];
      OR?: agentWhereInput[];
      NOT?: agentWhereInput | agentWhereInput[];
      agentName?: StringFilter<"agent"> | string;
      agentEmail?: StringFilter<"agent"> | string;
      agentPass?: StringFilter<"agent"> | string;
      agentPic?: StringFilter<"agent"> | string;
      farmers?: FarmerListRelationFilter;
    },
    "agentId"
  >;

  export type agentOrderByWithAggregationInput = {
    agentId?: SortOrder;
    agentName?: SortOrder;
    agentEmail?: SortOrder;
    agentPass?: SortOrder;
    agentPic?: SortOrder;
    _count?: agentCountOrderByAggregateInput;
    _avg?: agentAvgOrderByAggregateInput;
    _max?: agentMaxOrderByAggregateInput;
    _min?: agentMinOrderByAggregateInput;
    _sum?: agentSumOrderByAggregateInput;
  };

  export type agentScalarWhereWithAggregatesInput = {
    AND?:
      | agentScalarWhereWithAggregatesInput
      | agentScalarWhereWithAggregatesInput[];
    OR?: agentScalarWhereWithAggregatesInput[];
    NOT?:
      | agentScalarWhereWithAggregatesInput
      | agentScalarWhereWithAggregatesInput[];
    agentId?: IntWithAggregatesFilter<"agent"> | number;
    agentName?: StringWithAggregatesFilter<"agent"> | string;
    agentEmail?: StringWithAggregatesFilter<"agent"> | string;
    agentPass?: StringWithAggregatesFilter<"agent"> | string;
    agentPic?: StringWithAggregatesFilter<"agent"> | string;
  };

  export type farmerWhereInput = {
    AND?: farmerWhereInput | farmerWhereInput[];
    OR?: farmerWhereInput[];
    NOT?: farmerWhereInput | farmerWhereInput[];
    farmerId?: IntFilter<"farmer"> | number;
    farmerName?: StringFilter<"farmer"> | string;
    farmerFather?: StringFilter<"farmer"> | string;
    farmerPic?: StringFilter<"farmer"> | string;
    address?: StringFilter<"farmer"> | string;
    phone?: StringFilter<"farmer"> | string;
    agentId?: IntFilter<"farmer"> | number;
    aaid?: XOR<AgentScalarRelationFilter, agentWhereInput>;
    plots?: PlotListRelationFilter;
  };

  export type farmerOrderByWithRelationInput = {
    farmerId?: SortOrder;
    farmerName?: SortOrder;
    farmerFather?: SortOrder;
    farmerPic?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    agentId?: SortOrder;
    aaid?: agentOrderByWithRelationInput;
    plots?: plotOrderByRelationAggregateInput;
  };

  export type farmerWhereUniqueInput = Prisma.AtLeast<
    {
      farmerId?: number;
      AND?: farmerWhereInput | farmerWhereInput[];
      OR?: farmerWhereInput[];
      NOT?: farmerWhereInput | farmerWhereInput[];
      farmerName?: StringFilter<"farmer"> | string;
      farmerFather?: StringFilter<"farmer"> | string;
      farmerPic?: StringFilter<"farmer"> | string;
      address?: StringFilter<"farmer"> | string;
      phone?: StringFilter<"farmer"> | string;
      agentId?: IntFilter<"farmer"> | number;
      aaid?: XOR<AgentScalarRelationFilter, agentWhereInput>;
      plots?: PlotListRelationFilter;
    },
    "farmerId"
  >;

  export type farmerOrderByWithAggregationInput = {
    farmerId?: SortOrder;
    farmerName?: SortOrder;
    farmerFather?: SortOrder;
    farmerPic?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    agentId?: SortOrder;
    _count?: farmerCountOrderByAggregateInput;
    _avg?: farmerAvgOrderByAggregateInput;
    _max?: farmerMaxOrderByAggregateInput;
    _min?: farmerMinOrderByAggregateInput;
    _sum?: farmerSumOrderByAggregateInput;
  };

  export type farmerScalarWhereWithAggregatesInput = {
    AND?:
      | farmerScalarWhereWithAggregatesInput
      | farmerScalarWhereWithAggregatesInput[];
    OR?: farmerScalarWhereWithAggregatesInput[];
    NOT?:
      | farmerScalarWhereWithAggregatesInput
      | farmerScalarWhereWithAggregatesInput[];
    farmerId?: IntWithAggregatesFilter<"farmer"> | number;
    farmerName?: StringWithAggregatesFilter<"farmer"> | string;
    farmerFather?: StringWithAggregatesFilter<"farmer"> | string;
    farmerPic?: StringWithAggregatesFilter<"farmer"> | string;
    address?: StringWithAggregatesFilter<"farmer"> | string;
    phone?: StringWithAggregatesFilter<"farmer"> | string;
    agentId?: IntWithAggregatesFilter<"farmer"> | number;
  };

  export type plotWhereInput = {
    AND?: plotWhereInput | plotWhereInput[];
    OR?: plotWhereInput[];
    NOT?: plotWhereInput | plotWhereInput[];
    plotId?: IntFilter<"plot"> | number;
    farmerId?: IntFilter<"plot"> | number;
    plotCords?: JsonFilter<"plot">;
    crop?: StringFilter<"plot"> | string;
    address?: StringFilter<"plot"> | string;
    location?: StringFilter<"plot"> | string;
    plotImage?: StringFilter<"plot"> | string;
    fid?: XOR<FarmerScalarRelationFilter, farmerWhereInput>;
  };

  export type plotOrderByWithRelationInput = {
    plotId?: SortOrder;
    farmerId?: SortOrder;
    plotCords?: SortOrder;
    crop?: SortOrder;
    address?: SortOrder;
    location?: SortOrder;
    plotImage?: SortOrder;
    fid?: farmerOrderByWithRelationInput;
  };

  export type plotWhereUniqueInput = Prisma.AtLeast<
    {
      plotId?: number;
      AND?: plotWhereInput | plotWhereInput[];
      OR?: plotWhereInput[];
      NOT?: plotWhereInput | plotWhereInput[];
      farmerId?: IntFilter<"plot"> | number;
      plotCords?: JsonFilter<"plot">;
      crop?: StringFilter<"plot"> | string;
      address?: StringFilter<"plot"> | string;
      location?: StringFilter<"plot"> | string;
      plotImage?: StringFilter<"plot"> | string;
      fid?: XOR<FarmerScalarRelationFilter, farmerWhereInput>;
    },
    "plotId"
  >;

  export type plotOrderByWithAggregationInput = {
    plotId?: SortOrder;
    farmerId?: SortOrder;
    plotCords?: SortOrder;
    crop?: SortOrder;
    address?: SortOrder;
    location?: SortOrder;
    plotImage?: SortOrder;
    _count?: plotCountOrderByAggregateInput;
    _avg?: plotAvgOrderByAggregateInput;
    _max?: plotMaxOrderByAggregateInput;
    _min?: plotMinOrderByAggregateInput;
    _sum?: plotSumOrderByAggregateInput;
  };

  export type plotScalarWhereWithAggregatesInput = {
    AND?:
      | plotScalarWhereWithAggregatesInput
      | plotScalarWhereWithAggregatesInput[];
    OR?: plotScalarWhereWithAggregatesInput[];
    NOT?:
      | plotScalarWhereWithAggregatesInput
      | plotScalarWhereWithAggregatesInput[];
    plotId?: IntWithAggregatesFilter<"plot"> | number;
    farmerId?: IntWithAggregatesFilter<"plot"> | number;
    plotCords?: JsonWithAggregatesFilter<"plot">;
    crop?: StringWithAggregatesFilter<"plot"> | string;
    address?: StringWithAggregatesFilter<"plot"> | string;
    location?: StringWithAggregatesFilter<"plot"> | string;
    plotImage?: StringWithAggregatesFilter<"plot"> | string;
  };

  export type agentCreateInput = {
    agentName: string;
    agentEmail: string;
    agentPass: string;
    agentPic: string;
    farmers?: farmerCreateNestedManyWithoutAaidInput;
  };

  export type agentUncheckedCreateInput = {
    agentId?: number;
    agentName: string;
    agentEmail: string;
    agentPass: string;
    agentPic: string;
    farmers?: farmerUncheckedCreateNestedManyWithoutAaidInput;
  };

  export type agentUpdateInput = {
    agentName?: StringFieldUpdateOperationsInput | string;
    agentEmail?: StringFieldUpdateOperationsInput | string;
    agentPass?: StringFieldUpdateOperationsInput | string;
    agentPic?: StringFieldUpdateOperationsInput | string;
    farmers?: farmerUpdateManyWithoutAaidNestedInput;
  };

  export type agentUncheckedUpdateInput = {
    agentId?: IntFieldUpdateOperationsInput | number;
    agentName?: StringFieldUpdateOperationsInput | string;
    agentEmail?: StringFieldUpdateOperationsInput | string;
    agentPass?: StringFieldUpdateOperationsInput | string;
    agentPic?: StringFieldUpdateOperationsInput | string;
    farmers?: farmerUncheckedUpdateManyWithoutAaidNestedInput;
  };

  export type agentCreateManyInput = {
    agentId?: number;
    agentName: string;
    agentEmail: string;
    agentPass: string;
    agentPic: string;
  };

  export type agentUpdateManyMutationInput = {
    agentName?: StringFieldUpdateOperationsInput | string;
    agentEmail?: StringFieldUpdateOperationsInput | string;
    agentPass?: StringFieldUpdateOperationsInput | string;
    agentPic?: StringFieldUpdateOperationsInput | string;
  };

  export type agentUncheckedUpdateManyInput = {
    agentId?: IntFieldUpdateOperationsInput | number;
    agentName?: StringFieldUpdateOperationsInput | string;
    agentEmail?: StringFieldUpdateOperationsInput | string;
    agentPass?: StringFieldUpdateOperationsInput | string;
    agentPic?: StringFieldUpdateOperationsInput | string;
  };

  export type farmerCreateInput = {
    farmerName: string;
    farmerFather: string;
    farmerPic: string;
    address: string;
    phone: string;
    aaid: agentCreateNestedOneWithoutFarmersInput;
    plots?: plotCreateNestedManyWithoutFidInput;
  };

  export type farmerUncheckedCreateInput = {
    farmerId?: number;
    farmerName: string;
    farmerFather: string;
    farmerPic: string;
    address: string;
    phone: string;
    agentId: number;
    plots?: plotUncheckedCreateNestedManyWithoutFidInput;
  };

  export type farmerUpdateInput = {
    farmerName?: StringFieldUpdateOperationsInput | string;
    farmerFather?: StringFieldUpdateOperationsInput | string;
    farmerPic?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    aaid?: agentUpdateOneRequiredWithoutFarmersNestedInput;
    plots?: plotUpdateManyWithoutFidNestedInput;
  };

  export type farmerUncheckedUpdateInput = {
    farmerId?: IntFieldUpdateOperationsInput | number;
    farmerName?: StringFieldUpdateOperationsInput | string;
    farmerFather?: StringFieldUpdateOperationsInput | string;
    farmerPic?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    agentId?: IntFieldUpdateOperationsInput | number;
    plots?: plotUncheckedUpdateManyWithoutFidNestedInput;
  };

  export type farmerCreateManyInput = {
    farmerId?: number;
    farmerName: string;
    farmerFather: string;
    farmerPic: string;
    address: string;
    phone: string;
    agentId: number;
  };

  export type farmerUpdateManyMutationInput = {
    farmerName?: StringFieldUpdateOperationsInput | string;
    farmerFather?: StringFieldUpdateOperationsInput | string;
    farmerPic?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
  };

  export type farmerUncheckedUpdateManyInput = {
    farmerId?: IntFieldUpdateOperationsInput | number;
    farmerName?: StringFieldUpdateOperationsInput | string;
    farmerFather?: StringFieldUpdateOperationsInput | string;
    farmerPic?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    agentId?: IntFieldUpdateOperationsInput | number;
  };

  export type plotCreateInput = {
    plotCords: JsonNullValueInput | InputJsonValue;
    crop: string;
    address: string;
    location: string;
    plotImage: string;
    fid: farmerCreateNestedOneWithoutPlotsInput;
  };

  export type plotUncheckedCreateInput = {
    plotId?: number;
    farmerId: number;
    plotCords: JsonNullValueInput | InputJsonValue;
    crop: string;
    address: string;
    location: string;
    plotImage: string;
  };

  export type plotUpdateInput = {
    plotCords?: JsonNullValueInput | InputJsonValue;
    crop?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    plotImage?: StringFieldUpdateOperationsInput | string;
    fid?: farmerUpdateOneRequiredWithoutPlotsNestedInput;
  };

  export type plotUncheckedUpdateInput = {
    plotId?: IntFieldUpdateOperationsInput | number;
    farmerId?: IntFieldUpdateOperationsInput | number;
    plotCords?: JsonNullValueInput | InputJsonValue;
    crop?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    plotImage?: StringFieldUpdateOperationsInput | string;
  };

  export type plotCreateManyInput = {
    plotId?: number;
    farmerId: number;
    plotCords: JsonNullValueInput | InputJsonValue;
    crop: string;
    address: string;
    location: string;
    plotImage: string;
  };

  export type plotUpdateManyMutationInput = {
    plotCords?: JsonNullValueInput | InputJsonValue;
    crop?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    plotImage?: StringFieldUpdateOperationsInput | string;
  };

  export type plotUncheckedUpdateManyInput = {
    plotId?: IntFieldUpdateOperationsInput | number;
    farmerId?: IntFieldUpdateOperationsInput | number;
    plotCords?: JsonNullValueInput | InputJsonValue;
    crop?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    plotImage?: StringFieldUpdateOperationsInput | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type FarmerListRelationFilter = {
    every?: farmerWhereInput;
    some?: farmerWhereInput;
    none?: farmerWhereInput;
  };

  export type farmerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type agentCountOrderByAggregateInput = {
    agentId?: SortOrder;
    agentName?: SortOrder;
    agentEmail?: SortOrder;
    agentPass?: SortOrder;
    agentPic?: SortOrder;
  };

  export type agentAvgOrderByAggregateInput = {
    agentId?: SortOrder;
  };

  export type agentMaxOrderByAggregateInput = {
    agentId?: SortOrder;
    agentName?: SortOrder;
    agentEmail?: SortOrder;
    agentPass?: SortOrder;
    agentPic?: SortOrder;
  };

  export type agentMinOrderByAggregateInput = {
    agentId?: SortOrder;
    agentName?: SortOrder;
    agentEmail?: SortOrder;
    agentPass?: SortOrder;
    agentPic?: SortOrder;
  };

  export type agentSumOrderByAggregateInput = {
    agentId?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type AgentScalarRelationFilter = {
    is?: agentWhereInput;
    isNot?: agentWhereInput;
  };

  export type PlotListRelationFilter = {
    every?: plotWhereInput;
    some?: plotWhereInput;
    none?: plotWhereInput;
  };

  export type plotOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type farmerCountOrderByAggregateInput = {
    farmerId?: SortOrder;
    farmerName?: SortOrder;
    farmerFather?: SortOrder;
    farmerPic?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    agentId?: SortOrder;
  };

  export type farmerAvgOrderByAggregateInput = {
    farmerId?: SortOrder;
    agentId?: SortOrder;
  };

  export type farmerMaxOrderByAggregateInput = {
    farmerId?: SortOrder;
    farmerName?: SortOrder;
    farmerFather?: SortOrder;
    farmerPic?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    agentId?: SortOrder;
  };

  export type farmerMinOrderByAggregateInput = {
    farmerId?: SortOrder;
    farmerName?: SortOrder;
    farmerFather?: SortOrder;
    farmerPic?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    agentId?: SortOrder;
  };

  export type farmerSumOrderByAggregateInput = {
    farmerId?: SortOrder;
    agentId?: SortOrder;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, "path">>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type FarmerScalarRelationFilter = {
    is?: farmerWhereInput;
    isNot?: farmerWhereInput;
  };

  export type plotCountOrderByAggregateInput = {
    plotId?: SortOrder;
    farmerId?: SortOrder;
    plotCords?: SortOrder;
    crop?: SortOrder;
    address?: SortOrder;
    location?: SortOrder;
    plotImage?: SortOrder;
  };

  export type plotAvgOrderByAggregateInput = {
    plotId?: SortOrder;
    farmerId?: SortOrder;
  };

  export type plotMaxOrderByAggregateInput = {
    plotId?: SortOrder;
    farmerId?: SortOrder;
    crop?: SortOrder;
    address?: SortOrder;
    location?: SortOrder;
    plotImage?: SortOrder;
  };

  export type plotMinOrderByAggregateInput = {
    plotId?: SortOrder;
    farmerId?: SortOrder;
    crop?: SortOrder;
    address?: SortOrder;
    location?: SortOrder;
    plotImage?: SortOrder;
  };

  export type plotSumOrderByAggregateInput = {
    plotId?: SortOrder;
    farmerId?: SortOrder;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type farmerCreateNestedManyWithoutAaidInput = {
    create?:
      | XOR<farmerCreateWithoutAaidInput, farmerUncheckedCreateWithoutAaidInput>
      | farmerCreateWithoutAaidInput[]
      | farmerUncheckedCreateWithoutAaidInput[];
    connectOrCreate?:
      | farmerCreateOrConnectWithoutAaidInput
      | farmerCreateOrConnectWithoutAaidInput[];
    createMany?: farmerCreateManyAaidInputEnvelope;
    connect?: farmerWhereUniqueInput | farmerWhereUniqueInput[];
  };

  export type farmerUncheckedCreateNestedManyWithoutAaidInput = {
    create?:
      | XOR<farmerCreateWithoutAaidInput, farmerUncheckedCreateWithoutAaidInput>
      | farmerCreateWithoutAaidInput[]
      | farmerUncheckedCreateWithoutAaidInput[];
    connectOrCreate?:
      | farmerCreateOrConnectWithoutAaidInput
      | farmerCreateOrConnectWithoutAaidInput[];
    createMany?: farmerCreateManyAaidInputEnvelope;
    connect?: farmerWhereUniqueInput | farmerWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type farmerUpdateManyWithoutAaidNestedInput = {
    create?:
      | XOR<farmerCreateWithoutAaidInput, farmerUncheckedCreateWithoutAaidInput>
      | farmerCreateWithoutAaidInput[]
      | farmerUncheckedCreateWithoutAaidInput[];
    connectOrCreate?:
      | farmerCreateOrConnectWithoutAaidInput
      | farmerCreateOrConnectWithoutAaidInput[];
    upsert?:
      | farmerUpsertWithWhereUniqueWithoutAaidInput
      | farmerUpsertWithWhereUniqueWithoutAaidInput[];
    createMany?: farmerCreateManyAaidInputEnvelope;
    set?: farmerWhereUniqueInput | farmerWhereUniqueInput[];
    disconnect?: farmerWhereUniqueInput | farmerWhereUniqueInput[];
    delete?: farmerWhereUniqueInput | farmerWhereUniqueInput[];
    connect?: farmerWhereUniqueInput | farmerWhereUniqueInput[];
    update?:
      | farmerUpdateWithWhereUniqueWithoutAaidInput
      | farmerUpdateWithWhereUniqueWithoutAaidInput[];
    updateMany?:
      | farmerUpdateManyWithWhereWithoutAaidInput
      | farmerUpdateManyWithWhereWithoutAaidInput[];
    deleteMany?: farmerScalarWhereInput | farmerScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type farmerUncheckedUpdateManyWithoutAaidNestedInput = {
    create?:
      | XOR<farmerCreateWithoutAaidInput, farmerUncheckedCreateWithoutAaidInput>
      | farmerCreateWithoutAaidInput[]
      | farmerUncheckedCreateWithoutAaidInput[];
    connectOrCreate?:
      | farmerCreateOrConnectWithoutAaidInput
      | farmerCreateOrConnectWithoutAaidInput[];
    upsert?:
      | farmerUpsertWithWhereUniqueWithoutAaidInput
      | farmerUpsertWithWhereUniqueWithoutAaidInput[];
    createMany?: farmerCreateManyAaidInputEnvelope;
    set?: farmerWhereUniqueInput | farmerWhereUniqueInput[];
    disconnect?: farmerWhereUniqueInput | farmerWhereUniqueInput[];
    delete?: farmerWhereUniqueInput | farmerWhereUniqueInput[];
    connect?: farmerWhereUniqueInput | farmerWhereUniqueInput[];
    update?:
      | farmerUpdateWithWhereUniqueWithoutAaidInput
      | farmerUpdateWithWhereUniqueWithoutAaidInput[];
    updateMany?:
      | farmerUpdateManyWithWhereWithoutAaidInput
      | farmerUpdateManyWithWhereWithoutAaidInput[];
    deleteMany?: farmerScalarWhereInput | farmerScalarWhereInput[];
  };

  export type agentCreateNestedOneWithoutFarmersInput = {
    create?: XOR<
      agentCreateWithoutFarmersInput,
      agentUncheckedCreateWithoutFarmersInput
    >;
    connectOrCreate?: agentCreateOrConnectWithoutFarmersInput;
    connect?: agentWhereUniqueInput;
  };

  export type plotCreateNestedManyWithoutFidInput = {
    create?:
      | XOR<plotCreateWithoutFidInput, plotUncheckedCreateWithoutFidInput>
      | plotCreateWithoutFidInput[]
      | plotUncheckedCreateWithoutFidInput[];
    connectOrCreate?:
      | plotCreateOrConnectWithoutFidInput
      | plotCreateOrConnectWithoutFidInput[];
    createMany?: plotCreateManyFidInputEnvelope;
    connect?: plotWhereUniqueInput | plotWhereUniqueInput[];
  };

  export type plotUncheckedCreateNestedManyWithoutFidInput = {
    create?:
      | XOR<plotCreateWithoutFidInput, plotUncheckedCreateWithoutFidInput>
      | plotCreateWithoutFidInput[]
      | plotUncheckedCreateWithoutFidInput[];
    connectOrCreate?:
      | plotCreateOrConnectWithoutFidInput
      | plotCreateOrConnectWithoutFidInput[];
    createMany?: plotCreateManyFidInputEnvelope;
    connect?: plotWhereUniqueInput | plotWhereUniqueInput[];
  };

  export type agentUpdateOneRequiredWithoutFarmersNestedInput = {
    create?: XOR<
      agentCreateWithoutFarmersInput,
      agentUncheckedCreateWithoutFarmersInput
    >;
    connectOrCreate?: agentCreateOrConnectWithoutFarmersInput;
    upsert?: agentUpsertWithoutFarmersInput;
    connect?: agentWhereUniqueInput;
    update?: XOR<
      XOR<
        agentUpdateToOneWithWhereWithoutFarmersInput,
        agentUpdateWithoutFarmersInput
      >,
      agentUncheckedUpdateWithoutFarmersInput
    >;
  };

  export type plotUpdateManyWithoutFidNestedInput = {
    create?:
      | XOR<plotCreateWithoutFidInput, plotUncheckedCreateWithoutFidInput>
      | plotCreateWithoutFidInput[]
      | plotUncheckedCreateWithoutFidInput[];
    connectOrCreate?:
      | plotCreateOrConnectWithoutFidInput
      | plotCreateOrConnectWithoutFidInput[];
    upsert?:
      | plotUpsertWithWhereUniqueWithoutFidInput
      | plotUpsertWithWhereUniqueWithoutFidInput[];
    createMany?: plotCreateManyFidInputEnvelope;
    set?: plotWhereUniqueInput | plotWhereUniqueInput[];
    disconnect?: plotWhereUniqueInput | plotWhereUniqueInput[];
    delete?: plotWhereUniqueInput | plotWhereUniqueInput[];
    connect?: plotWhereUniqueInput | plotWhereUniqueInput[];
    update?:
      | plotUpdateWithWhereUniqueWithoutFidInput
      | plotUpdateWithWhereUniqueWithoutFidInput[];
    updateMany?:
      | plotUpdateManyWithWhereWithoutFidInput
      | plotUpdateManyWithWhereWithoutFidInput[];
    deleteMany?: plotScalarWhereInput | plotScalarWhereInput[];
  };

  export type plotUncheckedUpdateManyWithoutFidNestedInput = {
    create?:
      | XOR<plotCreateWithoutFidInput, plotUncheckedCreateWithoutFidInput>
      | plotCreateWithoutFidInput[]
      | plotUncheckedCreateWithoutFidInput[];
    connectOrCreate?:
      | plotCreateOrConnectWithoutFidInput
      | plotCreateOrConnectWithoutFidInput[];
    upsert?:
      | plotUpsertWithWhereUniqueWithoutFidInput
      | plotUpsertWithWhereUniqueWithoutFidInput[];
    createMany?: plotCreateManyFidInputEnvelope;
    set?: plotWhereUniqueInput | plotWhereUniqueInput[];
    disconnect?: plotWhereUniqueInput | plotWhereUniqueInput[];
    delete?: plotWhereUniqueInput | plotWhereUniqueInput[];
    connect?: plotWhereUniqueInput | plotWhereUniqueInput[];
    update?:
      | plotUpdateWithWhereUniqueWithoutFidInput
      | plotUpdateWithWhereUniqueWithoutFidInput[];
    updateMany?:
      | plotUpdateManyWithWhereWithoutFidInput
      | plotUpdateManyWithWhereWithoutFidInput[];
    deleteMany?: plotScalarWhereInput | plotScalarWhereInput[];
  };

  export type farmerCreateNestedOneWithoutPlotsInput = {
    create?: XOR<
      farmerCreateWithoutPlotsInput,
      farmerUncheckedCreateWithoutPlotsInput
    >;
    connectOrCreate?: farmerCreateOrConnectWithoutPlotsInput;
    connect?: farmerWhereUniqueInput;
  };

  export type farmerUpdateOneRequiredWithoutPlotsNestedInput = {
    create?: XOR<
      farmerCreateWithoutPlotsInput,
      farmerUncheckedCreateWithoutPlotsInput
    >;
    connectOrCreate?: farmerCreateOrConnectWithoutPlotsInput;
    upsert?: farmerUpsertWithoutPlotsInput;
    connect?: farmerWhereUniqueInput;
    update?: XOR<
      XOR<
        farmerUpdateToOneWithWhereWithoutPlotsInput,
        farmerUpdateWithoutPlotsInput
      >,
      farmerUncheckedUpdateWithoutPlotsInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, "path">>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type farmerCreateWithoutAaidInput = {
    farmerName: string;
    farmerFather: string;
    farmerPic: string;
    address: string;
    phone: string;
    plots?: plotCreateNestedManyWithoutFidInput;
  };

  export type farmerUncheckedCreateWithoutAaidInput = {
    farmerId?: number;
    farmerName: string;
    farmerFather: string;
    farmerPic: string;
    address: string;
    phone: string;
    plots?: plotUncheckedCreateNestedManyWithoutFidInput;
  };

  export type farmerCreateOrConnectWithoutAaidInput = {
    where: farmerWhereUniqueInput;
    create: XOR<
      farmerCreateWithoutAaidInput,
      farmerUncheckedCreateWithoutAaidInput
    >;
  };

  export type farmerCreateManyAaidInputEnvelope = {
    data: farmerCreateManyAaidInput | farmerCreateManyAaidInput[];
    skipDuplicates?: boolean;
  };

  export type farmerUpsertWithWhereUniqueWithoutAaidInput = {
    where: farmerWhereUniqueInput;
    update: XOR<
      farmerUpdateWithoutAaidInput,
      farmerUncheckedUpdateWithoutAaidInput
    >;
    create: XOR<
      farmerCreateWithoutAaidInput,
      farmerUncheckedCreateWithoutAaidInput
    >;
  };

  export type farmerUpdateWithWhereUniqueWithoutAaidInput = {
    where: farmerWhereUniqueInput;
    data: XOR<
      farmerUpdateWithoutAaidInput,
      farmerUncheckedUpdateWithoutAaidInput
    >;
  };

  export type farmerUpdateManyWithWhereWithoutAaidInput = {
    where: farmerScalarWhereInput;
    data: XOR<
      farmerUpdateManyMutationInput,
      farmerUncheckedUpdateManyWithoutAaidInput
    >;
  };

  export type farmerScalarWhereInput = {
    AND?: farmerScalarWhereInput | farmerScalarWhereInput[];
    OR?: farmerScalarWhereInput[];
    NOT?: farmerScalarWhereInput | farmerScalarWhereInput[];
    farmerId?: IntFilter<"farmer"> | number;
    farmerName?: StringFilter<"farmer"> | string;
    farmerFather?: StringFilter<"farmer"> | string;
    farmerPic?: StringFilter<"farmer"> | string;
    address?: StringFilter<"farmer"> | string;
    phone?: StringFilter<"farmer"> | string;
    agentId?: IntFilter<"farmer"> | number;
  };

  export type agentCreateWithoutFarmersInput = {
    agentName: string;
    agentEmail: string;
    agentPass: string;
    agentPic: string;
  };

  export type agentUncheckedCreateWithoutFarmersInput = {
    agentId?: number;
    agentName: string;
    agentEmail: string;
    agentPass: string;
    agentPic: string;
  };

  export type agentCreateOrConnectWithoutFarmersInput = {
    where: agentWhereUniqueInput;
    create: XOR<
      agentCreateWithoutFarmersInput,
      agentUncheckedCreateWithoutFarmersInput
    >;
  };

  export type plotCreateWithoutFidInput = {
    plotCords: JsonNullValueInput | InputJsonValue;
    crop: string;
    address: string;
    location: string;
    plotImage: string;
  };

  export type plotUncheckedCreateWithoutFidInput = {
    plotId?: number;
    plotCords: JsonNullValueInput | InputJsonValue;
    crop: string;
    address: string;
    location: string;
    plotImage: string;
  };

  export type plotCreateOrConnectWithoutFidInput = {
    where: plotWhereUniqueInput;
    create: XOR<plotCreateWithoutFidInput, plotUncheckedCreateWithoutFidInput>;
  };

  export type plotCreateManyFidInputEnvelope = {
    data: plotCreateManyFidInput | plotCreateManyFidInput[];
    skipDuplicates?: boolean;
  };

  export type agentUpsertWithoutFarmersInput = {
    update: XOR<
      agentUpdateWithoutFarmersInput,
      agentUncheckedUpdateWithoutFarmersInput
    >;
    create: XOR<
      agentCreateWithoutFarmersInput,
      agentUncheckedCreateWithoutFarmersInput
    >;
    where?: agentWhereInput;
  };

  export type agentUpdateToOneWithWhereWithoutFarmersInput = {
    where?: agentWhereInput;
    data: XOR<
      agentUpdateWithoutFarmersInput,
      agentUncheckedUpdateWithoutFarmersInput
    >;
  };

  export type agentUpdateWithoutFarmersInput = {
    agentName?: StringFieldUpdateOperationsInput | string;
    agentEmail?: StringFieldUpdateOperationsInput | string;
    agentPass?: StringFieldUpdateOperationsInput | string;
    agentPic?: StringFieldUpdateOperationsInput | string;
  };

  export type agentUncheckedUpdateWithoutFarmersInput = {
    agentId?: IntFieldUpdateOperationsInput | number;
    agentName?: StringFieldUpdateOperationsInput | string;
    agentEmail?: StringFieldUpdateOperationsInput | string;
    agentPass?: StringFieldUpdateOperationsInput | string;
    agentPic?: StringFieldUpdateOperationsInput | string;
  };

  export type plotUpsertWithWhereUniqueWithoutFidInput = {
    where: plotWhereUniqueInput;
    update: XOR<plotUpdateWithoutFidInput, plotUncheckedUpdateWithoutFidInput>;
    create: XOR<plotCreateWithoutFidInput, plotUncheckedCreateWithoutFidInput>;
  };

  export type plotUpdateWithWhereUniqueWithoutFidInput = {
    where: plotWhereUniqueInput;
    data: XOR<plotUpdateWithoutFidInput, plotUncheckedUpdateWithoutFidInput>;
  };

  export type plotUpdateManyWithWhereWithoutFidInput = {
    where: plotScalarWhereInput;
    data: XOR<
      plotUpdateManyMutationInput,
      plotUncheckedUpdateManyWithoutFidInput
    >;
  };

  export type plotScalarWhereInput = {
    AND?: plotScalarWhereInput | plotScalarWhereInput[];
    OR?: plotScalarWhereInput[];
    NOT?: plotScalarWhereInput | plotScalarWhereInput[];
    plotId?: IntFilter<"plot"> | number;
    farmerId?: IntFilter<"plot"> | number;
    plotCords?: JsonFilter<"plot">;
    crop?: StringFilter<"plot"> | string;
    address?: StringFilter<"plot"> | string;
    location?: StringFilter<"plot"> | string;
    plotImage?: StringFilter<"plot"> | string;
  };

  export type farmerCreateWithoutPlotsInput = {
    farmerName: string;
    farmerFather: string;
    farmerPic: string;
    address: string;
    phone: string;
    aaid: agentCreateNestedOneWithoutFarmersInput;
  };

  export type farmerUncheckedCreateWithoutPlotsInput = {
    farmerId?: number;
    farmerName: string;
    farmerFather: string;
    farmerPic: string;
    address: string;
    phone: string;
    agentId: number;
  };

  export type farmerCreateOrConnectWithoutPlotsInput = {
    where: farmerWhereUniqueInput;
    create: XOR<
      farmerCreateWithoutPlotsInput,
      farmerUncheckedCreateWithoutPlotsInput
    >;
  };

  export type farmerUpsertWithoutPlotsInput = {
    update: XOR<
      farmerUpdateWithoutPlotsInput,
      farmerUncheckedUpdateWithoutPlotsInput
    >;
    create: XOR<
      farmerCreateWithoutPlotsInput,
      farmerUncheckedCreateWithoutPlotsInput
    >;
    where?: farmerWhereInput;
  };

  export type farmerUpdateToOneWithWhereWithoutPlotsInput = {
    where?: farmerWhereInput;
    data: XOR<
      farmerUpdateWithoutPlotsInput,
      farmerUncheckedUpdateWithoutPlotsInput
    >;
  };

  export type farmerUpdateWithoutPlotsInput = {
    farmerName?: StringFieldUpdateOperationsInput | string;
    farmerFather?: StringFieldUpdateOperationsInput | string;
    farmerPic?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    aaid?: agentUpdateOneRequiredWithoutFarmersNestedInput;
  };

  export type farmerUncheckedUpdateWithoutPlotsInput = {
    farmerId?: IntFieldUpdateOperationsInput | number;
    farmerName?: StringFieldUpdateOperationsInput | string;
    farmerFather?: StringFieldUpdateOperationsInput | string;
    farmerPic?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    agentId?: IntFieldUpdateOperationsInput | number;
  };

  export type farmerCreateManyAaidInput = {
    farmerId?: number;
    farmerName: string;
    farmerFather: string;
    farmerPic: string;
    address: string;
    phone: string;
  };

  export type farmerUpdateWithoutAaidInput = {
    farmerName?: StringFieldUpdateOperationsInput | string;
    farmerFather?: StringFieldUpdateOperationsInput | string;
    farmerPic?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    plots?: plotUpdateManyWithoutFidNestedInput;
  };

  export type farmerUncheckedUpdateWithoutAaidInput = {
    farmerId?: IntFieldUpdateOperationsInput | number;
    farmerName?: StringFieldUpdateOperationsInput | string;
    farmerFather?: StringFieldUpdateOperationsInput | string;
    farmerPic?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    plots?: plotUncheckedUpdateManyWithoutFidNestedInput;
  };

  export type farmerUncheckedUpdateManyWithoutAaidInput = {
    farmerId?: IntFieldUpdateOperationsInput | number;
    farmerName?: StringFieldUpdateOperationsInput | string;
    farmerFather?: StringFieldUpdateOperationsInput | string;
    farmerPic?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
  };

  export type plotCreateManyFidInput = {
    plotId?: number;
    plotCords: JsonNullValueInput | InputJsonValue;
    crop: string;
    address: string;
    location: string;
    plotImage: string;
  };

  export type plotUpdateWithoutFidInput = {
    plotCords?: JsonNullValueInput | InputJsonValue;
    crop?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    plotImage?: StringFieldUpdateOperationsInput | string;
  };

  export type plotUncheckedUpdateWithoutFidInput = {
    plotId?: IntFieldUpdateOperationsInput | number;
    plotCords?: JsonNullValueInput | InputJsonValue;
    crop?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    plotImage?: StringFieldUpdateOperationsInput | string;
  };

  export type plotUncheckedUpdateManyWithoutFidInput = {
    plotId?: IntFieldUpdateOperationsInput | number;
    plotCords?: JsonNullValueInput | InputJsonValue;
    crop?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    plotImage?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}

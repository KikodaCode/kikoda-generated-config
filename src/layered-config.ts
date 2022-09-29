import { merge } from 'lodash';

/**
 * Utility type to make attributes of a base config type optional in an individual config layer.
 *
 * @param T Base config type
 * @param K Complete config type
 *
 * @example
 * ```ts
 * interface BaseConfig {
 *  readonly enableAlarms: string;
 * }
 *
 * interface CompleteConfig {
 *  readonly enableAlarms: string;
 *  readonly additionalConfig?: any;
 * }
 *
 * type StageConfig = ConfigLayer<BaseConfig, CompleteConfig>;
 * ```
 */
export type ConfigLayer<T, K> = Omit<K, keyof T> & Partial<T>;

/**
 * This construct current only wraps the lodash.merge() functionality
 * but is intended to be a placeholder for future logic like: global defaults,
 * type enforcement and error handling, dynamic values (custom compute logic),
 * etc.
 */
export class LayeredConfig<
  TBase,
  TLayer,
  TMerged extends ConfigLayer<TBase, TLayer> = TBase & TLayer,
> {
  constructor(base: TBase, ...layers: TLayer[]) {
    return merge({}, base, ...layers) as TMerged;
  }
}

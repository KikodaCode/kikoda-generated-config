# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### AdditionalConfigObject <a name="AdditionalConfigObject" id="@kikoda/generated-config.AdditionalConfigObject"></a>

AdditionalConfigObject represents any additional configuration items that are added to the generated configuration file.

This is used to provide deploy-time configuration items to the application.

#### Initializer <a name="Initializer" id="@kikoda/generated-config.AdditionalConfigObject.Initializer"></a>

```typescript
import { AdditionalConfigObject } from '@kikoda/generated-config'

const additionalConfigObject: AdditionalConfigObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/generated-config.AdditionalConfigObject.property.additionalConfig">additionalConfig</a></code> | <code>any</code> | Provide any additional configuration items to add to the generated configuration file. |

---

##### `additionalConfig`<sup>Optional</sup> <a name="additionalConfig" id="@kikoda/generated-config.AdditionalConfigObject.property.additionalConfig"></a>

```typescript
public readonly additionalConfig: any;
```

- *Type:* any

Provide any additional configuration items to add to the generated configuration file.

This
will be added to the config as the `additionalConfig` attribute.

---

### GeneratedConfigProps <a name="GeneratedConfigProps" id="@kikoda/generated-config.GeneratedConfigProps"></a>

#### Initializer <a name="Initializer" id="@kikoda/generated-config.GeneratedConfigProps.Initializer"></a>

```typescript
import { GeneratedConfigProps } from '@kikoda/generated-config'

const generatedConfigProps: GeneratedConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/generated-config.GeneratedConfigProps.property.additionalConfig">additionalConfig</a></code> | <code>any</code> | Provide any additional configuration items to add to the generated configuration file. |
| <code><a href="#@kikoda/generated-config.GeneratedConfigProps.property.srcPath">srcPath</a></code> | <code>string</code> | Full absolute path of the application source directory. |
| <code><a href="#@kikoda/generated-config.GeneratedConfigProps.property.stage">stage</a></code> | <code>string</code> | Target deployment stage. |
| <code><a href="#@kikoda/generated-config.GeneratedConfigProps.property.baseConfigFileName">baseConfigFileName</a></code> | <code>string</code> | Base config file name (if applicable). |
| <code><a href="#@kikoda/generated-config.GeneratedConfigProps.property.configDir">configDir</a></code> | <code>string</code> | Path relative to `srcPath` where `*.config.*` files are stored. |
| <code><a href="#@kikoda/generated-config.GeneratedConfigProps.property.outDir">outDir</a></code> | <code>string</code> | write the generated config file to a directory; |

---

##### `additionalConfig`<sup>Optional</sup> <a name="additionalConfig" id="@kikoda/generated-config.GeneratedConfigProps.property.additionalConfig"></a>

```typescript
public readonly additionalConfig: any;
```

- *Type:* any

Provide any additional configuration items to add to the generated configuration file.

This
will be added to the config as the `additionalConfig` attribute.

---

##### `srcPath`<sup>Required</sup> <a name="srcPath" id="@kikoda/generated-config.GeneratedConfigProps.property.srcPath"></a>

```typescript
public readonly srcPath: string;
```

- *Type:* string

Full absolute path of the application source directory.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@kikoda/generated-config.GeneratedConfigProps.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Target deployment stage.

---

##### `baseConfigFileName`<sup>Optional</sup> <a name="baseConfigFileName" id="@kikoda/generated-config.GeneratedConfigProps.property.baseConfigFileName"></a>

```typescript
public readonly baseConfigFileName: string;
```

- *Type:* string
- *Default:* `base.config.ts`

Base config file name (if applicable).

---

##### `configDir`<sup>Optional</sup> <a name="configDir" id="@kikoda/generated-config.GeneratedConfigProps.property.configDir"></a>

```typescript
public readonly configDir: string;
```

- *Type:* string
- *Default:* 'config'

Path relative to `srcPath` where `*.config.*` files are stored.

---

##### `outDir`<sup>Optional</sup> <a name="outDir" id="@kikoda/generated-config.GeneratedConfigProps.property.outDir"></a>

```typescript
public readonly outDir: string;
```

- *Type:* string

write the generated config file to a directory;

relative to srcPath

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigManifest <a name="ConfigManifest" id="@kikoda/generated-config.ConfigManifest"></a>

- *Implements:* <a href="#@kikoda/generated-config.IConfigManifest">IConfigManifest</a>

#### Initializers <a name="Initializers" id="@kikoda/generated-config.ConfigManifest.Initializer"></a>

```typescript
import { ConfigManifest } from '@kikoda/generated-config'

new ConfigManifest(generatedConfigFileName: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/generated-config.ConfigManifest.Initializer.parameter.generatedConfigFileName">generatedConfigFileName</a></code> | <code>string</code> | *No description.* |

---

##### `generatedConfigFileName`<sup>Required</sup> <a name="generatedConfigFileName" id="@kikoda/generated-config.ConfigManifest.Initializer.parameter.generatedConfigFileName"></a>

- *Type:* string

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/generated-config.ConfigManifest.property.files">files</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `files`<sup>Required</sup> <a name="files" id="@kikoda/generated-config.ConfigManifest.property.files"></a>

```typescript
public readonly files: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/generated-config.ConfigManifest.property.CONFIG_FILE_KEY">CONFIG_FILE_KEY</a></code> | <code>string</code> | The key in the config-manifest.json file that contains the filename of the config file. |
| <code><a href="#@kikoda/generated-config.ConfigManifest.property.CONFIG_MANIFEST_FILENAME">CONFIG_MANIFEST_FILENAME</a></code> | <code>string</code> | The filename of the Config Manfiest file. |

---

##### `CONFIG_FILE_KEY`<sup>Required</sup> <a name="CONFIG_FILE_KEY" id="@kikoda/generated-config.ConfigManifest.property.CONFIG_FILE_KEY"></a>

```typescript
public readonly CONFIG_FILE_KEY: string;
```

- *Type:* string

The key in the config-manifest.json file that contains the filename of the config file.

---

##### `CONFIG_MANIFEST_FILENAME`<sup>Required</sup> <a name="CONFIG_MANIFEST_FILENAME" id="@kikoda/generated-config.ConfigManifest.property.CONFIG_MANIFEST_FILENAME"></a>

```typescript
public readonly CONFIG_MANIFEST_FILENAME: string;
```

- *Type:* string

The filename of the Config Manfiest file.

---

### GeneratedConfig <a name="GeneratedConfig" id="@kikoda/generated-config.GeneratedConfig"></a>

Generate a config file from a base config and a set of config layers.

The
config layers are merged in order, with later layers taking precedence over
earlier layers. The resulting config is available in the `config` class attribute
and/or can be written to a file in the output directory.

#### Initializers <a name="Initializers" id="@kikoda/generated-config.GeneratedConfig.Initializer"></a>

```typescript
import { GeneratedConfig } from '@kikoda/generated-config'

new GeneratedConfig(props: GeneratedConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/generated-config.GeneratedConfig.Initializer.parameter.props">props</a></code> | <code><a href="#@kikoda/generated-config.GeneratedConfigProps">GeneratedConfigProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/generated-config.GeneratedConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#@kikoda/generated-config.GeneratedConfigProps">GeneratedConfigProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/generated-config.GeneratedConfig.property.config">config</a></code> | <code><a href="#@kikoda/generated-config.AdditionalConfigObject">AdditionalConfigObject</a></code> | Represents the generated config object. |
| <code><a href="#@kikoda/generated-config.GeneratedConfig.property.fileName">fileName</a></code> | <code>string</code> | Represents the eventual generated output file name. |

---

##### `config`<sup>Required</sup> <a name="config" id="@kikoda/generated-config.GeneratedConfig.property.config"></a>

```typescript
public readonly config: AdditionalConfigObject;
```

- *Type:* <a href="#@kikoda/generated-config.AdditionalConfigObject">AdditionalConfigObject</a>

Represents the generated config object.

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@kikoda/generated-config.GeneratedConfig.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

Represents the eventual generated output file name.

---


### LayeredConfig <a name="LayeredConfig" id="@kikoda/generated-config.LayeredConfig"></a>

This construct current only wraps the lodash.merge() functionality but is intended to be a placeholder for future logic like: global defaults, type enforcement and error handling, dynamic values (custom compute logic), etc.

#### Initializers <a name="Initializers" id="@kikoda/generated-config.LayeredConfig.Initializer"></a>

```typescript
import { LayeredConfig } from '@kikoda/generated-config'

new LayeredConfig(base: any, layers: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/generated-config.LayeredConfig.Initializer.parameter.base">base</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@kikoda/generated-config.LayeredConfig.Initializer.parameter.layers">layers</a></code> | <code>any</code> | *No description.* |

---

##### `base`<sup>Required</sup> <a name="base" id="@kikoda/generated-config.LayeredConfig.Initializer.parameter.base"></a>

- *Type:* any

---

##### `layers`<sup>Required</sup> <a name="layers" id="@kikoda/generated-config.LayeredConfig.Initializer.parameter.layers"></a>

- *Type:* any

---





## Protocols <a name="Protocols" id="Protocols"></a>

### IConfigManifest <a name="IConfigManifest" id="@kikoda/generated-config.IConfigManifest"></a>

- *Implemented By:* <a href="#@kikoda/generated-config.ConfigManifest">ConfigManifest</a>, <a href="#@kikoda/generated-config.IConfigManifest">IConfigManifest</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/generated-config.IConfigManifest.property.files">files</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `files`<sup>Required</sup> <a name="files" id="@kikoda/generated-config.IConfigManifest.property.files"></a>

```typescript
public readonly files: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---


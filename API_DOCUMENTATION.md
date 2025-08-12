# Token-Mon API Documentation

This API provides character-based tokenization and decoding, supporting ASCII, extended Latin, and special symbols. It also offers mapping visualization and export features.

## Base URL

`http://localhost:4000/api/v1/`

---

## Endpoints

### 1. Text to Token

**POST** `/text-to-token`

Convert text input into an array of numerical tokens.

#### Request

```json
{
  "text": "Hello!"
}
```

#### Response

```json
{
  "tokens": [72, 101, 108, 108, 111, 33]
}
```

#### Errors

- `400`: Invalid text input or unsupported character detected.

---

### 2. Token to Text

**POST** `/token-to-text`

Convert an array of tokens back to readable text.

#### Request

```json
{
  "tokens": [72, 101, 108, 108, 111, 33]
}
```

#### Response

```json
{
  "text": "Hello!"
}
```

#### Errors

- `400`: Invalid tokens input.

---

### 3. Character Mapping Viewer

**GET** `/char-mapping`

Returns the full character-to-token mapping.

#### Response

```json
{
  "mapping": [
    { "char": "A", "token": 65 },
    { "char": "©", "token": 192 }
    // ...
  ]
}
```

---

### 4. Export

**POST** `/export`

Export results in text or token format.

#### Request

```json
{
  "type": "text", // or "tokens"
  "data": "Hello!" // or [72, 101, 108, 108, 111, 33]
}
```

#### Response

- Returns downloadable file (`.txt` for text, `.json` for tokens)

#### Errors

- `400`: Invalid export type.

---

## Error Handling

All endpoints return JSON error messages with appropriate HTTP status codes.

## Character Support

- ASCII (0-127)
- Extended Latin (e.g., À, ß, ü)
- Special symbols (e.g., ©, ™, €, ₿)

## Example Usage

- Convert text to tokens for NLP preprocessing.
- Decode tokens for readable output.
- Visualize and export character mappings for analysis.

---

For further questions, contact the API maintainer.

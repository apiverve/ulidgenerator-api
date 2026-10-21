# ULID Generator API - PHP Package

ULID Generator creates Universally Unique Lexicographically Sortable Identifiers that order records chronologically. Pass an optional batch count and millisecond timestamp to produce 26-character collision-resistant unique IDs with format details.

## Installation

Install via Composer:

```bash
composer require apiverve/ulidgenerator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Ulidgenerator\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'count' => 1,
    'timestamp' => 1609459200000
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Ulidgenerator\Client;
use APIVerve\Ulidgenerator\Exceptions\APIException;
use APIVerve\Ulidgenerator\Exceptions\ValidationException;

try {
    $response = $client->execute(['count' => 1, 'timestamp' => 1609459200000]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "ulids": [
      "01KCMMK564DMMCC17AVBZTVNT1",
      "01KCMMK565ZE4681DFAEWBF95G",
      "01KCMMK566K1REYH0JEK4Q8DKW",
      "01KCMMK5670W9EHFNX76R8FKWH",
      "01KCMMK568SFRY6DCZTZYMR66Y"
    ],
    "count": 5,
    "timestamp": 1765924246724,
    "format": "26 characters (10 timestamp + 16 random)",
    "sortable": true,
    "case_insensitive": true
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/ulidgenerator?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/ulidgenerator?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/ulidgenerator?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).

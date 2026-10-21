# ULID Generator API - Ruby Gem

ULID Generator creates Universally Unique Lexicographically Sortable Identifiers that order records chronologically. Pass an optional batch count and millisecond timestamp to produce 26-character collision-resistant unique IDs with format details.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_ulidgenerator'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_ulidgenerator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_ulidgenerator'

# Initialize the client
client = APIVerve::Ulidgenerator::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  count: 1,
  timestamp: 1609459200000
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ count: 1, timestamp: 1609459200000 })
  puts response["data"]
rescue APIVerve::Ulidgenerator::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Ulidgenerator::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Ulidgenerator::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/ulidgenerator?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/ulidgenerator?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/ulidgenerator?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).

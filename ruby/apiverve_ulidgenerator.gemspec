# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "apiverve_ulidgenerator"
  spec.version       = "1.2.3"
  spec.authors       = ["APIVerve"]
  spec.email         = ["hello@apiverve.com"]

  spec.summary       = "ULID Generator API - Ruby Client"
  spec.description   = "ULID Generator creates Universally Unique Lexicographically Sortable Identifiers that order records chronologically. Pass an optional batch count and millisecond timestamp to produce 26-character collision-resistant unique IDs with format details."
  spec.homepage      = "https://apiverve.com/marketplace/ulidgenerator?utm_source=ruby&utm_medium=referral&utm_content=homepage"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/apiverve/ulidgenerator-API/tree/main/ruby"
  spec.metadata["changelog_uri"] = "https://apiverve.com/changelog"
  spec.metadata["documentation_uri"] = "https://docs.apiverve.com/ref/ulidgenerator"

  spec.files = Dir.glob("{lib}/**/*") + %w[README.md LICENSE]
  spec.require_paths = ["lib"]

  spec.add_dependency "faraday", ">= 1.0", "< 3.0"
  spec.add_dependency "faraday-multipart", "~> 1.0"
  spec.add_dependency "json", "~> 2.0"
end

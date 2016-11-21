# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "shumsky"
  spec.version       = "0.1.0"
  spec.authors       = ["Prasanna Gautam"]
  spec.email         = ["FIRSTNAME.LASTNAME AT gmail DOT com"]

  spec.summary       = %q{Theme created for Paul Shumsky}
  spec.homepage      = "https://beyondbasicsguitar.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.3"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end

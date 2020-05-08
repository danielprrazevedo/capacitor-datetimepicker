
  Pod::Spec.new do |s|
    s.name = 'CapacitorDatetimepicker'
    s.version = '0.0.1'
    s.summary = 'DateTime Picker native plugin for capacitor'
    s.license = 'MIT'
    s.homepage = 'https://github.com/danielprrazevedo/capacitor-datetimepicker'
    s.author = 'Daniel Rosa <daniel.prr.azevedo@gmail.com>'
    s.source = { :git => 'https://github.com/danielprrazevedo/capacitor-datetimepicker', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end
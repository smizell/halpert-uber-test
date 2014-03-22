var uberDoc = require('./example.uber'),
    Halpert = require('halpert'),
    HyperdescribeUberJson = require('hyperdescribe-uber-json'),
    HyperdescribeHalJson = require('hyperdescribe-hal-json'),

halpert = new Halpert;

// Register formats to use
halpert.registerFormat(HyperdescribeUberJson);
halpert.registerFormat(HyperdescribeHalJson);

// Convert UBER to HAL
halDoc = halpert.convertFrom(uberDoc, 'application/vnd.amundsen-uber+json').to('application/hal+json')

// Print pretty JSON string to console
console.log(JSON.stringify(halDoc, null, 2))
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
// var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Pokemon = require('/Users/Wasek/Desktop/Term 6/COSC 310/Project/Project 310/src/Components/Pokemon');

describe('Pokemon', () => {
    it('should exist', () => {
        expect(Pokemon).toExist();
    });
});
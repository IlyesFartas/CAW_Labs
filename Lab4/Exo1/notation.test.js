const mean = require ('./notation')

test('Returns the Mean of array', () => {
    expect(mean([1,2,3,4])).toBe(2.5)
})